"use client";

import classNames from "classnames/bind";
import styles from "../Section.module.scss";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { url } from "inspector";
// import { AppDispatch, RootState } from "@/redux/store"; // định nghĩa trong store.ts
// import { getSpecialties } from "@/redux/slice/specialtyReducer";

const cx = classNames.bind(styles);

// Kiểu Specialty dựa trên dữ liệu backend
interface Specialty {
  id: string | number;
  name: string;
  descriptionHTML: string;
  image: string;
}

export default function Category() {
  const router = useRouter();
  //   const dispatch = useDispatch<AppDispatch>();

  //   const arrSpecialties = useSelector(
  //     (state: RootState) => state.specialty.arrSpecialties as Specialty[]
  //   );

  //   useEffect(() => {
  //     dispatch(getSpecialties());
  //   }, [dispatch]);

  const handleNavigate = (
    e: MouseEvent<HTMLButtonElement>,
    specialityId: string | number
  ) => {
    e.preventDefault();
    router.push(`/specialty-infor/${specialityId}`);
  };

  const arrSpecialties: Specialty[] = [
    {
      id: 1,
      name: "Business",
      descriptionHTML: "<p>Business courses</p>",
      image: "/assets/img/Categories/Business.jpg",
    },
    {
      id: 2,
      name: "Technology",
      descriptionHTML: "<p>Technology courses</p>",
      image: "/assets/img/Categories/IT_and_software.jpg",
    },
    {
      id: 3,
      name: "Art",
      descriptionHTML: "<p>Art courses</p>",
      image: "/assets/img/Categories/Design.jpg",
    },
    {
      id: 1,
      name: "Business",
      descriptionHTML: "<p>Marketing</p>",
      image: "/assets/img/Categories/marketing.jpg",
    },
    {
      id: 2,
      name: "Technology",
      descriptionHTML: "<p>Music</p>",
      image: "/assets/img/Categories/Music.jpg",
    },
    {
      id: 3,
      name: "Art",
      descriptionHTML: "<p>Art courses</p>",
      image: "/assets/img/Categories/Personal_Dev.jpg",
    },
    {
      id: 3,
      name: "Art",
      descriptionHTML: "<p>Art courses</p>",
      image: "/assets/img/Categories/Dev.jpg",
    },
    {
      id: 3,
      name: "Art",
      descriptionHTML: "<p>Art courses</p>",
      image: "/assets/img/Categories/photography.jpg",
    },
  ];
  return (
    <div className={cx("category-option")}>
      {arrSpecialties?.map((item, index) => (
        <div className={cx("category-card")} key={index}>
          <div className={cx("category-card_content")}>
            <h1 className={cx("category-card_heading")}>{item.name}</h1>
            <div
              className={cx("category-card_text")}
              dangerouslySetInnerHTML={{ __html: item.descriptionHTML }}
            />
            <button
              className={cx("btn-category")}
              onClick={(e) => handleNavigate(e, item.id)}
            >
              <div className={cx("btn-icon-portfolio")}>
                <i className={cx("fa-solid fa-arrow-up-right-from-square")} />
              </div>
            </button>
          </div>
          <a className={cx("category-select")}>
            <div
              className={cx("category-img")}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />
          </a>
          <h3 className={cx("category-title")}>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}
