// components/Navigator/Navigator.tsx
"use client";

import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Navigator.module.scss";
import Menu from "@/app/components/Menu/Menu";

const cx = classNames.bind(styles);

function CouchNavigator() {
  const [menuManage, setMenuManage] = useState(false);

  return (
    <div className={cx("navigator-wrapper")}>
      <div className={cx("navigator-content")}>
        <div
          className={cx("navigator-button")}
          onMouseOver={() => setMenuManage(true)}
          onMouseLeave={() => setMenuManage(false)}
        >
          {menuManage && <Menu menuName="Manage" />}
          Manage
        </div>
      </div>
    </div>
  );
}

export default CouchNavigator;
