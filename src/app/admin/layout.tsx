"use client";
import "../globals.scss"; // Global SCSS (áp dụng cho toàn app)
import HeaderSystem from "@/app/admin/HeaderSystem";
import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="wrapper">
      <HeaderSystem role="admin" />
      <div className="layout-container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
