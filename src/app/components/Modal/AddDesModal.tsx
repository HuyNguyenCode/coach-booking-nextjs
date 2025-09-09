"use client";

import classNames from "classnames/bind";
import styles from "./AddDesModal.module.scss"; // đổi sang module.scss cho NextJS
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import MarkdownIt from "markdown-it";
import MdEditor, { Plugins } from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

import { memo, useEffect, useState } from "react";
// import { saveCoach, getCoachBookingById } from "@/redux/slice/coachReducer";
// import { fetchData } from "@/redux/slice/adminReducer";
// import { getSpecialties } from "@/redux/slice/specialtyReducer";
// import { getCoachDes } from "@/services/coachService";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "@/redux/store";

const cx = classNames.bind(styles);

interface AddDesModalProps {
  isModalOpen: boolean;
  toggle: () => void;
  coachId: string;
}

function AddDesModal({ isModalOpen, toggle, coachId }: AddDesModalProps) {
  const [contentHTML, setContentHTML] = useState("");
  const [contentMarkdown, setContentMarkdown] = useState("");
  const [description, setDescription] = useState("");
  const [priceId, setPriceId] = useState("");
  const [nationId, setNationId] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [specialtyId, setSpecialtyId] = useState("");
  const [specialty, setSpecialty] = useState<any>("");
  const [price, setPrice] = useState<any>("");
  const [nation, setNation] = useState<any>("");
  const [payment, setPayment] = useState<any>("");
  const [nameClass, setNameClass] = useState("");
  const [note, setNote] = useState("");

  const [toggleModal, setToggleModal] = useState(isModalOpen);

  //   const dispatch = useDispatch<AppDispatch>();
  //   const {
  //     arrPrices,
  //     arrPayments,
  //     arrNations,
  //     coachInforBooking,
  //     arrSpecialties,
  //   } = useSelector((state: RootState) => ({
  //     arrPrices: state.admin.prices,
  //     arrPayments: state.admin.payments,
  //     arrNations: state.admin.nations,
  //     coachInforBooking: state.coach.coachInforBooking,
  //     arrSpecialties: state.specialty.arrSpecialties,
  //   }));

  const mdParser = new MarkdownIt();

  //   useEffect(() => {
  //     const fetchDataAsync = async () => {
  //       try {
  //         const response = await getCoachDes(coachId);
  //         setDescription(response.data.description || "");
  //         setContentMarkdown(response.data.contentMarkdown || "");
  //         dispatch(getSpecialties());
  //         dispatch(fetchData());
  //         dispatch(getCoachBookingById(coachId));
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchDataAsync();
  //   }, [coachId, dispatch]);

  //   useEffect(() => {
  //     if (!coachInforBooking) return;
  //     setNameClass(coachInforBooking.nameClass || "");
  //     setNote(coachInforBooking.note || "");
  //     setPriceId(coachInforBooking.priceId || "");
  //     setNationId(coachInforBooking.nationId || "");
  //     setPaymentId(coachInforBooking.paymentId || "");
  //     setNation(coachInforBooking.nationData || "");
  //     setPayment(coachInforBooking.paymentData || "");
  //     setPrice(coachInforBooking.priceData || "");
  //     setSpecialtyId(coachInforBooking.specialtyId || "");
  //     setSpecialty(coachInforBooking.specialtyData || "");
  //   }, [coachInforBooking]);

  const handleEditorChange = ({
    html,
    text,
  }: {
    html: string;
    text: string;
  }) => {
    setContentHTML(html);
    setContentMarkdown(text);
  };

  const inputData = {
    coachId,
    contentHTML,
    contentMarkdown,
    description,
    priceId,
    specialtyId,
    nationId,
    paymentId,
    nameClass,
    note,
  };

  const handleAddDes = async () => {
    // dispatch(saveCoach(inputData));
    setToggleModal(!toggleModal);
  };

  // Close modal when press ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setToggleModal(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const arrPrices = [
    { keyMap: "PRICE1", valueEn: "100 USD" },
    { keyMap: "PRICE2", valueEn: "200 USD" },
  ];
  const arrPayments = [
    { keyMap: "PAY1", valueEn: "Credit Card" },
    { keyMap: "PAY2", valueEn: "PayPal" },
  ];
  const arrNations = [
    { keyMap: "NAT1", valueEn: "USA" },
    { keyMap: "NAT2", valueEn: "Canada" },
  ];
  const arrSpecialties = [
    { id: "SPEC1", name: "Fitness" },
    { id: "SPEC2", name: "Yoga" },
  ];
  return (
    <div className={cx("form-create")}>
      <Modal isOpen={toggleModal}>
        <ModalHeader>
          <div className={cx("modal-header")}>
            <h2>Add Coach Description</h2>
          </div>
        </ModalHeader>
        <ModalBody className={cx("modal-add-des")}>
          <div className={cx("more-infor")}>
            Coach Introduction
            <textarea
              className={cx("textarea-")}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <form className={cx("input-area")}>
            <div className={cx("input-inline")}>
              <div className={cx("form-group")}>
                <label>Price</label>
                <select
                  className={cx("form-control")}
                  onChange={(e) => setPriceId(e.target.value)}
                >
                  <option>{price ? price.valueEn : "Select price"}</option>
                  {arrPrices?.map((item, index) => (
                    <option value={item.keyMap} key={index}>
                      {item.valueEn}
                    </option>
                  ))}
                </select>
              </div>

              <div className={cx("form-group")}>
                <label>Payment method</label>
                <select
                  className={cx("form-control")}
                  onChange={(e) => setPaymentId(e.target.value)}
                >
                  <option>
                    {payment ? payment.valueEn : "Select payment method"}
                  </option>
                  {arrPayments?.map((item, index) => (
                    <option value={item.keyMap} key={index}>
                      {item.valueEn}
                    </option>
                  ))}
                </select>
              </div>

              <div className={cx("form-group")}>
                <label>Nation</label>
                <select
                  className={cx("form-control")}
                  onChange={(e) => setNationId(e.target.value)}
                >
                  <option>{nation ? nation.valueEn : "Select nation"}</option>
                  {arrNations?.map((item, index) => (
                    <option value={item.keyMap} key={index}>
                      {item.valueEn}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={cx("input-inline")}>
              <div className={cx("form-group input-class-name")}>
                <label>Class Name</label>
                <input
                  value={nameClass || ""}
                  type="text"
                  className={cx("form-control")}
                  onChange={(e) => setNameClass(e.target.value)}
                />
              </div>

              <div className={cx("form-group")}>
                <label>Speciality</label>
                <select
                  className={cx("form-control")}
                  onChange={(e) => setSpecialtyId(e.target.value)}
                >
                  <option>
                    {specialty ? specialty.name : "Select specialty"}
                  </option>
                  {arrSpecialties?.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={cx("form-group input-note")}>
                <label>Note</label>
                <input
                  value={note || ""}
                  type="text"
                  className={cx("form-control")}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>
          </form>

          <MdEditor
            style={{ height: "500px" }}
            value={contentMarkdown}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddDes}>
            Add
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default memo(AddDesModal);
