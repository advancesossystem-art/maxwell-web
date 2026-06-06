import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Admin Login",
  description: "Internal admin access",
  path: "/admin/login",
  noIndex: true,
});

export default function AdminLoginPage() {
  return <AdminLoginForm />;
}
