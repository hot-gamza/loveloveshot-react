import React from "react";
import "./rule.css";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../component/button/Button";
import { TabBar } from "../../component/tapbar/TabBar";
import { Forward } from "../../component/forward/Forward";

const Rule = () => {
  const { modeNo } = useParams();
  return (
    <div>
      <div className="rule-index">
        <div className="div">
          <div className="text-wrapper">사진 업로드 규정</div>
          <div className="group">
            <div className="overlap">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="ellipse" />
                  <img
                    className="cancel"
                    alt="Cancel"
                    src="https://cdn.animaapp.com/projects/650fc8702e4e252d8d5cde56/releases/65117e2153064f584d31901c/img/cancel@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="group-wrapper">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="ellipse" />
                  <img
                    className="cancel"
                    alt="Cancel"
                    src="https://cdn.animaapp.com/projects/650fc8702e4e252d8d5cde56/releases/65117e2153064f584d31901c/img/cancel@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="ellipse" />
                  <img
                    className="cancel"
                    alt="Cancel"
                    src="https://cdn.animaapp.com/projects/650fc8702e4e252d8d5cde56/releases/65117e2153064f584d31901c/img/cancel@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="overlap-2">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="ellipse" />
                  <img
                    className="cancel"
                    alt="Cancel"
                    src="https://cdn.animaapp.com/projects/650fc8702e4e252d8d5cde56/releases/65117e2153064f584d31901c/img/cancel@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bad">
            <div className="text-wrapper-2">BAD</div>
            <img
              className="loudly-crying-emoji"
              alt="Loudly crying emoji"
              src="https://cdn.animaapp.com/projects/650fc8702e4e252d8d5cde56/releases/651014f5b34031947f682c3a/img/loudly-crying-emoji--free-download-iphone-emojis-.png"
            />
          </div>
          <div className="good">
            <div className="text-wrapper-2">GOOD</div>
            <img
              className="smiling-with-closed"
              alt="Smiling with closed"
              src="https://cdn.animaapp.com/projects/650fc8702e4e252d8d5cde56/releases/651014f5b34031947f682c3a/img/smiling-with-closed-eyes-emoji--free-download-ios-emojis-.png"
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
            <div className="overlap-3">
              <div className="group-3">
                <div className="overlap-group-2">
                  <div className="ellipse-2" />
                  <img
                    className="vector"
                    alt="Vector"
                    src="https://cdn.animaapp.com/projects/650fc8702e4e252d8d5cde56/releases/65117e2153064f584d31901c/img/vector.svg"
                  />
                </div>
              </div>
            </div>
            <div className="overlap-4">
              <div className="group-3">
                <div className="overlap-group-2">
                  <div className="ellipse-2" />
                  <img
                    className="vector"
                    alt="Vector"
                    src="https://cdn.animaapp.com/projects/650fc8702e4e252d8d5cde56/releases/65117e2153064f584d31901c/img/vector.svg"
                  />
                </div>
              </div>
            </div>
            <div className="overlap-5">
              <div className="group-3">
                <div className="overlap-group-2">
                  <div className="ellipse-2" />
                  <img
                    className="vector"
                    alt="Vector"
                    src="https://cdn.animaapp.com/projects/650fc8702e4e252d8d5cde56/releases/65117e2153064f584d31901c/img/vector.svg"
                  />
                </div>
              </div>
            </div>
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
            src="https://cdn.animaapp.com/projects/650fc8702e4e252d8d5cde56/releases/651014f5b34031947f682c3a/img/line-27.svg"
          />
          <img
            className="img"
            alt="Line"
            src="https://cdn.animaapp.com/projects/650fc8702e4e252d8d5cde56/releases/651014f5b34031947f682c3a/img/line-27.svg"
          />
          <Forward />

          {modeNo == 1 ? (
            <Link to="/standard">
              <Button
                className="button-2"
                divClassName="text-wrapper-8"
                text="이미지 등록하기"
              />
            </Link>
          ) : (
            <Link to="/premium">
              <Button
                className="button-2"
                divClassName="text-wrapper-8"
                text="이미지 등록하기"
              />
            </Link>
          )}
        </div>
      </div>
      <center>
      <TabBar className="tab-bar-instance" />
      </center>
    </div>
  );
};
export default Rule;
