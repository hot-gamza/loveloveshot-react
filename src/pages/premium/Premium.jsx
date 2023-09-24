import React from "react";
import "./premium.css";

const Premium = () => {
  return (
    <div className="index">
      <div className="div">
        <div className="tab-bar">
          <div className="group">
            <div className="text-wrapper">사진첩</div>
            <img
              className="vector"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/650fb0cb00e335da865f8efc/img/vector.svg"
            />
          </div>
          <div className="button">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="rectangle" />
                <div className="rectangle-2" />
              </div>
            </div>
          </div>
          <div className="group-2">
            <div className="text-wrapper-2">홈</div>
            <img
              className="img"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/650fb0cb00e335da865f8efc/img/vector-1.svg"
            />
          </div>
        </div>
        <button className="div-wrapper">
          <div className="text-wrapper-3">생성하기</div>
        </button>
        <div className="view">
          <div className="ellipse" />
          <div className="text-wrapper-4">사진 업로드 약관 동의</div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="image">남성</div>
            <button className="element-wrapper">
              <div className="element">사진 3-5장 등록하기</div>
            </button>
          </div>
        </div>
        <div className="view-2">
          <div className="overlap-2">
            <div className="image">여성</div>
            <button className="element-wrapper">
              <div className="element">사진 3-5장 등록하기</div>
            </button>
          </div>
        </div>
        <div className="premium-text">
          <div className="text-wrapper-5">Premium</div>
          <div className="text-wrapper-6">커플 2명의 사진을 등록해주세요.</div>
        </div>
      </div>
    </div>
  );
};
export default Premium;
