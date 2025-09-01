"use client";

import classNames from "classnames/bind";
import styles from "../Section.module.scss";
// import Slider from "react-slick";
import RatingStarsCoures from "@/app/components/SVG/RatingStarsCoures";

import dynamic from "next/dynamic";

const cx = classNames.bind(styles);
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Courses() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const courses = [
    {
      img: "https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg",
      title: "Automate the Boring Stuff with Python Programming",
      coach: "AI Sweigart",
      rate: 4.6,
      comments: 108308,
      price: "₫279,000",
      origin: "₫1,699,000",
    },
    {
      img: "https://img-c.udemycdn.com/course/240x135/2485240_d405_7.jpg",
      title: "Python : Master Programming and Development with 15...",
      coach: "Kay Dev",
      rate: 4.3,
      comments: 13371,
      price: "₫379,000",
      origin: "₫1,699,000",
    },
    {
      img: "https://img-c.udemycdn.com/course/240x135/629302_8a2d_2.jpg",
      title: "Learn Python Programming Masterclass",
      coach: "Keith Johnson",
      rate: 4.6,
      comments: 99288,
      price: "₫399,000",
      origin: "₫2,499,000",
    },
    {
      img: "https://img-c.udemycdn.com/course/240x135/3434032_8b2b_2.jpg",
      title: "Python Complete Course For Python Beginners",
      coach: "Hoziron Tech",
      rate: 4.6,
      comments: 3434,
      price: "₫329,000",
      origin: "₫1,099,000",
    },
    {
      img: "https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg",
      title: "The Complete Python Bootcamp From Zero to Hero...",
      coach: "Keith Johnson",
      rate: 4.6,
      comments: 470430,
      price: "₫379,000",
      origin: "₫2,199,000",
    },
    {
      img: "https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg",
      title: "Automate the Boring Stuff with Python Programming",
      coach: "AI Sweigart",
      rate: 4.6,
      comments: 108308,
      price: "₫279,000",
      origin: "₫1,699,000",
    },
    {
      img: "https://img-c.udemycdn.com/course/240x135/2485240_d405_7.jpg",
      title: "Python : Master Programming and Development with 15...",
      coach: "Kay Dev",
      rate: 4.3,
      comments: 13371,
      price: "₫379,000",
      origin: "₫1,699,000",
    },
    {
      img: "https://img-c.udemycdn.com/course/240x135/629302_8a2d_2.jpg",
      title: "Learn Python Programming Masterclass",
      coach: "Keith Johnson",
      rate: 4.6,
      comments: 99288,
      price: "₫399,000",
      origin: "₫2,499,000",
    },
    {
      img: "https://img-c.udemycdn.com/course/240x135/3434032_8b2b_2.jpg",
      title: "Python Complete Course For Python Beginners",
      coach: "Hoziron Tech",
      rate: 4.6,
      comments: 3434,
      price: "₫329,000",
      origin: "₫1,099,000",
    },
  ];

  return (
    <div className={cx("course-content")}>
      <div className={cx("courses-slider")}>
        <Slider {...settings}>
          {courses.map((course, idx) => (
            <div key={idx} className={cx("course-item")}>
              <img
                src={course.img}
                alt={course.title}
                className={cx("course-img")}
              />
              <div className={cx("course-title", "lg-text")}>
                {course.title}
              </div>
              <div className={cx("course-coach", "sm-text")}>
                {course.coach}
              </div>
              <div className={cx("course-rate")}>
                <span className={cx("lg-text")}>{course.rate}</span>
                <RatingStarsCoures className="stars-rate-courses" />
                <div className={cx("comment-rate", "sm-text")}>
                  ({course.comments.toLocaleString()})
                </div>
              </div>
              <div className={cx("course-price")}>
                <div className={cx("price", "lg-text")}>{course.price}</div>
                <div className={cx("price-origin")}>{course.origin}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
