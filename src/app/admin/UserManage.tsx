"use client";

import classNames from "classnames/bind";
import styles from "./UserManage.module.scss";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import HeaderSystem from "@/components/SystemHeader/HeaderSystem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import UserUpdateModal from "@/app/components/Modal/UserUpdateModal";
// import { fetchData } from "@/redux/slice/adminReducer";
// import { createNewUser, renderUser, deleteNewUser } from "@/redux/slice/userReducer";
// import CommonUtils from "@/utils/CommonUtils";
// import { RootState, AppDispatch } from "@/redux/store";

const cx = classNames.bind(styles);

interface UserInfo {
  id?: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  address: string;
  gender: string;
  role: string;
  position: string;
  avatar?: string;
  roleid?: string; // từ backend có thể trả về roleid
}

function UserManage() {
  //   const dispatch = useDispatch<AppDispatch>();

  //   const { genderArr, roleArr, positionArr, arrUsers } = useSelector((state: RootState) => ({
  //     genderArr: state.admin.genders,
  //     roleArr: state.admin.roles,
  //     positionArr: state.admin.positions,
  //     arrUsers: state.user.usersArr,
  //   }));

  // Call API khi mount
  //   useEffect(() => {
  //     dispatch(fetchData());
  //     dispatch(renderUser());
  //   }, [dispatch]);

  // Preview image
  const [previewImgURL, setPreviewImg] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const handleOnchangeImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      //   const objectUrl = URL.createObjectURL(file);
      //   setPreviewImg(objectUrl);
      //   const base64 = (await CommonUtils.getBase64(file)) as string;
      //   setAvatar(base64);
    }
  };

  const [open, setOpen] = useState(false);
  const openPreviewImg = () => {
    if (previewImgURL) setOpen(true);
  };

  // Setup state form
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [role, setRoleId] = useState<string>("");

  const checkValidate = (obj: Record<string, any>) => {
    let isValid = true;
    for (const key in obj) {
      if (!obj[key]) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };

  const handleSaveUser = (e: FormEvent) => {
    e.preventDefault();
    const userInfor: UserInfo = {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      address,
      gender,
      role,
      position,
      avatar,
    };
    if (checkValidate(userInfor)) {
      //   dispatch(createNewUser(userInfor));
      //   dispatch(renderUser());
    } else {
      alert("Missing parameter");
    }
  };

  const handleDeleteUser = (userID: string) => {
    // dispatch(deleteNewUser(userID));
    // dispatch(renderUser());
  };

  // Update modal
  const [currentUser, setCurrentUser] = useState<UserInfo | null>(null);
  const [updateModal, showUpdateModal] = useState<boolean>(false);

  const handleUpdateUser = (userInfor: UserInfo) => {
    setCurrentUser(userInfor);
    showUpdateModal(!updateModal);
  };

  const genderArr = [
    { keyMap: "M", valueEn: "Male", valueVi: "Nam" },
    { keyMap: "F", value: "Female", valueVi: "Nữ" },
  ];
  const roleArr = [
    { keyMap: "R1", valueEn: "Admin", valueVi: "Quản trị" },
    { keyMap: "R2", valueEn: "Coach", valueVi: "Huấn luyện viên" },
    { keyMap: "R3", valueEn: "Student", valueVi: "Học viên" },
  ];
  const positionArr = [
    { keyMap: "P1", valueEn: "Mr.", valueVi: "Ông" },
    { keyMap: "P2", valueEn: "Ms.", valueVi: "Bà" },
    { keyMap: "P3", valueEn: "Miss", valueVi: "Cô" },
  ];
  const arrUsers: UserInfo[] = [
    {
      id: "1",
      email: "",
      firstName: "John",
      lastName: "Doe",
      address: "123 Main St",
      roleid: "R1",
      gender: "",
      role: "",
      position: "",
      phoneNumber: "",
      avatar: "",
      password: "",
    },
    {
      id: "2",
      email: "",
      firstName: "Jane",
      lastName: "Smith",
      address: "456 Oak Ave",
      roleid: "R2",
      gender: "",
      role: "",
      position: "",
      phoneNumber: "",
      avatar: "",
      password: "",
    },
    {
      id: "3",
      email: "",
      firstName: "Alice",
      lastName: "Johnson",
      address: "789 Pine Rd",
      roleid: "R3",
      gender: "",
      role: "",
      position: "",
      phoneNumber: "",
      avatar: "",
      password: "",
    },
  ]; // mock data
  return (
    <div className={cx("user-redux-container")}>
      {/* <HeaderSystem role="admin" /> */}
      <div className={cx("container")}>
        {updateModal && currentUser && (
          <UserUpdateModal
            isModalOpen={updateModal}
            toggle={() => showUpdateModal(!updateModal)}
            reRenderState={() => {
              //   dispatch(fetchData());
              //   dispatch(renderUser());
            }}
            userInfor={currentUser}
          />
        )}

        <div className={cx("title", "text-center")}>User Redux</div>
        <div className={cx("user-redux-content")}>
          <div className={cx("container")}>
            <div className={cx("row")}>
              <div className={cx("col-3")}>
                <label>Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className={cx("form-control")}
                  placeholder="Email"
                />
              </div>
              <div className={cx("col-3")}>
                <label>Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className={cx("form-control")}
                  placeholder="Password"
                />
              </div>
              <div className={cx("col-3")}>
                <label>First name</label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className={cx("form-control")}
                />
              </div>
              <div className={cx("col-3")}>
                <label>Last name</label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className={cx("form-control")}
                />
              </div>
              <div className={cx("col-3")}>
                <label>Phone number</label>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="text"
                  className={cx("form-control")}
                />
              </div>
              <div className={cx("col-9")}>
                <label>Address</label>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  className={cx("form-control")}
                />
              </div>
              <div className={cx("col-3")}>
                <label>Gender</label>
                <select
                  className={cx("form-control")}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>--- Select ---</option>
                  {genderArr?.map((item, index) => (
                    <option key={index}>{item.valueEn}</option>
                  ))}
                </select>
              </div>
              <div className={cx("col-3")}>
                <label>Position</label>
                <select
                  className={cx("form-control")}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  <option>--- Select ---</option>
                  {positionArr?.map((item, index) => (
                    <option key={index}>{item.valueEn}</option>
                  ))}
                </select>
              </div>
              <div className={cx("col-3")}>
                <label>RoleID</label>
                <select
                  className={cx("form-control")}
                  onChange={(e) => setRoleId(e.target.value)}
                >
                  <option>--- Select ---</option>
                  {roleArr?.map((item, index) => (
                    <option key={index}>{item.valueEn}</option>
                  ))}
                </select>
              </div>
              <div className={cx("col-3")}>
                <label>Image</label>
                <div className={cx("preview-img-container")}>
                  <input
                    id="previewImg"
                    type="file"
                    hidden
                    onChange={handleOnchangeImg}
                  />
                  <label className={cx("label-upload")} htmlFor="previewImg">
                    Upload img <i className="fa-solid fa-upload"></i>
                  </label>
                  <div
                    className={cx("preview-img")}
                    style={{ backgroundImage: `url(${previewImgURL})` }}
                    onClick={openPreviewImg}
                  ></div>
                </div>
              </div>
              <button
                onClick={handleSaveUser}
                className={cx("btn", "btn-primary")}
              >
                Save
              </button>
            </div>
          </div>
        </div>

        <div className={cx("title", "text-center")}>Manage users</div>
        <div className={cx("user-tables", "mt-4", "mx-1")}>
          <table id="customers">
            <thead>
              <tr>
                <th>Email</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Address</th>
                <th>RoleID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {arrUsers.map((item, index) => (
                <tr key={index}>
                  <td>{item.email}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.address}</td>
                  <td>{item.roleid}</td>
                  <td>
                    <button
                      onClick={() => handleUpdateUser(item)}
                      className={cx("btn-edit")}
                    >
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button
                      onClick={() => item.id && handleDeleteUser(item.id)}
                      className={cx("btn-delete")}
                    >
                      <i className="fa-solid fa-user-xmark"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          styles={{ container: { zIndex: 1000 } }}
          slides={[{ src: previewImgURL }]}
        />
      )}
    </div>
  );
}

export default UserManage;
