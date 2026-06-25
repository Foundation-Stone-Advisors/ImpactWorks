import { cookies } from "next/headers";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("news_admin_auth")?.value;
  const isAuthed = !!auth && auth === process.env.NEWS_ADMIN_PASSWORD;

  if (!isAuthed) return <AdminLogin />;
  return <AdminDashboard />;
}
