import { redirect } from "next/navigation";
import Sidebar from "@/app/ui/dashboard/sidebar";
import { apiFetch, type UserResponse } from "@/lib/api/client";
import AuthHydrator from "@/app/ui/auth/auth-hydrator";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let user: UserResponse;

  try {
    user = await apiFetch<UserResponse>("/api/v1/users/me", {
      method: "GET",
    });
  } catch (error) {
    redirect("/api/auth/logout");
  }

  return (
    <>
      <AuthHydrator user={user} />

      <div className="flex h-screen bg-[#F8F9FA] overflow-hidden">
        <Sidebar user={user} />
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </>
  );
}
