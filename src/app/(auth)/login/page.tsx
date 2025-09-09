"use client";

import { useState, useReducer, Fragment } from "react";
import { useRouter } from "next/navigation";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import GoogleIcon from "@/app/components/SVG/GoogleIcon";
import FacebookIcon from "@/app/components/SVG/FacebookIcon";
// Components
// import Header from "@/components/Layout/AuthLayout/Header";

// Reducer & Actions
// import appReducer from "@/store/reducers/userReducer";
// import { userLoginSuccess } from "@/store/actions";

// API Service
// import handleLoginAPI from "@/services/userService";

const cx = classNames.bind(styles);

interface LoginResponse {
  errCode: number;
  message?: string;
  user?: any;
  data?: {
    token: string;
    refreshToken: string;
    refreshTokenExpireIn: number;
  };
}

const initialState = {
  isLoggedIn: false,
  userInfo: null,
};

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [errMessage, setErrMessage] = useState<string>("");

  // const [state, dispatch] = useReducer(appReducer, initialState);
  const router = useRouter();

  // const handleLogin = async () => {
  //   setErrMessage("");
  //   try {
  //     const data: LoginResponse = await handleLoginAPI(username, password);
  //     console.log("API result:", data);

  //     if (data && data.errCode !== 0) {
  //       setErrMessage(data.message || "Login failed!");
  //       return;
  //     }

  //     if (data && data.errCode === 0) {
  //       dispatch(userLoginSuccess(data.user));

  //       // Save token to localStorage (or cookie)
  //       if (data.data?.token) {
  //         localStorage.setItem("accessToken", data.data.token);
  //       }

  //       router.push("/system/user-manage");
  //     }
  //   } catch (error: any) {
  //     console.error("Login error:", error);
  //     if (error.response?.data?.userStatus?.message) {
  //       setErrMessage(error.response.data.userStatus.message);
  //     } else {
  //       setErrMessage("Something went wrong!");
  //     }
  //   }
  // };
  const handleLogin = () => {
    router.push("/home");
  };
  const togglePassword = () => setHidePassword(!hidePassword);

  return (
    <Fragment>
      <div className={cx("login-background")}>
        <div className={cx("login-container")}>
          <div className={cx("login-content")}>
            <h1 className={cx("login-title")}>Login</h1>

            {/* Username */}
            <div className={cx("login-box")}>
              <h2 className={cx("box-title")}>Username</h2>
              <input
                className={cx("box-input")}
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className={cx("login-box")}>
              <h2 className={cx("box-title")}>Password</h2>
              <div className={cx("password-box")}>
                <input
                  className={cx("box-input")}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={hidePassword ? "password" : "text"}
                />
                <span onClick={togglePassword}>
                  <i
                    className={
                      hidePassword
                        ? cx("fa-solid fa-eye-slash")
                        : cx("fa-solid fa-eye")
                    }
                  />
                </span>
              </div>

              {errMessage && (
                <div
                  className={cx("message-error")}
                  style={{ color: "red", marginTop: "10px" }}
                >
                  {errMessage}
                </div>
              )}

              <span className={cx("forgot-password-text")}>
                Forgot your password?
              </span>
            </div>

            {/* Login Button */}
            <button className={cx("btn-login")} onClick={handleLogin}>
              Log in
            </button>

            <p className={cx("login-text")}>Or sign in with</p>

            {/* Social Login */}
            <div className={cx("login-social")}>
              <a className={cx("facebook-icon")}>
                <FacebookIcon />
              </a>
              {/* <a className={cx("twitter-icon")}>
                <i className={cx("fab fa-twitter")}></i>
              </a> */}
              <a className={cx("google-icon")}>
                <GoogleIcon />
              </a>
            </div>

            <p className={cx("signupText")}>Don't have an account?</p>
            <button className={cx("btn-signup")}>
              <a href="/signup">Sign up</a>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
