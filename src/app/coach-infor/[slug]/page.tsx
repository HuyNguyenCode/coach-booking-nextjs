"use client";

import { useDispatch, useSelector } from "react-redux";
// import { RootState, AppDispatch } from "@/store"; // <-- tự định nghĩa type store
// import { getCoachDescription, getCoachById, getCoachBookingById } from "@/redux/slice/coachReducer";
import { useParams } from "next/navigation";
import classNames from "classnames/bind";
import styles from "./CoachInfor.module.scss";
import {
  useEffect,
  useState,
  createContext,
  memo,
  ReactNode,
} from "react";
import RatingStarsCoachInfor from "@/app/components/SVG/RatingStarsCoachInfor";
import CoachSchedule from "../CoachSchedule";
// import Feedback from "./Feedback";

interface ParamsType {
  coachId: string;
}

interface PriceContextType {
  price: string;
  setPrice?: (p: string) => void;
}

export const PriceContext = createContext<PriceContextType | null>(null);

const cx = classNames.bind(styles);

function CoachInfor() {
  // const params = useParams() as ParamsType;
  const [price, setPrice] = useState<string>("100");

  // const { coachDes, coachInfor, coachInforBooking } = useSelector(
  //   (state: RootState) => ({
  //     coachDes: state.coach.coachDes,
  //     coachInfor: state.coach.coachInfor,
  //     coachInforBooking: state.coach.coachInforBooking,
  //   })
  // );

  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   if (params?.coachId) {
  //     dispatch(getCoachDescription(params.coachId));
  //     dispatch(getCoachById(params.coachId));
  //     dispatch(getCoachBookingById(params.coachId));
  //   }
  // }, [dispatch, params]);

  // useEffect(() => {
  //   if (coachInforBooking?.priceData?.valueEn) {
  //     setPrice(coachInforBooking.priceData.valueEn);
  //   }
  // }, [coachInforBooking]);

  const [toggleState, setToggleState] = useState<number>(1);

  const handleToggle = (num: number) => {
    setToggleState(num);
  };

  const coachInfor = {
    firstName: "John",
    lastName: "Doe",
    image: "/assets/img/Coaches/coach_1.jpg",
    phoneNumber: "09251424312",
    address: "123 Main St, City, Country",
    email: "jonhdoe@gmail.com",
    positionID: "Senior Coach",
  }
  const coachDes = {
    description: "Experienced in business coaching.",
    contentHTML: "<p>John has over 10 years of experience in business coaching...</p>",
  }

  const coachInforBooking = {
    nameClass: "Business Strategy",
    note: "Specializes in helping startups and small businesses.", 
    paymentData: { valueEn: "Credit Card" },
    nationData: { valueEn: "USA" },
    priceData: { valueEn: "100" },
  }

  const params = { coachId: "1" }; // Mock params for demonstration
  
  return (
    <PriceContext.Provider value={{ price, setPrice }}>
      <div className={cx("coach-infor-wrapper")}>
        <div className={cx("container")}>
          <div className={cx("coach-infor-content")}>
            {/* Left */}
            <div className={cx("content-left")}>
              <div
                className={cx("coach-avatar")}
                style={{
                  backgroundImage: `url(${coachInfor?.image || ""})`,
                }}
              />
              <h1 className={cx("coach-work-heading")}>Work</h1>
              <h1 className={cx("coach-overview-heading")}>Overview</h1>
              <div className={cx("coach-des")}>
                <p>{coachDes?.description}</p>
              </div>
              <h1 className={cx("coach-contact-heading")}>
                Contact Information
              </h1>
              <div className={cx("contact-area")}>
                <ul className={cx("ul-title")}>
                  <li>Phone: </li>
                  <li>Address: </li>
                  <li>E-mail:</li>
                </ul>
                <ul className={cx("ul-infor")}>
                  <li>
                    <a href={`tel:${coachInfor?.phoneNumber || ""}`}>
                      {coachInfor?.phoneNumber}
                    </a>
                  </li>
                  <li className={cx("address")}>{coachInfor?.address}</li>
                  <li>
                    <a href={`mailto:${coachInfor?.email || ""}`}>
                      {coachInfor?.email}
                    </a>
                  </li>
                </ul>
              </div>
              <h1 className={cx("coach-field-heading")}>Field</h1>
            </div>

            {/* Right */}
            <div className={cx("content-right")}>
              <div className={cx("content-up")}>
                {/* Basic Info */}
                <div className={cx("basic-infor")}>
                  <div className={cx("name-address-infor")}>
                    <h1 className={cx("coach-name")}>
                      {coachInfor?.firstName} {coachInfor?.lastName}
                    </h1>
                    <i className="fa-solid fa-location-dot"></i>
                    <div className={cx("coach-address")}>
                      {coachInfor?.address}
                    </div>
                  </div>
                  <div className={cx("coach-position lg-text")}>
                    {coachInfor?.positionID}
                  </div>

                  <h3 className={cx("ranking sm-text")}>Rankings</h3>
                  <div className={cx("ranking-point")}>
                    <h2 className={cx("ranking-number lg-text")}>8.6</h2>
                    <div className={cx("ranking-rate")}>
                      <RatingStarsCoachInfor />
                    </div>
                  </div>
                  <div className={cx("btn-infor")}>
                    <div className={cx("btn btnSendMessage")}>
                      <i className="fa-solid fa-message"></i>
                      <button>Send Message</button>
                    </div>
                    <div className={cx("btn btnContact")}>
                      <i className="fa-solid fa-check"></i>
                      <button>Contacts</button>
                    </div>
                    <div className={cx("btn btnSendMessage")}>
                      <i className="fa-solid fa-flag"></i>
                      <button>Report User</button>
                    </div>
                  </div>
                </div>

                {/* Booking Info */}
                <div className={cx("booking-infor")}>
                  <div className={cx("infor-container")}>
                    <div className={cx("class-name")}>
                      {coachInforBooking?.nameClass || ""} Class
                    </div>

                    <div className={cx("note")}>
                      {coachInforBooking?.note || ""}
                    </div>
                    <div className={cx("nation-payment")}>
                      <div className={cx("payment")}>
                        {coachInforBooking?.paymentData?.valueEn || ""} accepted
                      </div>
                      <div className={cx("nation")}>
                        <i className="fa-solid fa-location-dot"></i>
                        {coachInforBooking?.nationData?.valueEn || ""}
                      </div>
                    </div>
                    <div className={cx("price")}>
                      {coachInforBooking?.priceData?.valueEn || ""} $ /Hour
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className={cx("content-down")}>
                <nav className={cx("navBtn")}>
                  <div
                    className={cx("coach-booking")}
                    onClick={() => handleToggle(1)}
                  >
                    <div
                      className={
                        toggleState === 1 ? "tab-item active" : "tab-item"
                      }
                    >
                      <i className="fa-solid fa-chalkboard-user"></i>Booking
                    </div>
                    <div className={toggleState === 1 ? "line" : ""}></div>
                  </div>
                  <div
                    className={cx("coach-about")}
                    onClick={() => handleToggle(2)}
                  >
                    <div
                      className={
                        toggleState === 2 ? "tab-item active" : "tab-item"
                      }
                    >
                      <i className="fa-solid fa-circle-info"></i>Coach
                      Description
                    </div>
                    <div className={toggleState === 2 ? "line" : ""}></div>
                  </div>
                  <div
                    className={cx("coach-feedback")}
                    onClick={() => handleToggle(3)}
                  >
                    <div
                      className={
                        toggleState === 3 ? "tab-item active" : "tab-item"
                      }
                    >
                      <i className="fa-solid fa-comment"></i>Feedback
                    </div>
                    <div className={toggleState === 3 ? "line" : ""}></div>
                  </div>
                </nav>

                {/* Tab Contents */}
                <div className={cx("booking-section")}>
                  <div
                    className={
                      toggleState === 1 ? "pane active" : cx("pane")
                    }
                  >
                    <CoachSchedule coachId={params.coachId} price={price} />
                  </div>
                </div>
                <div className={cx("infor-section")}>
                  <div
                    className={
                      toggleState === 2 ? "pane active" : cx("pane")
                    }
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: coachDes?.contentHTML || "",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("feedback-section")}>
                  <div
                    className={
                      toggleState === 3 ? "pane active" : cx("pane")
                    }
                  >
                    {/* <Feedback /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PriceContext.Provider>
  );
}

export default memo(CoachInfor);
