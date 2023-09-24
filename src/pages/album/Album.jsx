import React from "react";
import "./album.css";
import { TabBar } from "../../component/tapbar/TabBar";

const Album = () => {
  return (
    <div className="album-index">
      <div className="div">
        <TabBar />
        <div className="option-text">
          <div className="text-wrapper-3">내 사진첩</div>
          <p className="p">우리의 추억이 될 특별한 사진</p>
        </div>
        <div className="overlap">
          <div className="element">
            <div className="overlap-2">
              <div className="image">커플 모음집 v.1 제작중...</div>
              <div className="div-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-4">이미지 등록하기</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-5">2023.09.22에 완료 예정</div>
          <div className="loading">
            <div className="overlap-3">
              <img
                className="ellipse"
                alt="Ellipse"
                src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651030636712cc4a34c8568d/img/ellipse-16.svg"
              />
              <div className="rectangle-3" />
              <div className="rectangle-4" />
            </div>
          </div>
        </div>
        <div className="logout">
          <div className="overlap-4">
            <div className="text-wrapper-6">Logout</div>
            <img
              className="padlock"
              alt="Padlock"
              src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651030636712cc4a34c8568d/img/padlock@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Album;
