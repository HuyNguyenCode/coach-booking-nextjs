"use client";

import classNames from "classnames/bind";
import styles from "../Section.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RatingStarsCoach from "@/app/components/SVG/RatingStarsCoach";
// import { renderCoach } from "@/redux/slice/coachReducer";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect, MouseEvent } from "react";
import { useRouter } from "next/navigation";
// import { RootState, AppDispatch } from "@/redux/store";

const cx = classNames.bind(styles);

interface CoachItem {
  id: string | number;
  firstName: string;
  lastName: string;
  image?: string; // base64 từ backend
  positionID?: string;
  Markdown: {
    description: string;
  };
}

export default function Coach() {
  const router = useRouter();
  // const dispatch = useDispatch<AppDispatch>();

  // const coachsArr = useSelector(
  //   (state: RootState) => state.coach.coachsArr as CoachItem[]
  // );

  // useEffect(() => {
  //   dispatch(renderCoach());
  // }, [dispatch]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleBookCoach = (
    e: MouseEvent<HTMLButtonElement>,
    coachId: string | number
  ) => {
    e.preventDefault();
    router.push(`/coach-infor/${coachId}`);
  };

  const coachsArr: CoachItem[] = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      image: "/assets/img/Coaches/coach_1.jpg",
      positionID: "Senior Coach",
      Markdown: { description: "Experienced in business coaching." },
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      image: "/assets/img/Coaches/coach_2.jpg",
      positionID: "Tech Coach",
      Markdown: { description: "Specialist in IT and software." },
    },
    {
      id: 3,
      firstName: "Emily",
      lastName: "Johnson",
      image: "/assets/img/Coaches/coach_3.jpg",
      positionID: "Art Coach",
      Markdown: { description: "Passionate about art and creativity." },
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Johnson",
      image: "/assets/img/Coaches/coach_4.jpg",
      positionID: "Art Coach",
      Markdown: { description: "Passionate about art and creativity." },
    },
    {
      id: 5,
      firstName: "Emily",
      lastName: "Johnson",
      image: "/assets/img/Coaches/coach_5.jpg",
      positionID: "Art Coach",
      Markdown: { description: "Passionate about art and creativity." },
    },
    {
      id: 6,
      firstName: "Emily",
      lastName: "Johnson",
      image: "/assets/img/Coaches/coach_6.jpg",
      positionID: "Art Coach",
      Markdown: { description: "Passionate about art and creativity." },
    },
    {
      id: 7,
      firstName: "Emily",
      lastName: "Johnson",
      image: "/assets/img/Coaches/coach_7.jpg",
      positionID: "Art Coach",
      Markdown: { description: "Passionate about art and creativity." },
    },
  ];

  return (
    <div className={cx("coach-content")}>
      <div className={cx("coach-slider")}>
        <Slider {...settings}>
          {coachsArr?.map((item, index) => {
            // nếu backend trả base64 → render trực tiếp với data URI
            return (
              <div className={cx("coach-card")} key={index}>
                <div className={cx("coach-infor")}>
                  <img
                    src={item.image}
                    alt="coach"
                    className={cx("coach-img")}
                  />
                  <h1 className={cx("coach-name", "lg-text")}>
                    {item.firstName} {item.lastName}
                  </h1>
                  <div className={cx("coach-rate")}>
                    <RatingStarsCoach />
                  </div>
                  <div className={cx("coach-specialized")}>
                    <h1 className={cx("specialized-title", "lg-text")}>
                      {item.positionID}
                    </h1>
                    <p className={cx("specialized-des")}>
                      {item.Markdown?.description}
                    </p>
                  </div>
                  <button
                    className={cx("bookBtn")}
                    onClick={(e) => handleBookCoach(e, item.id)}
                  >
                    Book coach
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
