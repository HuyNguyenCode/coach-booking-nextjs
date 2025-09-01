"use client";
import classNames from "classnames/bind";
import styles from "./Signup.module.scss"; // đổi thành CSS module
import { Fragment, useState } from "react";
import GoogleIcon from "@/app/components/SVG/GoogleIcon";
import FacebookIcon from "@/app/components/SVG/FacebookIcon";
import { useRouter } from "next/navigation";

const cx = classNames.bind(styles);

export default function Signup() {
  const [checkCoach, setCheckCoach] = useState<boolean>(false);
  const [checkStudent, setCheckStudent] = useState<boolean>(false);
  const [createText, setCreateText] = useState<string>("Create an account");
  const [stateRoleSignup, setStateRoleSignup] = useState<boolean>(false);
  const [heading, setHeading] = useState<string>("");
  const [checkBoxText, setCheckBoxText] = useState<string>("");
  const [stateDfSignup, setStateDfSignup] = useState<boolean>(false);
  const [changeStateText, setChangeStateText] = useState<string>("");
  const router = useRouter();

  const handleSignupBtn = () => {
    setStateRoleSignup(!stateRoleSignup);
    if (checkCoach) {
      setStateDfSignup(!stateDfSignup);
      setHeading("Sign up to looking for your student");
      setCheckBoxText(
        "Send me emails with tips on how to find student that fits my needs."
      );
      setChangeStateText("Join as a Student");
    } else {
      setStateDfSignup(!stateDfSignup);
      setHeading("Sign up to looking for your favorite coach");
      setCheckBoxText(
        "Send me helpful emails to find rewarding courses and coach leads."
      );
      setChangeStateText("Apply as Coach");
    }
  };

  const handleCheck = (role: "student" | "coach") => {
    if (role === "student") {
      setCheckStudent(true);
      if (checkCoach) setCheckCoach(!checkCoach);
      setCreateText("Join as a student");
    } else {
      setCheckCoach(true);
      if (checkStudent) setCheckStudent(!checkStudent);
      setCreateText("Apply as a coach");
    }
  };

  const handleChangeState = () => {
    if (checkCoach) {
      // Đang là Coach → chuyển sang Student
      setHeading("Sign up to looking for your favorite coach");
      setCheckBoxText(
        "Send me helpful emails to find rewarding courses and coach leads."
      );
      setChangeStateText("Apply as Coach");
      setCheckCoach(false);
      setCheckStudent(true);
    } else if (checkStudent) {
      // Đang là Student → chuyển sang Coach
      setHeading("Sign up to looking for your student");
      setCheckBoxText(
        "Send me emails with tips on how to find student that fits my needs."
      );
      setChangeStateText("Join as a Student");
      setCheckStudent(false);
      setCheckCoach(true);
    }
  };

  const handleHeaderText = () => {
    return (
      <span className={cx("header-text")}>
        <a onClick={handleChangeState}>{changeStateText}</a>
      </span>
    );
  };

  return (
    <Fragment>
      <div className={cx("header-auth-container")}>
        <div className={cx("header-auth-content")}>
          <div className={cx("left-content")}>
            <div
              className={cx("header-logo")}
              onClick={() => router.push("/home")}
            />
          </div>
          <div className={cx("center-content")}></div>
          <div className={cx("right-content")}>
            {stateDfSignup ? handleHeaderText() : ""}
          </div>
        </div>
      </div>

      <div className={cx("signup-wrapper")}>
        <div className={cx("signup-container")}>
          <div className={cx("signup-content")}>
            <div className={cx("signup-board")}>
              {/* Step 1: chọn role */}
              <div
                className={
                  stateDfSignup
                    ? cx("signup-select", "disable")
                    : cx("signup-select")
                }
              >
                <h1 className={cx("signup-header")}>
                  Join as a coach or student
                </h1>
                <div className={cx("signup-option")}>
                  <div
                    className={
                      checkStudent
                        ? cx("signup-student", "active")
                        : cx("signup-student")
                    }
                    onClick={() => handleCheck("student")}
                  >
                    <i className="fa-solid fa-graduation-cap"></i>
                    <h2>I’m a student, looking for a coach</h2>
                    <div className={cx("selected-circle")}>
                      {checkStudent ? (
                        <i className="fa-solid fa-circle-check"></i>
                      ) : (
                        <i className="fa-regular fa-circle-check"></i>
                      )}
                    </div>
                  </div>
                  <div
                    className={
                      checkCoach
                        ? cx("signup-coach", "active")
                        : cx("signup-coach")
                    }
                    onClick={() => handleCheck("coach")}
                  >
                    <i className="fa-solid fa-business-time"></i>
                    <h2>I’m a coach, looking for a class</h2>
                    <div className={cx("selected-circle")}>
                      {checkCoach ? (
                        <i className="fa-solid fa-circle-check"></i>
                      ) : (
                        <i className="fa-regular fa-circle-check"></i>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSignupBtn}
                  className={
                    checkStudent || checkCoach
                      ? cx("signupBtn", "active")
                      : cx("signupBtn")
                  }
                >
                  {createText}
                </button>
                <p className={cx("loginText")}>
                  Already have an account?
                  <a href="/login"> Log In</a>
                </p>
              </div>

              {/* Step 2: form signup */}
              <div
                className={
                  stateRoleSignup
                    ? cx("signup-coach-section", "active")
                    : cx("signup-coach-section")
                }
              >
                <h1 className={cx("signup-header")}>{heading}</h1>
                <button className={cx("appleBtn")}>
                  <i className="fa-brands fa-apple"></i>Continue with Apple
                </button>
                <button className={cx("ggBtn")}>
                  <div className={cx("google-icon")}>
                    <GoogleIcon />
                  </div>
                  Continue with Google
                </button>
                <button className={cx("fbBtn")}>
                  <div className={cx("google-icon")}>
                    <FacebookIcon />
                  </div>
                  Continue with Facebook
                </button>
                <span>or</span>

                <form className={cx("input-area")}>
                  <div className={cx("input-name")}>
                    <div className={cx("form-group")}>
                      <input
                        type="text"
                        className={cx("form-control")}
                        placeholder="First name"
                      />
                    </div>
                    <div className={cx("form-group")}>
                      <input
                        type="text"
                        className={cx("form-control")}
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className={cx("form-group")}>
                    <input
                      type="email"
                      className={cx("form-control")}
                      placeholder="Email address"
                    />
                  </div>
                  <div className={cx("form-group")}>
                    <input
                      type="password"
                      className={cx("form-control")}
                      placeholder="Password"
                    />
                  </div>
                  <div className={cx("form-group")}>
                    <select
                      defaultValue="Viet Nam"
                      className={cx("form-control")}
                    >
                      <option>Viet Nam</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className={cx("form-check")}>
                    <input type="checkbox" className={cx("form-check-input")} />
                    <p className={cx("form-check-label")}>{checkBoxText}</p>
                  </div>
                  <div className={cx("form-check")}>
                    <input type="checkbox" className={cx("form-check-input")} />
                    <p className={cx("form-check-label")}>
                      Yes, I understand and agree to the Terms of Service ,
                      including the User Agreement and Privacy Policy .
                    </p>
                  </div>
                  <button type="submit" className={cx("btn", "btn-primary")}>
                    Create my account
                  </button>
                </form>

                <p className={cx("loginText")}>
                  Already have an account?
                  <a href="/login"> Log In</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
