import React, { useEffect } from "react";
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
            {/* <Carousel
              id="carouselExampleSlidesOnly"
              fade
              interval={2000} // 슬라이드 간의 시간 간격 (2초)
            >
              <Carousel.Item>
                <img
                  className="image"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/650faf1488995bc33587e099/img/image-1.png"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/65116c70ad252e258624d808/img/kakaotalk-20230921-182317739-18-1.png"
                  className="image"
                  alt="Image"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651172d14e4eacf25ae6fece/img/kakaotalk-20230917-104208558-02-1.png"
                  className="image"
                  alt="Image"
                />
              </Carousel.Item>
            </Carousel> */}
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide carousel-fade carousel-dark"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item">
                  <img
                    className="image"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/650faf1488995bc33587e099/img/image-1.png"
                  />
                </div>
                {/* <div className="carousel-item">
                  <img
                    src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/65116c70ad252e258624d808/img/kakaotalk-20230921-182317739-18-1.png"
                    className="image"
                    alt="Image"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651172d14e4eacf25ae6fece/img/kakaotalk-20230917-104208558-02-1.png"
                    className="image"
                    alt="Image"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/65116c70ad252e258624d808/img/kakaotalk-20230921-182317739-18-1.png"
                    className="image"
                    alt="Image"
                  />
                </div> */}
              </div>
            </div>

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
