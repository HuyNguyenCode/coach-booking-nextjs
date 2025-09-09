"use client";

import classNames from "classnames/bind";
import styles from "./CoachManage.module.scss"; // đổi sang module.scss
// import HeaderSystem from "@/components/SystemHeader/HeaderSystem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { renderCoach, bulkCreate } from "@/redux/slice/coachReducer";
// import { fetchData } from "@/redux/slice/adminReducer";
// import { deleteUser } from "@/services/userService";
import AddDesModal from "@/app/components/Modal/AddDesModal";
import CoachUpdateModal from "@/app/components/Modal/CoachUpdateModal";
import "react-markdown-editor-lite/lib/index.css";
// import DatePicker from "@/components/Input/DatePicker";
// import { RootState, AppDispatch } from "@/redux/store"; // cần định nghĩa trong store.ts

const cx = classNames.bind(styles);

function CoachManage() {
  //   const { coachsArr, isSaveSchedule, timesArr } = useSelector(
  //     (state: RootState) => ({
  //       coachsArr: state.coach.coachsArr,
  //       isSaveSchedule: state.coach.isSaveSchedule,
  //       timesArr: state.admin.times,
  //     })
  //   );

//   const dispatch = useDispatch<AppDispatch>();

  // load data khi mount
  const loadData = async () => {
    try {
      //   dispatch(fetchData());
      //   dispatch(renderCoach());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // ======================== Delete User ========================
  const handleDeleteUser = async (userID: string) => {
    try {
      //   let response = await deleteUser(userID);
      loadData();
      //   console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // ======================== Update User ========================
  const [currentUser, setCurrentUser] = useState<any>({});
  const [updateModal, showUpdateModal] = useState(false);
  const handleUpdateUser = (userInfor: any) => {
    setCurrentUser(userInfor);
    showUpdateModal(!updateModal);
  };

  // ======================== Add Description ========================
  const [coachIdAddDes, setCoachIdAddDes] = useState<string>("");
  const [addDesModal, showAddDesModal] = useState(false);
  const handleAddDes = (coachIdSelected: string) => {
    showAddDesModal(!addDesModal);
    setCoachIdAddDes(coachIdSelected);
  };

  // ======================== Toggle Schedule ========================
  const [state, changeState] = useState(true);
  const [scheduleState, setScheduleState] = useState(true);
  const handleChangeState = () => {
    changeState(!state);
    setScheduleState(!scheduleState);
  };

  // ======================== Schedule ========================
  const [date, setDate] = useState<string>("");
  const [timeSelected, setTimeSelected] = useState<any[]>([]);
  const [coachId, setCoachId] = useState<string>();

  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const handleOnChangeDatePicker = (date: Date[]) => {
    setCurrentDate(date[0]);
    setDate("" + new Date(currentDate).getTime());
  };

  // Thêm thuộc tính isSelected vào mảng time
  const initSelect = (data: any[]) => {
    return data.map((item) => ({
      ...item,
      isSelected: false,
    }));
  };
  const isSaveSchedule = true; // Mock data for demonstration
  const timesArr = [
    { id: 1, keyMap: "T1", valueEn: "8:00 - 9:00" },
    { id: 2, keyMap: "T2", valueEn: "9:00 - 10:00" },
    { id: 3, keyMap: "T3", valueEn: "10:00 - 11:00" },
    { id: 4, keyMap: "T4", valueEn: "11:00 - 12:00" },
    { id: 5, keyMap: "T5", valueEn: "12:00 - 13:00" },
    { id: 6, keyMap: "T6", valueEn: "13:00 - 14:00" },
    { id: 7, keyMap: "T7", valueEn: "14:00 - 15:00" },
    { id: 8, keyMap: "T8", valueEn: "15:00 - 16:00" },
    { id: 9, keyMap: "T9", valueEn: "16:00 - 17:00" },
    { id: 10, keyMap: "T10", valueEn: "17:00 - 18:00" },
  ];

  let newTimeArr = initSelect(timesArr);
  const [rangeTimesArr, setRangeTimesArr] = useState<any[]>([]);

  useEffect(() => {
    if (newTimeArr.length > 0) {
      setRangeTimesArr(newTimeArr);
    }
  }, [timesArr]);

  const handleEffectBtn = (time: any) => {
    let arrUpdated = [...rangeTimesArr];
    arrUpdated.map((item) => {
      if (item.id === time.id) {
        item.isSelected = !item.isSelected;
      }
      return item;
    });
    setTimeSelected([...timeSelected, time]);
    setRangeTimesArr(arrUpdated);
  };

  const handleSave = async () => {
    let timeSelectedArr = timeSelected.filter(
      (item) => item.isSelected === true
    );

    if (!date) {
      alert("Missing day selected parameter");
    } else if (timeSelected.length <= 0) {
      alert("Missing time selected parameter");
    } else if (!coachId) {
      alert("Missing coach selected parameter");
    } else {
      let arrSchedule = timeSelectedArr.map((item) => {
        const timeType = item.keyMap;
        return {
          date,
          timeType,
          coachId,
        };
      });

      //   let schedule = { arrSchedule, coachId, date };
      //   dispatch(bulkCreate(schedule));

      if (isSaveSchedule) {
        alert("Save schedule successful");
      }
    }
  };

  const coachsArr = [
    {
      id: "1",
      email: "johndoe@gmail.com ",
      firstName: "John",
      lastName: "Doe",
      address: "123 Main St",
      phoneNumber: "123-456-7890",
      gender: "Male",
      positionID: 1,
    },
  ];

  return (
    <div className={cx("user-redux-container")}>
      {/* <HeaderSystem role={"admin"} /> */}
      <br />
      <button className={cx("btn primary")}>Coach pending list</button>
      <button className={cx("btn primary")} onClick={handleChangeState}>
        Set schedule
      </button>

      {updateModal && (
        <CoachUpdateModal
          isModalOpen={updateModal}
          toggle={() => showUpdateModal(!updateModal)}
          reRenderState={loadData}
          userInfor={currentUser}
        />
      )}
      {addDesModal && (
        <AddDesModal
          isModalOpen={addDesModal}
          toggle={() => showAddDesModal(!addDesModal)}
          coachId={coachIdAddDes}
        />
      )}

      <div className="container">
        <div className={cx("title texy-center")}>Manage Coaches</div>

        {/* Danh sách Coach */}
        <div
          className={
            state ? cx("user-tables mt-4 mx-1") : cx("user-tables disable")
          }
        >
          <table id="customers">
            <tbody>
              <tr>
                <th>Email</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Position</th>
                <th>Action</th>
              </tr>

              {coachsArr.map((item, index) => (
                <tr key={index}>
                  <td>{item.email}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.address}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.gender}</td>
                  <td>{item.positionID}</td>
                  <td>
                    <button
                      onClick={() => handleUpdateUser(item)}
                      className={cx("btn-edit")}
                    >
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button
                      onClick={() => handleDeleteUser(item.id)}
                      className={cx("btn-delete")}
                    >
                      <i className="fa-solid fa-user-xmark"></i>
                    </button>
                    <button
                      onClick={() => handleAddDes(item.id)}
                      className={cx("btn-add-des")}
                    >
                      <i className="fa-solid fa-square-plus"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Schedule */}
        <div
          className={
            scheduleState ? cx("set-schedule disable") : cx("set-schedule")
          }
        >
          <div className={cx("select-area")}>
            <div className={cx("select-coach")}>
              <label>Select Coach</label>
              <select
                className={cx("form-control")}
                onChange={(e) => setCoachId(e.target.value)}
              >
                <option>--- Select ---</option>
                {coachsArr.map((item, index) => (
                  <option value={item.id} key={index}>
                    {item.firstName} {item.lastName}
                  </option>
                ))}
              </select>
            </div>

            <div className={cx("select-day")}>
              <label>Select day</label>
              {/* <DatePicker
                onChange={handleOnChangeDatePicker}
                value={currentDate}
                minDate={new Date(new Date().setDate(new Date().getDate() - 1))}
              /> */}
            </div>
          </div>

          <div className={cx("teaching-period")}>
            {rangeTimesArr.map((item, index) => (
              <button
                key={index}
                onClick={() => handleEffectBtn(item)}
                className={
                  item.isSelected
                    ? cx("btn-schedule selected")
                    : cx("btn-schedule")
                }
              >
                {item.valueEn}
              </button>
            ))}
          </div>

          <button className={cx("btn primary btnSave")} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoachManage;
