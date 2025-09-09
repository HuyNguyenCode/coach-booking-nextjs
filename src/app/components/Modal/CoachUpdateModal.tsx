"use client";

import classNames from "classnames/bind";
import styles from "./CoachUpdateModal.module.scss"; // đổi sang module.scss cho Next.js
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useState, useEffect, memo, ChangeEvent } from "react";
// import { updateUser } from "@/services/userService"; // NextJS alias
// import { fetchData } from "@/redux/slice/adminReducer";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "@/redux/store"; // cần khai báo sẵn trong store.ts
// import CommonUtils from "@/utils/CommonUtils";

const cx = classNames.bind(styles);

interface UserInfor {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  gender: string;
  positionID: string;
  image?: string;
}

interface CoachUpdateModalProps {
  isModalOpen: boolean;
  toggle: () => void;
  userInfor: UserInfor;
  reRenderState: () => void;
}

function CoachUpdateModal({
  isModalOpen,
  toggle,
  userInfor,
  reRenderState,
}: CoachUpdateModalProps) {
  //   const dispatch = useDispatch<AppDispatch>();

  const [id, setID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("hardcode");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [position, setPosition] = useState("");
  const [avatar, setAvatar] = useState("");
  const [previewImgURL, setPreviewImgURL] = useState("");
  const [open, setOpen] = useState(false);

  //   const { genderArr, positionArr } = useSelector((state: RootState) => ({
  //     genderArr: state.admin.genders,
  //     positionArr: state.admin.positions,
  //   }));

  //   useEffect(() => {
  //     if (!userInfor) return;

  //     setID(userInfor.id);
  //     setEmail(userInfor.email);
  //     setFirstName(userInfor.firstName);
  //     setLastName(userInfor.lastName);
  //     setAddress(userInfor.address);
  //     setPhoneNumber(userInfor.phoneNumber);
  //     setGender(userInfor.gender);
  //     setPosition(userInfor.positionID);

  //     if (userInfor.image) {
  //       // server trả base64
  //       setAvatar(`data:image/jpeg;base64,${userInfor.image}`);
  //     }
  //     dispatch(fetchData());
  //   }, [userInfor, dispatch]);

  const handleOnChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    idString: string
  ) => {
    const value = e.target.value;
    switch (idString) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "firstname":
        setFirstName(value);
        break;
      case "lastname":
        setLastName(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "image":
        handleOnchangeImg(e as ChangeEvent<HTMLInputElement>);
        break;
      default:
        break;
    }
  };

  const handleOnchangeImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewImgURL(objectUrl);
      //   const base64 = await CommonUtils.getBase64(file);
      //   setAvatar(base64 as string);
    }
  };

  const openPreviewImg = () => {
    if (previewImgURL) {
      setOpen(true);
    }
  };

  const handleUpdateUser = async () => {
    try {
      const userInforEdited = {
        ...userInfor,
        firstName,
        lastName,
        address,
        phoneNumber,
        gender,
        positionID: position,
        image: avatar,
      };

      //   const response = await updateUser(userInforEdited);
      //   if (response.errCode === 0) {
      //     alert("Update user information successful");
      //   } else {
      //     console.log(response);
      //   }
      reRenderState();
      toggle();
    } catch (error) {
      console.error(error);
    }
  };

  const genderArr = [
    { keyMap: "M", valueEn: "Male" },
    { keyMap: "F", value: "Female" },
    { keyMap: "O", value: "Other" },
  ];
  const positionArr = [
    { keyMap: "P1", valueEn: "Position1" },
    { keyMap: "P2", value: "Position2" },
    { keyMap: "P3", value: "Position3" },
  ];
  return (
    <div className={cx("form-update")}>
      <Modal isOpen={isModalOpen}>
        <ModalHeader>
          <div className={cx("modal-header-title")}>
            <h3>Update coach information</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className={cx("row")}>
            <div className={cx("col-3")}>
              <label>Email</label>
              <input
                onChange={(e) => handleOnChangeInput(e, "email")}
                value={email}
                disabled
                type="text"
                className={cx("form-control")}
              />
            </div>
            <div className={cx("col-3")}>
              <label>Password</label>
              <input
                value={password}
                type="password"
                disabled
                className={cx("form-control")}
              />
            </div>
            <div className={cx("col-3")}>
              <label>First name</label>
              <input
                onChange={(e) => handleOnChangeInput(e, "firstname")}
                value={firstName}
                type="text"
                className={cx("form-control")}
              />
            </div>
            <div className={cx("col-3")}>
              <label>Last name</label>
              <input
                onChange={(e) => handleOnChangeInput(e, "lastname")}
                value={lastName}
                type="text"
                className={cx("form-control")}
              />
            </div>
            <div className={cx("col-3")}>
              <label>Phone Number</label>
              <input
                onChange={(e) => handleOnChangeInput(e, "phoneNumber")}
                value={phoneNumber}
                type="text"
                className={cx("form-control")}
              />
            </div>
            <div className={cx("col-9")}>
              <label>Address</label>
              <input
                onChange={(e) => handleOnChangeInput(e, "address")}
                value={address}
                type="text"
                className={cx("form-control")}
              />
            </div>
            <div className={cx("col-3")}>
              <label>Gender</label>
              <select
                className={cx("form-control")}
                value={gender}
                onChange={(e) => handleOnChangeInput(e, "gender")}
              >
                <option>{gender}</option>
                {genderArr?.map((item, idx) => (
                  <option key={idx}>{item.valueEn}</option>
                ))}
              </select>
            </div>
            <div className={cx("col-3")}>
              <label>Position</label>
              <select
                className={cx("form-control")}
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              >
                <option>{position}</option>
                {positionArr?.map((item, idx) => (
                  <option key={idx}>{item.valueEn}</option>
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
                  onChange={(e) => handleOnChangeInput(e, "image")}
                />
                <label className={cx("lable-upload")} htmlFor="previewImg">
                  Upload img <i className="fa-solid fa-upload"></i>
                </label>
                <div
                  className={cx("preview-img")}
                  style={{ backgroundImage: `url(${avatar})` }}
                  onClick={openPreviewImg}
                ></div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdateUser}>
            Update
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default memo(CoachUpdateModal);
