import React from "react";
import "./result.css";
import { TabBar } from "../../component/tapbar/TabBar";

const Result = () => {
  return (
    <div className="result-index">
      <div className="div">
        <div className="overlap">
          <img
            className="kakaotalk-photo"
            alt="Kakaotalk photo"
            src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651030e59efc059aed0ee99d/img/kakaotalk-photo-2023-09-23-23-03-46-002-1@2x.png"
          />
          <TabBar />
          {/* <div className="tab-bar">
            <div className="group">
              <div className="text-wrapper">사진첩</div>
              <img
                className="vector"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651030636712cc4a34c8568d/img/vector.svg"
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
                src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651030636712cc4a34c8568d/img/vector-1.svg"
              />
            </div>
          </div> */}
        </div>
        <div className="group-3">
          <div className="text-wrapper-3">커플 모음집 v.1</div>
          <div className="text-wrapper-4">전체 저장</div>
        </div>
        <img
          className="kakaotalk-photo-2"
          alt="Kakaotalk photo"
          src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651030e59efc059aed0ee99d/img/kakaotalk-photo-2023-09-23-23-03-45-001-1@2x.png"
        />
        <div className="forward" />
      </div>
    </div>
  );
};
export default Result;
