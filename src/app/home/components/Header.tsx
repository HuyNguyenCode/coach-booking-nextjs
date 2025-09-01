"use client";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { useRouter } from "next/navigation";

const cx = classNames.bind(styles);

export default function Header() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <div className={cx("header-container")}>
      <div className={cx("header-content")}>
        {/* Left */}
        <div className={cx("left-content")}>
          <div className={cx("submenu")}>
            <i className={cx("fa-solid fa-bars")}></i>
          </div>
          <div
            className={cx("header-logo")}
            onClick={() => router.push("/home")}
          ></div>
        </div>

        {/* Center */}
        <div className={cx("center-content")}>
          <div className={cx("search-are")}>
            <i className={cx("search-icon fa-solid fa-magnifying-glass")}></i>
            <input
              className={cx("search-input")}
              placeholder="Search for anything"
            />
          </div>
          <div className={cx("child-content")}>
            <a href="#">Mentor Booking</a>
          </div>
          <div className={cx("child-content")}>
            <a href="#">Course</a>
          </div>
        </div>

        {/* Right */}
        <div className={cx("right-content")}>
          <button className={cx("btnLogin")} onClick={handleLogin}>
            Log in
          </button>
          <button className={cx("btnSignup")} onClick={handleSignup}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
