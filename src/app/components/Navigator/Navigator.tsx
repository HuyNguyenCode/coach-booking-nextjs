// components/Navigator/Navigator.tsx
"use client";

import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Navigator.module.scss";
import Menu from "@/app/components/Menu/Menu";

const cx = classNames.bind(styles);

const Navigator: React.FC = () => {
  const [menuUsers, showMenuUsers] = useState(false);
  const [menuClassroom, showMenuClassroom] = useState(false);
  const [menuSpeciality, showMenuSpeciality] = useState(false);
  const [menuHandbook, showMenuHandbook] = useState(false);

  return (
    <div className={cx("navigator-wrapper")}>
      <div className={cx("navigator-content")}>
        {/* Users system */}
        <div
          className={cx("navigator-button")}
          onMouseOver={() => showMenuUsers(true)}
          onMouseLeave={() => showMenuUsers(false)}
        >
          {menuUsers && <Menu menuName="Users system" />}
          Users system
        </div>

        {/* Classroom */}
        <div
          className={cx("navigator-button")}
          onMouseOver={() => showMenuClassroom(true)}
          onMouseLeave={() => showMenuClassroom(false)}
        >
          {menuClassroom && <Menu menuName="Classroom" />}
          Classroom
        </div>

        {/* Specialities */}
        <div
          className={cx("navigator-button")}
          onMouseOver={() => showMenuSpeciality(true)}
          onMouseLeave={() => showMenuSpeciality(false)}
        >
          {menuSpeciality && <Menu menuName="Specialities" />}
          Specialities
        </div>

        {/* Handbook */}
        <div
          className={cx("navigator-button")}
          onMouseOver={() => showMenuHandbook(true)}
          onMouseLeave={() => showMenuHandbook(false)}
        >
          Handbook
          {menuHandbook && <Menu menuName="Handbook" />}
        </div>
      </div>
    </div>
  );
};

export default Navigator;
