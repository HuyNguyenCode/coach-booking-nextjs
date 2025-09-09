"use client";

import classNames from "classnames/bind";
import styles from "./SpecialityManage.module.scss"; // đổi sang module.scss cho NextJS
import "react-markdown-editor-lite/lib/index.css";
import MarkdownIt from "markdown-it";
import MdEditor, { Plugins } from "react-markdown-editor-lite";
import { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { saveSpecialty } from "@/redux/slice/specialtyReducer"; // update đúng path redux của bạn
// import HeaderSystem from "@/components/SystemHeader/HeaderSystem"; // update đúng path component
// import CommonUtils from "@/utils/CommonUtils"; // update đúng path utils
// import { RootState, AppDispatch } from "@/redux/store"; // định nghĩa store types

const cx = classNames.bind(styles);
const mdParser = new MarkdownIt();

function SpecialityManage() {
//   const dispatch = useDispatch<AppDispatch>();

//   const isSave = useSelector((state: RootState) => state.specialty.isSave);

  const [descriptionMarkdown, setDescriptionMarkdown] = useState<string>("");
  const [descriptionHTML, setDescriptionHTML] = useState<string>("");
  const [specialityImage, setSpecialityImage] = useState<string>("");
  const [specialityName, setSpecialityName] = useState<string>("");

  const handleEditorChange = ({ html, text }: { html: string; text: string }) => {
    setDescriptionHTML(html);
    setDescriptionMarkdown(text);
  };

  const handleOnchangeImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        // const base64 = await CommonUtils.getBase64(file);
        // setSpecialityImage(base64 as string);
      } catch (error) {
        console.error("Error converting file:", error);
      }
    }
  };

  const specialityInfor = { descriptionMarkdown, descriptionHTML, specialityName, specialityImage };

  const handleSave = () => {
    // dispatch(saveSpecialty(specialityInfor));
    // if (isSave) {
    //   alert("Save specialty info successful");
    // }
    console.log(specialityInfor);
  };

  return (
    <div className={cx("specialty-wrapper")}>
      {/* <HeaderSystem role="admin" /> */}

      <button className={cx("btn", "primary")}>Set schedule</button>

      <div className={cx("container")}>
        <div className={cx("title", "text-center")}>Specialities Manage</div>

        <div className={cx("speciality-content")}>
          <div className={cx("up-content")}>
            <div className={cx("form-group", "input-class-name")}>
              <label>Speciality Name</label>
              <input
                value={specialityName}
                type="text"
                className={cx("form-control")}
                onChange={(e) => setSpecialityName(e.target.value)}
              />
            </div>

            <div className={cx("form-group", "upload-img")}>
              <label className={cx("label-upload")}>Upload specialty image</label>
              <input
                className={cx("form-control")}
                onChange={handleOnchangeImg}
                type="file"
                accept="image/*"
              />
            </div>
          </div>

          <div className={cx("down-content")}>
            <MdEditor
              style={{ height: "500px" }}
              value={descriptionMarkdown}
              renderHTML={(text) => mdParser.render(text)}
              onChange={handleEditorChange}
            />

            <button className={cx("btn")} onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialityManage;
