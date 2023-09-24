import React from "react";
import "./album.css";

const Album = () => {
  <div className="album-index">
    <div className="div">
      <div className="tab-bar">
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
      </div>
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
  </div>;
};
export default Album;
