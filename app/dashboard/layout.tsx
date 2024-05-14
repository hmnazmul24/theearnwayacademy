"use client";

export default function BranchDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-slate-100 min-h-screen">{children}</div>;
}
