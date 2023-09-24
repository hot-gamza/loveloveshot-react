import React from "react";
import "./mainPage.css";
import { Button } from "../../component/button/Button";
import { DivWrapper } from "../../component/view/DivWrapper";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div className="mainPage-index">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img
              className="image"
              alt="Image"
              src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/650faf1488995bc33587e099/img/image-1.png"
            />
            <div className="rectangle" />
            <Link to="/modeSelect" className="btn main__btn">
              <Button
                className="button-1"
                divClassName="button-instance"
                text="새로운 이미지 생성하기"
              />
            </Link>
            <div className="text-top">
              <div className="text-wrapper-2">커플 이미지</div>
              <p className="AI">
                우리의 추억이 될 커플 이미지 만들기
                <br />
                AI가 만들어주는 커플 이미지를 확인해보세요!
              </p>
            </div>
            <Link to="/album">
              <Button
                className="button-1-instance"
                divClassName="design-component-instance-node"
                text="내 사진첩 보기"
              />
            </Link>
            <DivWrapper className="view" />
          </div>
        </div>
      </div>
    </>
  );
};
export default MainPage;
