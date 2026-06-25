import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import PostEditor from "@/components/PostEditor";

export const dynamic = "force-dynamic";

export default async function NewPostPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("news_admin_auth")?.value;
  if (!auth || auth !== process.env.NEWS_ADMIN_PASSWORD) redirect("/news/admin");

  return <PostEditor />;
}
