import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";

  let query = supabase
    .from("news_posts")
    .select("id, title, slug, author, excerpt, published_at, created_at")
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (search) {
    query = query.or(`title.ilike.%${search}%,excerpt.ilike.%${search}%,author.ilike.%${search}%`);
  }

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data ?? []);
}
