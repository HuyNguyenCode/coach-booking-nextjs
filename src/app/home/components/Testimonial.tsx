"use client";

import classNames from "classnames/bind";
import styles from "../Section.module.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlayBtn from "../../components/SVG/Play";

const cx = classNames.bind(styles);

interface TestimonialItem {
  avatar: string;
  text: string;
  highlight: string;
  user: {
    initials: string;
    name: string;
  };
  courseTitle: string;
}

const testimonials: TestimonialItem[] = [
  {
    avatar: "https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg",
    text: "I am proud to say that after a few months of taking this course...",
    highlight: "I passed my exam and am now an AWS Certified Cloud Practitioner!",
    user: { initials: "SM", name: "Surya M" },
    courseTitle: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2022",
  },
  {
    avatar: "https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg",
    text: "This course helped me",
    highlight: "freshen up on my product manager skills and land a job at Facebook!",
    user: { initials: "PW", name: "Phillip W" },
    courseTitle: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2022",
  },
  {
    avatar: "https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg",
    text: "One of the best courses on management and leadership I have come across so far.",
    highlight: "Would help anyone become a better manager.",
    user: { initials: "WA", name: "Will A" },
    courseTitle: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2022",
  },
  {
    avatar: "https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg",
    text: "I highly",
    highlight: "recommend this course for all budding data scientists.",
    user: { initials: "RF", name: "Ron F" },
    courseTitle: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2022",
  },
];

export default function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={cx("testimonial-content")}>
      <div className={cx("testimonials-slider")}>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div className={cx("testimonial-item")} key={index}>
              <div className={cx("content-up")}>
                <div className={cx("testimonials-comment")}>
                  <img
                    src={item.avatar}
                    alt="quote"
                    className={cx("testimonials-img")}
                  />
                  <p className={cx("testimonials-text", "lg-text")}>
                    {item.text} <span>{item.highlight}</span>
                  </p>
                </div>
                <div className={cx("testimonials-user")}>
                  <div className={cx("user-avatar")}>{item.user.initials}</div>
                  <span className={cx("user-name")}>{item.user.name}</span>
                </div>
              </div>

              <div className={cx("content-down")}>
                <div className={cx("testimonials-course")}>
                  <PlayBtn />
                  <h2 className={cx("coures-title", "lg-text")}>
                    {item.courseTitle}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
