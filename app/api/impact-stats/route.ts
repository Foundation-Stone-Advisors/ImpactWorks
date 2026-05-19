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

    const { data, error } = await sb.rpc("get_impact_stats");

    if (error) throw new Error(error.message);

    return {
      referrals: data.referrals ?? 0,
      individuals: data.individuals ?? 0,
      partnerOrganizations: data.partner_organizations ?? 0,
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
