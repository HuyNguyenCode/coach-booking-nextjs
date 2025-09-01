"use client";

import classNames from "classnames/bind";
import styles from "./Homepage.module.scss";

import Courses from "../home/components/Courses";
import Testimonial from "../home/components/Testimonial";
import Coach from "../home/components/Coach";
import Banner from "../home/components/Banner";
import Brand from "../home/components/Brand";
import Category from "../home/components/Category";
import Discover from "../home/components/Discover";
import BecomeCoach from "../home/components/BecomeCoach";

const cx = classNames.bind(styles);

export default function Homepage() {
  return (
    <div className={cx("homepage-container")}>
      <section className={cx("homepage-banner-wrapper")}>
        <div className={cx("container")}>
          <Banner />
        </div>
      </section>
      <section className={cx("homepage-brand-wrapper")}>
        <Brand />
      </section>
      <section className={cx("homepage-courses-wrapper")}>
        <div className={cx("container")}>
          <h1 className={cx("course-head-title")}>
            A broad selection of courses
          </h1>
          <p className={cx("course-sub-title")}>
            Choose from over 210,000 online video courses with new additions
            published every month
          </p>
          <div className={cx("course-area")}>
            <h1 className={cx("course-area-head-title")}>
              Expand your career opportunities with these courses
            </h1>
            <p className={cx("course-area-sub-title")}>
              Take one of Udemy’s range of Python courses and learn how to code
              using this incredibly useful language...
            </p>
            <button className={cx("btnExplore")}>
              <span>Explore More</span>
            </button>
            <Courses />
          </div>
        </div>
      </section>
      <section className={cx("homepage-category-wrapper")}>
        <div className={cx("container")}>
          <h2 className={cx("category-head-title header-title")}>
            Top categories
          </h2>
          <Category />
        </div>
      </section>
      <section className={cx("homepage-testimonials-wrapper")}>
        <div className={cx("container")}>
          <h1 className={cx("testimonial-head-title")}>
            How learners like you are achieving their goals
          </h1>
          <div className={cx("testimonial-area")}>
            <Testimonial />
          </div>
        </div>
      </section>
      <section className={cx("homepage-coach-wrapper")}>
        <div className={cx("container")}>
          <h1 className={cx("coach-head-title header-title")}>
            Meet our best coach
          </h1>
          <div className={cx("coach-area")}>
            <Coach />
          </div>
        </div>
      </section>
      <section className={cx("homepage-discover-wrapper")}>
        <div className={cx("container")}>
          <Discover />
        </div>
      </section>
      <section className={cx("homepage-becomecoach-wrapper")}>
        <div className={cx("container")}>
          <BecomeCoach />
        </div>
      </section>
    </div>
  );
}
