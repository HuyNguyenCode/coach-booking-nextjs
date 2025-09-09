"use client";

import classNames from "classnames/bind";
import styles from "./CoachUpdateModal.module.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useState, useEffect, memo, ChangeEvent } from "react";
// import { fetchData } from "@/redux/slice/adminReducer";
import { useDispatch, useSelector } from "react-redux";
// import { renderUser, updateUserInfor } from "@/redux/slice/userReducer";
import { Buffer } from "buffer";
// import CommonUtils from "@/utils/CommonUtils";
// import { RootState, AppDispatch } from "@/redux/store";

const cx = classNames.bind(styles);

// ==== Type props ====
interface CoachUpdateModalProps {
  isModalOpen: boolean;
  toggle: () => void;
  userInfor: any; // nếu có type User thì thay thế
  reRenderState: () => void;
}

function CoachUpdateModal({
  isModalOpen,
  toggle,
  userInfor,
  reRenderState,
}: CoachUpdateModalProps) {
  //   const dispatch = useDispatch<AppDispatch>();

  const [id, setID] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("hardcode");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const [previewImgURL, setPreviewImg] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  //   const mapStateToProps = useSelector((state: RootState) => ({
  //     genderArr: state.admin.genders,
  //     roleArr: state.admin.roles,
  //     positionArr: state.admin.positions,
  //   }));

  // Gán dữ liệu userInfor ban đầu
  //   useEffect(() => {
  //     if (userInfor) {
  //       setID(userInfor.id);
  //       setEmail(userInfor.email);
  //       setPassword("hardcode");
  //       setFirstName(userInfor.firstName);
  //       setLastName(userInfor.lastName);
  //       setAddress(userInfor.address);
  //       setPhoneNumber(userInfor.phoneNumber);
  //       setGender(userInfor.gender);
  //       setPosition(userInfor.positionID);
  //       setRole(userInfor.roleid);

  //       if (userInfor.image) {
  //         const imageBase64 = Buffer.from(userInfor.image, "base64").toString(
  //           "binary"
  //         );
  //         setAvatar(imageBase64);
  //       }
  //     //   dispatch(fetchData());
  //     }
  //   }, [userInfor, dispatch]);

  // Upload avatar
  const handleOnchangeImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      //   const objectUrl = URL.createObjectURL(file);
      //   setPreviewImg(objectUrl);
      //   const base64 = await CommonUtils.getBase64(file);
      //   setAvatar(base64 as string);
    }
  };

  const openPreviewImg = () => {
    if (previewImgURL) setOpen(true);
  };

  // Update user
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
        roleid: role,
      };

      //   dispatch(updateUserInfor(userInforEdited));
      //   dispatch(renderUser());
      toggle();
      reRenderState();
    } catch (error) {
      console.error(error);
    }
  };

  const mapStateToProps = {
    genderArr: [{ valueEn: "M" }, { valueEn: "F" }],
    positionArr: [{ valueEn: "Coach" }, { valueEn: "Trainer" }],
    roleArr: [{ valueEn: "Admin" }, { valueEn: "Coach" }, { valueEn: "User" }],
  };
  return (
    <div className={cx("form-update")}>
      <Modal isOpen={isModalOpen} toggle={toggle}>
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
                value={email || ""}
                disabled
                type="text"
                className={cx("form-control")}
              />
            </div>
            <div className={cx("col-3")}>
              <label>Password</label>
              <input
                value={password || ""}
                disabled
                type="password"
                className={cx("form-control")}
              />
            </div>
            <div className={cx("col-3")}>
              <label>First name</label>
              <input
                value={firstName || ""}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className={cx("form-control")}
              />
            </div>
            <div className={cx("col-3")}>
              <label>Last name</label>
              <input
                value={lastName || ""}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className={cx("form-control")}
              />
            </div>
            <div className={cx("col-3")}>
              <label>Phone Number</label>
              <input
                value={phoneNumber || ""}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                className={cx("form-control")}
              />
            </div>
            <div className={cx("col-9")}>
              <label>Address</label>
              <input
                value={address || ""}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className={cx("form-control")}
              />
            </div>

            {/* Gender */}
            <div className={cx("col-3")}>
              <label>Gender</label>
              <select
                className={cx("form-control")}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>{gender}</option>
                {mapStateToProps.genderArr?.map((item, index) =>
                  item.valueEn !== gender ? (
                    <option key={index}>{item.valueEn}</option>
                  ) : null
                )}
              </select>
            </div>

            {/* Position */}
            <div className={cx("col-3")}>
              <label>Position</label>
              <select
                className={cx("form-control")}
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              >
                <option>{position}</option>
                {mapStateToProps.positionArr?.map((item, index) =>
                  item.valueEn !== position ? (
                    <option key={index}>{item.valueEn}</option>
                  ) : null
                )}
              </select>
            </div>

            {/* Role */}
            <div className={cx("col-3")}>
              <label>Role</label>
              <select
                className={cx("form-control")}
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option>{role}</option>
                {mapStateToProps.roleArr?.map((item, index) =>
                  item.valueEn !== role ? (
                    <option key={index}>{item.valueEn}</option>
                  ) : null
                )}
              </select>
            </div>

            {/* Upload avatar */}
            <div className={cx("col-3")}>
              <label>Image</label>
              <div className={cx("preiew-img-container")}>
                <input
                  id="preiewImg"
                  type="file"
                  hidden
                  onChange={handleOnchangeImg}
                />
                <label className={cx("lable-upload")} htmlFor="preiewImg">
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
