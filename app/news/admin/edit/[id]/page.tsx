import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import PostEditor from "@/components/PostEditor";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const cookieStore = await cookies();
  const auth = cookieStore.get("news_admin_auth")?.value;
  if (!auth || auth !== process.env.NEWS_ADMIN_PASSWORD) redirect("/news/admin");

  const { id } = await params;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: post } = await supabase
    .from("news_posts")
    .select("id, title, author, content, excerpt, published, scheduled_at")
    .eq("id", id)
    .single();

  if (!post) redirect("/news/admin");

  return <PostEditor initialPost={post} />;
}
