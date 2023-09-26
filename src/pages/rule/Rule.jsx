import React from "react";
import "./rule.css";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../component/button/Button";
import { TabBar } from "../../component/tapbar/TabBar";

const Rule = () => {
  const { modeNo } = useParams();
  return (
    <div className="rule-index">
      <div className="div">
        <div className="text-wrapper">사진 업로드 규정</div>
        <div className="group">
          <img
            className="rectangle"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651023c9fabe7d22e721dbf0/img/rectangle-54@2x.png"
          />
          <img
            className="img"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651023c9fabe7d22e721dbf0/img/rectangle-55@2x.png"
          />
          <img
            className="rectangle-2"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651023c9fabe7d22e721dbf0/img/rectangle-56@2x.png"
          />
          <img
            className="rectangle-3"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651023c9fabe7d22e721dbf0/img/rectangle-57@2x.png"
          />
        </div>
        <div className="bad">
          <div className="text-wrapper-2">BAD</div>
          <img
            className="loudly-crying-emoji"
            alt="Loudly crying emoji"
            src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/650fb0cb00e335da865f8efc/img/loudly-crying-emoji--free-download-iphone-emojis-.png"
          />
        </div>
        <div className="good">
          <div className="text-wrapper-2">GOOD</div>
          <img
            className="smiling-with-closed"
            alt="Smiling with closed"
            src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/650fb0cb00e335da865f8efc/img/smiling-with-closed-eyes-emoji--free-download-ios-emojis-.png"
          />
        </div>
        <div className="group-2">
          <div className="text-wrapper-3">
            얼굴이 명확하게 <br />
            나온 증명사진
          </div>
          <div className="text-wrapper-4">
            과한 보정이
            <br />
            없는 사진
          </div>
          <div className="text-wrapper-5">
            옅은 미소를
            <br />띈 사진
          </div>
          <img
            className="ellipse"
            alt="Ellipse"
            src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651023c9fabe7d22e721dbf0/img/ellipse-17@2x.png"
          />
          <img
            className="ellipse-2"
            alt="Ellipse"
            src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651023c9fabe7d22e721dbf0/img/ellipse-18@2x.png"
          />
          <img
            className="ellipse-3"
            alt="Ellipse"
            src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651023c9fabe7d22e721dbf0/img/ellipse-19@2x.png"
          />
        </div>
        <p className="p">
          얼굴이 너무 작게 나온 사진
          <br />
          안경,손,그림자 등 얼굴을 가린 사진 <br />
          입벌림,찡그림 등 표정이 많이 드러나는 사진
        </p>
        <img
          className="line"
          alt="Line"
          src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651023c9fabe7d22e721dbf0/img/line-27.svg"
        />
        <img
          className="line-2"
          alt="Line"
          src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651023c9fabe7d22e721dbf0/img/line-27.svg"
        />
        <div className="forward" />
        {/* <TabBar /> */}
        <div className="tab-bar">
          <div className="group-3">
            <div className="text-wrapper-6">사진첩</div>
            <img
              className="vector"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/650fb0cb00e335da865f8efc/img/vector.svg"
            />
          </div>
          <div className="button">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="rectangle-4" />
                <div className="rectangle-5" />
              </div>
            </div>
          </div>
          <div className="group-4">
            <div className="text-wrapper-7">홈</div>
            <img
              className="vector-2"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/650fb0cb00e335da865f8efc/img/vector-1.svg"
            />
          </div>
        </div>
        {modeNo == 1 ? (
          <Link to="/standard">
            <Button
              className="div-wrapper"
              divClassName="text-wrapper-8"
              text="이미지 등록하기"
            />
          </Link>
        ) : (
          <Link to="/premium">
            <Button
              className="div-wrapper"
              divClassName="text-wrapper-8"
              text="이미지 등록하기"
            />
          </Link>
        )}
      </div>
    </div>
  );
};
export default Rule;
