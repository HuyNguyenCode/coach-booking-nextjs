"use client";

import classNames from "classnames/bind";
import styles from "./Header.module.scss"; // đổi thành .module.scss để Next.js hỗ trợ CSS module
import { useRouter } from "next/navigation";

const cx = classNames.bind(styles);

interface HeaderProps {
  stateDfSingup: boolean;
}

export default function Header({ stateDfSingup }: HeaderProps) {
  const router = useRouter();

  return (
    <div className={cx("header-auth-container")}>
      <div className={cx("header-auth-content")}>
        <div className={cx("main-content")}>
          <div
            className={cx("header-logo")}
            onClick={() => router.push("/home")}
          />
          <span style={{ fontStyle: "italic" }}>Give More, Got More</span>
        </div>
      </div>
    </div>
  );
}
