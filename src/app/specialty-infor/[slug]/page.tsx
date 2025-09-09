// "use client";

// import { useParams } from "next/navigation";
// import classNames from "classnames/bind";
// import styles from "./SpecialtyInfor.module.scss"; // đổi sang module.scss cho NextJS
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// // import { getCoachBySpecialty } from '@/redux/slice/coachReducer';
// // import { getSpecialty } from '@/redux/slice/specialtyReducer';
// import CoachSchedule from "@/app/coach-infor/CoachSchedule";
// // import { RootState, AppDispatch } from '@/redux/store'; // cần định nghĩa trong store.ts

// const cx = classNames.bind(styles);

// function SpecialityInfor() {
//   const params = useParams<{ id: string }>(); // NextJS lấy param theo tên folder [id]
//   //   const dispatch = useDispatch<AppDispatch>();

//   const [specialtyDes, setSpecialtyDes] = useState<string | undefined>();

//   //   const { coachesBySpecialty, specialtyInfor } = useSelector((state: RootState) => ({
//   //     coachesBySpecialty: state.coach.coachesBySpecialty,
//   //     specialtyInfor: state.specialty.specialtyInfor,
//   //   }));

//   //   useEffect(() => {
//   //     if (!params?.id) return;
//   //     try {
//   //       dispatch(getCoachBySpecialty({ id: params.id }));
//   //       dispatch(getSpecialty({ id: params.id }));
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   }, [params?.id, dispatch]);

//   //   useEffect(() => {
//   //     if (specialtyInfor?.descriptionHTML) {
//   //       setSpecialtyDes(specialtyInfor.descriptionHTML);
//   //     }
//   //   }, [specialtyInfor]);
//   const specialtyInfor = { name: "Fitness" }; // Mock data for demonstration
//   const coachesBySpecialty = [
//     // Mock data for demonstration
//     {
//       coachId: "1",
//       User: {
//         firstName: "John",
//         lastName: "Doe",
//         positionID: "Coach",
//         image: "",
//         Markdown: { description: "Experienced fitness coach." },
//       },
//     },
//     {
//       coachId: "2",
//       User: {
//         firstName: "Jane",
//         lastName: "Smith",
//         positionID: "Trainer",
//         image: "",
//         Markdown: { description: "Certified personal trainer." },
//       },
//     },
//   ];
//   return (
//     <div className={cx("specialty-wrapper")}>
//       <div className={cx("container")}>
//         <div className={cx("specialty-name", "header-title")}>
//           {specialtyInfor?.name}
//         </div>

//         <div
//           className={cx("specialty-des")}
//           dangerouslySetInnerHTML={{
//             __html: specialtyDes || "",
//           }}
//         ></div>

//         {coachesBySpecialty?.length > 0 &&
//           coachesBySpecialty.map((item, index) => (
//             <div className={cx("specialty-content")} key={index}>
//               <div className={cx("left-content")}>
//                 <div className={cx("up-content")}>
//                   <div
//                     className={cx("coach-avatar")}
//                     style={{
//                       backgroundImage: `url(${item.User.image})`,
//                       border: "1px solid #ccc",
//                     }}
//                   ></div>
//                   <div className={cx("coach-infor")}>
//                     <div className={cx("coach-name-postion")}>
//                       {item.User.positionID}, {item.User.firstName}{" "}
//                       {item.User.lastName}
//                     </div>
//                     <div className={cx("coach-des")}>
//                       {item.User.Markdown?.description}
//                     </div>
//                   </div>
//                 </div>
//                 <div className={cx("down-content")}>
//                   <a
//                     href={`/coach-infor/${item.coachId}`}
//                     className={cx("extra-infor")}
//                   >
//                     See more
//                   </a>
//                 </div>
//               </div>
//               <div className={cx("right-content")}>
//                 <CoachSchedule coachId={item.coachId} />
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default SpecialityInfor;
"use client";

import { useParams } from "next/navigation";
import classNames from "classnames/bind";
import styles from "./SpecialtyInfor.module.scss";
import { useState } from "react";
import CoachSchedule from "@/app/coach-infor/CoachSchedule";

const cx = classNames.bind(styles);

function SpecialityInfor() {
  const params = useParams<{ id: string }>();

  const [specialtyDes, setSpecialtyDes] = useState<string | undefined>();

  const specialtyInfor = { name: "Fitness" }; // Mock data
  const coachesBySpecialty = [
    {
      coachId: "1",
      User: {
        firstName: "John",
        lastName: "Doe",
        positionID: "Coach",
        image: "/assets/img/Coaches/coach_1.jpg",
        Markdown: { description: "Experienced fitness coach with 10+ years of training athletes and beginners." },
      },
    },
    {
      coachId: "2",
      User: {
        firstName: "Jane",
        lastName: "Smith",
        positionID: "Trainer",
        image: "/assets/img/Coaches/coach_2.jpg",
        Markdown: { description: "Certified personal trainer, specializing in weight loss and strength programs." },
      },
    },
  ];

  return (
    <div className={cx("specialty-wrapper")}>
      <div className={cx("container")}>
        {/* Title */}
        <h1 className={cx("header-title")}>{specialtyInfor?.name}</h1>

        {/* Description */}
        {specialtyDes && (
          <div
            className={cx("specialty-des")}
            dangerouslySetInnerHTML={{ __html: specialtyDes }}
          />
        )}

        {/* Coaches list */}
        {coachesBySpecialty?.length > 0 &&
          coachesBySpecialty.map((item, index) => (
            <div className={cx("specialty-content")} key={index}>
              {/* Left: Coach info */}
              <div className={cx("left-content")}>
                <div className={cx("up-content")}>
                  <div
                    className={cx("coach-avatar")}
                    style={{
                      backgroundImage: `url(${item.User.image || "/assets/img/default-avatar.png"})`,
                    }}
                  ></div>
                  <div className={cx("coach-infor")}>
                    <h3 className={cx("coach-name-postion")}>
                      {item.User.positionID} • {item.User.firstName}{" "}
                      {item.User.lastName}
                    </h3>
                    <p className={cx("coach-des")}>
                      {item.User.Markdown?.description}
                    </p>
                  </div>
                </div>

                <div className={cx("down-content")}>
                  <a
                    href={`/coach-infor/${item.coachId}`}
                    className={cx("extra-infor")}
                  >
                    View Profile →
                  </a>
                </div>
              </div>

              {/* Right: Schedule */}
              <div className={cx("right-content")}>
                <CoachSchedule coachId={item.coachId} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SpecialityInfor;
