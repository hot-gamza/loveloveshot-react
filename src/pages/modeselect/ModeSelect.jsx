import React from "react";
import "./modeSelect.css";
import { Link } from "react-router-dom";
import { Logo } from "../../component/logo/Logo";
import { TabBar } from "../../component/tapbar/TabBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

const ModeSelect = () => {
  return (
    <div className="modeSelect-index">
      <div className="div-2">
        <TabBar className="tab-bar-instance" />
        <div className="botton-text">
          <p className="p">
            * 업로드한 사진은, 이미지 생성 후&nbsp;서버에서 즉시 삭제됩니다.
          </p>
        </div>
        <div className="premium-button">
          <div className="overlap">
            <Link to="/rule/2">
              <div className="choose-button">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">선택하기</div>
                </div>
              </div>
            </Link>
            <div className="text">
              <div className="text-wrapper-5">컨셉별 커플 이미지 10장</div>
              <div className="text-wrapper-6">나만의 사진첩 제공</div>
              <div className="text-wrapper-7">워터마크 제거</div>
              <div className="crown">
                <FontAwesomeIcon
                  icon={faCrown}
                  style={{ color: "#fffa66" }}
                  size="2xs"
                />
              </div>
              <div className="crown-2">
                <FontAwesomeIcon
                  icon={faCrown}
                  style={{ color: "#fffa66" }}
                  size="2xs"
                />
              </div>
              <div className="crown-3">
                <FontAwesomeIcon
                  icon={faCrown}
                  style={{ color: "#fffa66" }}
                  size="2xs"
                />
              </div>
              {/* <img
                className="crown"
                alt="Crown"
                src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/650fb0cb00e335da865f8efc/img/crown@2x.png"
              />
            */}
            </div>
            <div className="text-wrapper-8">Premium</div>
            <div className="button-best">
              <div className="overlap-2">
                <div className="text-wrapper-9">Best!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="standard-button">
          <div className="overlap-3">
            <div className="choose-button-2">
              <Link to="/rule/1">
                <div className="overlap-group-3">
                  <div className="text-wrapper-10">선택하기</div>
                </div>
              </Link>
            </div>
            <p className="element">
              컨셉별 커플 이미지 1장
              <br />
              워터마크 존재
            </p>
            <div className="text-wrapper-11">Standard</div>
          </div>
        </div>
        <div className="option-text">
          <div className="text-wrapper-12">옵션 선택하기</div>
          <div className="text-wrapper-13">
            만들고 싶은 옵션을 선택해주세요.
          </div>
        </div>
        <Logo className="logo-instance" />
        {/* <img src="loveloveshot_logo.png" /> */}
      </div>
    </div>
  );
};
export default ModeSelect;
