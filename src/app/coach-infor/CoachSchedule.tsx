"use client";

import classNames from "classnames/bind";
import styles from "./CoachSchedule.module.scss";
import { useEffect, useState, memo } from "react";
// import { getSchedule } from "@/redux/slice/coachReducer";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import BookingInforModal from "@/app/components/Modal/BookingInforModal";
// import { AppDispatch, RootState } from "@/redux/store";

const cx = classNames.bind(styles);

interface CoachScheduleProps {
  coachId: string;
  price?: string;
}

interface ScheduleItem {
  timePeriod: {
    valueEn: string;
  };
  [key: string]: any;
}

interface DayOption {
  lable: string;
  value: number;
}

function CoachSchedule({ coachId }: CoachScheduleProps) {
  const [allDay, setAllDay] = useState<DayOption[]>([]);
  const [bookingInforModal, setBookingInforModal] = useState(false);
  const [date, setDate] = useState<number>(
    moment(new Date()).startOf("day").valueOf()
  );
  const [arrSchedule, setArrSchedule] = useState<ScheduleItem[]>([]);
  const [timeOnClick, setTimeOnClick] = useState<ScheduleItem | null>(null);

//   const dispatch = useDispatch<AppDispatch>();
//   const { arrSchedule: arrScheduleRedux } = useSelector(
//     (state: RootState) => state.coach
//   );

  // generate 7 days for select
  useEffect(() => {
    const arrDate: DayOption[] = [];
    for (let i = 0; i < 7; i++) {
      let obj: DayOption = {
        lable: moment(new Date())
          .add(i, "days")
          .locale("en")
          .format("dddd - DD/MM"),
        value: moment(new Date()).add(i, "days").startOf("day").valueOf(),
      };
      if (i === 0) {
        let ddMM = moment(new Date()).format("DD/MM");
        obj.lable = `Today - ${ddMM}`;
      }
      arrDate.push(obj);
    }
    setAllDay(arrDate);
  }, []);

  // fetch schedule when date changes
//   useEffect(() => {
//     if (coachId) {
//       dispatch(getSchedule({ coachId, date }));
//     }
//   }, [date, coachId, dispatch]);

  // update schedule when redux changes
//   useEffect(() => {
//     setArrSchedule(arrScheduleRedux);
//   }, [arrScheduleRedux]);

  const handleClickTime = (e: React.MouseEvent, time: ScheduleItem) => {
    e.stopPropagation();
    setTimeOnClick(time);
    setBookingInforModal(true);
  };

  const toggleModal = () => setBookingInforModal(false);
  return (
    <div className={cx("coach-schedule-wrapper")}>
      {bookingInforModal && timeOnClick && (
        <BookingInforModal
          isModalOpen={bookingInforModal}
          toggle={toggleModal}
          coachIdSelected={{ coachId }}
          time={
            timeOnClick
              ? {
                  ...timeOnClick,
                  timeType: timeOnClick.timeType ?? "",
                  date: timeOnClick.date ?? date,
                }
              : null
          }
        />
      )}
      <div className={cx("coach-schedule-container")}>
        <div className={cx("coach-schedule-content")}>
          <div className={cx("all-schedule")}>
            <select
              className={cx("select-time")}
              onChange={(e) => setDate(Number(e.target.value))}
            >
              {allDay.map((item, index) => (
                <option value={item.value} key={index}>
                  {item.lable}
                </option>
              ))}
            </select>
            <div className={cx("schedule-heading")}>
              <i className={cx("fa-solid fa-calendar-days")}></i>
              <span>Coaching schedule</span>
            </div>
            <div className={cx("time-to-select")}>
              {arrSchedule && arrSchedule.length > 0 ? (
                arrSchedule.map((item, index) => (
                  <button
                    className={cx("btn", "btn-time", "primary")}
                    key={index}
                    onClick={(e) => handleClickTime(e, item)}
                  >
                    {item.timePeriod.valueEn}
                  </button>
                ))
              ) : (
                <span>No schedule this day, please select another day</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CoachSchedule);
