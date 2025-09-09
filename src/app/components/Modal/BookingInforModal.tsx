"use client";

import classNames from "classnames/bind";
import styles from "./BookingInforModal.module.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useState, useEffect, useContext, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getCoachProfile } from "@/redux/slice/coachReducer";
// import { PriceContext } from "@/app/Coach/CoachInfor"; // update path nếu khác
// import { postAppointment } from "@/redux/slice/studentReducer";
// import { AppDispatch, RootState } from "@/redux/store";
import moment from "moment";

const cx = classNames.bind(styles);

interface Time {
  timeType: string;
  date: number;
  timePeriod: {
    valueEn: string;
  };
}

interface BookingInforModalProps {
  isModalOpen: boolean;
  toggle: () => void;
  coachIdSelected: { coachId: string };
  time: Time | null;
}

interface BookingInfor {
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  coachId: string;
  date: number | string;
  timeType: string;
}

function BookingInforModal({
  isModalOpen,
  toggle,
  coachIdSelected,
  time,
}: BookingInforModalProps) {
  //   const price = useContext(PriceContext) as { valueEn: number } | null;

  const [toogleModal, setToogleModal] = useState(isModalOpen);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [coachId, setCoachId] = useState("");
  const [date, setDate] = useState<number | string>("");
  const [timeType, setTimeType] = useState("");

  //   const dispatch = useDispatch<AppDispatch>();
  //   const { coachInforProfile, isSave } = useSelector(
  //     (state: RootState) => state.coach
  //   ) as any;

  // set time, date, coachId from props
  useEffect(() => {
    if (time) {
      setTimeType(time.timeType);
      setDate(time.date);
      setCoachId(coachIdSelected.coachId);
    }
  }, [time, coachIdSelected]);

  // fetch coach profile
  //   useEffect(() => {
  //     if (coachIdSelected) {
  //       dispatch(getCoachProfile(coachIdSelected));
  //     }

  //     const handleEsc = (e: KeyboardEvent) => {
  //       if (e.key === "Escape") {
  //         setToogleModal(false);
  //       }
  //     };
  //     window.addEventListener("keydown", handleEsc);

  //     return () => window.removeEventListener("keydown", handleEsc);
  //   }, [coachIdSelected, dispatch]);

  const [toggleText, setToogleText] = useState(true);
  const handleToggleText = () => setToogleText(!toggleText);

  const bookingInfor: BookingInfor = {
    fullName,
    phoneNumber,
    email,
    address,
    coachId,
    date,
    timeType,
  };

  //   const handleSaveInfor = () => {
  //     dispatch(postAppointment(bookingInfor));
  //     setToogleModal(false);
  //     if (isSave) {
  //       alert("Save info successful");
  //     }
  //   };

  const coachInforProfile = {
    firstName: "John",
    lastName: "Doe",
    image: "/assets/img/Coaches/coach_1.jpg",
    positionID: "Senior Coach",
    Markdown: { description: "Experienced in business coaching." },
  };
  const price = { valueEn: 100 };
  const handleSaveInfor = () => {};
  return (
    <div className={cx("modal-container")}>
      <Modal
        isOpen={toogleModal}
        className={cx("booking-infor-modal")}
        centered
      >
        <ModalHeader>
          <div className={cx("modal-header")}>
            <h2>Booking information</h2>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className={cx("modal-booking-content")}>
            <div className={cx("left-content")}>
              <div
                className={cx("coach-avatar")}
                style={{
                  backgroundImage: `url(${coachInforProfile?.image || ""})`,
                }}
              ></div>
              <div className={cx("coach-name")}>
                <h3>
                  {coachInforProfile?.positionID},{" "}
                  {coachInforProfile?.firstName} {coachInforProfile?.lastName}
                </h3>
              </div>
              <div className={cx("coach-description-part")}>
                <div
                  className={
                    toggleText
                      ? cx("coach-description", "hide")
                      : cx("coach-description")
                  }
                >
                  {coachInforProfile?.Markdown?.description}
                </div>
                <button
                  className={cx("btn", "btnToggle-text")}
                  onClick={handleToggleText}
                >
                  <i className={cx("fa-solid fa-ellipsis")}></i>
                </button>
              </div>
              <div className={cx("booking-time")}>
                {time?.timePeriod.valueEn}{" "}
                {time &&
                  moment.unix(+time.date / 1000).format("ddd - MM/DD/YYYY")}
              </div>
              <div className={cx("coach-price")}>
                Booking right now: {price?.valueEn}$
              </div>
            </div>
            <div className={cx("right-content")}>
              <form className={cx("input-area")}>
                <div className={cx("form-group")}>
                  <label>Full name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className={cx("form-group")}>
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className={cx("form-group")}>
                  <label>Email Address </label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={cx("form-group")}>
                  <label>Address </label>
                  <input
                    type="text"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSaveInfor}>
            Save
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default memo(BookingInforModal);
