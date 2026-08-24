import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 300; // 5-minute cache

// NOTE FOR ERIC: This route queries the `events` table in the Linksi Supabase project.
// Adjust the table name and column names below if they differ in your schema.
// Expected columns: id, title, description, starts_at, ends_at, location, image_url, url, category, is_public
// If events use a different "public" flag (e.g. `published`), update the .eq() filter below.

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password, ...eventData } = body;

    if (!password || password !== process.env.NEWS_ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data, error } = await supabase
      .from("events")
      .insert({
        title: eventData.title,
        description: eventData.description ?? null,
        starts_at: eventData.starts_at,
        ends_at: eventData.ends_at ?? null,
        location: eventData.location ?? null,
        image_url: null,
        url: eventData.url ?? null,
        category: eventData.category ?? null,
        is_public: eventData.is_public ?? true,
      })
      .select("id, title, description, starts_at, ends_at, location, image_url, url, category")
      .single();

    if (error) {
      console.error("Supabase events insert error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("Events POST error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data, error } = await supabase
      .from("events")
      .select("id, title, description, starts_at, ends_at, location, image_url, url, category")
      .eq("is_public", true)
      .gte("ends_at", new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()) // include events up to 7 days past
      .order("starts_at", { ascending: true });

    if (error) {
      // Log for Vercel — likely means the events table doesn't exist yet in Linksi's Supabase project
      console.error("Supabase events error:", error.message);
      return NextResponse.json([]);
    }

    return NextResponse.json(data ?? [], {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60" },
    });
  } catch (err) {
    console.error("Events API error:", err);
    return NextResponse.json([]);
  }
}
