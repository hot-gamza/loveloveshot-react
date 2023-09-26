import React from "react";
import "./result.css";
import { TabBar } from "../../component/tapbar/TabBar";
import { Forward } from "../../component/forward/Forward";

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
        <Forward />
      </div>
    </div>
  );
};
export default Result;
