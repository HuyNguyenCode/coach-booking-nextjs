"use client";
import "../globals.scss"; // Global SCSS (áp dụng cho toàn app)
import Header from "../(auth)/components/Header";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="wrapper">
      <Header stateDfSingup={true} />
      <div className="layout-container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
