import { createClient } from "@supabase/supabase-js";
import { unstable_cache } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const fetchStats = unstable_cache(
  async () => {
    const sb = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const [referralsResult, individualsRaw, partnersResult] = await Promise.all([
      sb
        .from("linksy_tickets")
        .select("id", { count: "exact", head: true })
        .or("is_test.is.null,is_test.eq.false"),
      sb
        .from("linksy_tickets")
        .select("client_email, client_phone")
        .or("is_test.is.null,is_test.eq.false"),
      sb
        .from("linksy_providers")
        .select("id", { count: "exact", head: true })
        .eq("is_active", true)
        .eq("provider_status", "active"),
    ]);

    const seen = new Set<string>();
    for (const row of individualsRaw.data ?? []) {
      const key = row.client_email
        ? row.client_email.toLowerCase()
        : row.client_phone;
      if (key) seen.add(key);
    }

    return {
      referrals: referralsResult.count ?? 0,
      individuals: seen.size,
      partnerOrganizations: partnersResult.count ?? 0,
    };
  },
  ["impact-stats"],
  { revalidate: 600 }
);

export async function GET() {
  try {
    const stats = await fetchStats();
    return NextResponse.json(stats);
  } catch {
    return NextResponse.json(
      { referrals: 0, individuals: 0, partnerOrganizations: 0 },
      { status: 500 }
    );
  }
}
