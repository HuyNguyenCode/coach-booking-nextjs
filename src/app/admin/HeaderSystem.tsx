// components/HeaderSystem/HeaderSystem.tsx
"use client";

import React from "react";
import styles from "./HeaderSystem.module.scss"; // đổi thành .module.scss
import Navigator from "@/app/components/Navigator/Navigator";
import CoachNavigator from "@/app/components/Navigator/CoachNavigator";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface HeaderSystemProps {
  role: "admin" | "coach" | string; // bạn có thể thêm role khác nếu cần
}

const HeaderSystem: React.FC<HeaderSystemProps> = ({ role }) => {
  return (
    <div className={cx("header-system-container")}>
      {/* thanh navigator */}
      <div className={cx("header-system-tabs-container")}>
        {role === "admin" ? <Navigator /> : <CoachNavigator />}
      </div>

      {/* nút logout */}
      <div className={cx("btn", "btn-logout")}>
        <i className={cx("fas fa-sign-out-alt")}></i>
      </div>
    </div>
  );
};

export default HeaderSystem;
