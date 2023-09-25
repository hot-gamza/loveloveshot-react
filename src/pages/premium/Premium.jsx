import React, { useState } from "react";
import "./premium.css";
import { TabBar } from "../../component/tapbar/TabBar";
import Terms from "../../component/terms/Terms";

const Premium = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agreement, setAgreement] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAgreementChange = (event) => {
    const { checked } = event.target;
    setAgreement(checked);
  };

  return (
    <div className="index">
      <div className="div">
        <TabBar />
        <button className="div-wrapper">
          <div className="text-wrapper-3">생성하기</div>
        </button>
        <div className="view">
          <input
            type="checkbox"
            id="agree_terms"
            className="ellipse"
            checked={agreement}
            // onChange={handleAgreementChange}
          />
          <label
            htmlFor="agree_terms"
            className="text-wrapper-4"
            onClick={openModal}
          >
            사진 업로드 약관 동의
          </label>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="image">남성</div>
            <button className="element-wrapper">
              <div className="element">이미지 등록하기</div>
            </button>
          </div>
        </div>
        <div className="view-2">
          <div className="overlap-2">
            <div className="image">여성</div>
            <button className="element-wrapper">
              <div className="element">이미지 등록하기</div>
            </button>
          </div>
        </div>
        <div className="premium-text">
          <div className="text-wrapper-5">Premium</div>
          <div className="text-wrapper-6">커플 2명의 사진을 등록해주세요.</div>
        </div>
        {isModalOpen && <Terms closeModal={closeModal} />}
      </div>
    </div>
  );
};
export default Premium;
