import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <section className={cx("footer-wrapper")}>
      <div className={cx("container")}>
        <div className={cx("footer-content")}>
          <div className={cx("up-content")}>
            <div className={cx("left-footer-content")}>
              <div className={cx("child-content")}>
                <ul>
                  <li>Mentorship Busniess</li>
                  <li>Becom an Mentor</li>
                  <li>Get the app</li>
                  <li>About us</li>
                  <li>Contact us</li>
                </ul>
              </div>
              <div className={cx("child-content")}>
                <ul>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Help and Support</li>
                  <li>Affiliate</li>
                  <li>Investor</li>
                </ul>
              </div>
              <div className={cx("child-content")}>
                <ul>
                  <li>Terms</li>
                  <li>Privacy policy</li>
                  <li>Cookie settings</li>
                  <li>Sitemap</li>
                  <li>Accessibility statement</li>
                </ul>
              </div>
            </div>
            <div className={cx("right-footer-content")}>
              <button className={cx("btnFooter")}>
                <i className={cx("fa-solid fa-globe")}></i>English
              </button>
            </div>
          </div>
          <div className={cx("down-content")}>
            <div className={cx("footer-logo")}></div>
            <div className={cx("footer-copyright")}>
              © 2023 Mentorship, Inc.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
