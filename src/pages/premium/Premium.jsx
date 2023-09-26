import React, { useState, useRef, useEffect } from "react";
import "./premium.css";
import { TabBar } from "../../component/tapbar/TabBar";
import Terms from "../../component/terms/Terms";
import { Forward } from "../../component/forward/Forward";
import axios from "axios";

const Premium = () => {
  const [disabled, setDisabled] = useState(false);
  const [maleImage, setMaleImage] = useState(null);
  const [femaleImage, setFemaleImage] = useState(null);
  const [waitingCount, setWaitingCount] = useState(0);
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [agreement, setAgreement] = useState(false);
  const maleImgRef = useRef();
  const femaleImgRef = useRef();
  const springURL = "http://192.168.0.159:8080/api/v1/uploadPremiumImage";
  let waitingNumber = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [waitingNumber]);

  const handleImageChange = (ref, setImageState) => {
    const file = ref.current.files[0];
    if (!file) {
      setImageState(null);
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageState(reader.result);
      };
    }
  };

  const handleSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();

    const maleFile = maleImgRef.current.files[0];
    const femaleFile = femaleImgRef.current.files[0];

    if (!maleFile && !femaleFile) {
      alert("사진을 업로드 해주세요!");
      setDisabled(false);
      return;
    } else if (!maleFile) {
      setDisabled(false);
      alert("남성분 사진을 업로드해주세요.");
      return;
    } else if (!femaleFile) {
      setDisabled(false);
      alert("여성분 사진을 업로드해주세요.");
      return;
    } else {
      let formdata = new FormData();
      formdata.append("maleImages", maleFile);
      formdata.append("femaleImages", femaleFile);

      axios
        .post(springURL, formdata, {
          headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
        })
        .then(function (resp) {
          console.log(resp.data.data.taskId);
          console.log(resp);
          waitingNumber = resp.data.data.waitingNumber;
          setWaitingCount(waitingNumber);
          sessionStorage.setItem("taskId", resp.data.data.taskId);
          if (waitingNumber !== 0) {
            alert(
              "대기열: " +
                waitingNumber +
                "\n예상 대기 시간: " +
                waitingNumber * 10 +
                "초"
            );
          }
        })
        .catch(function (err) {
          alert(err);
        });
      await new Promise((r) => setTimeout(r, 1000));
      setDisabled(false);
    }
  };

  if (waitingNumber * 10 - count === 0) {
    sessionStorage.clear(sessionStorage);
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const handleAgreementChange = (event) => {
  //   const { checked } = event.target;
  //   setAgreement(checked);
  // };

  return (
    <div className="index">
      <div className="div">
        <Forward />
        <TabBar className="tab-bar" />
        <form
          name="singleImageForm"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="text-wrapper-3">
            {sessionStorage.getItem("taskId") === null ? (
              <input
                type="submit"
                className="div-wrapper"
                value="생성하기"
                disabled={disabled}
              />
            ) : (
              <input
                type="button"
                className="div-wrapper"
                value="결과 보기"
                onClick={(event) => {
                  let waitingTime = waitingCount * 10 - count;
                  event.preventDefault();
                  if (waitingCount > 0 && waitingTime > 0) {
                    alert(
                      "이미 업로드를 하셨습니다.\n작업이 끝나고 다시 시도해 주세요.\n" +
                        "대기열: " +
                        waitingCount +
                        "\n예상 대기 시간: " +
                        waitingTime +
                        "초"
                    );
                  }
                  if (waitingTime <= 0) {
                    alert(
                      "사진 생성이 완료되었습니다!!\n결과는 사진첩에서 확인하실 수 있습니다."
                    );
                  }
                }}
              />
            )}
            <div className="view">
              <input
                type="checkbox"
                id="agree_terms"
                className="ellipse"
                // checked={agreement}
                // onChange={handleAgreementChange}
              />
              <label
                htmlFor="agree_terms"
                className="text-wrapper-4"
                onClick={openModal}
              >
                사진 업로드 약관 동의
              </label>
            </div>
          </div>
          {/* <div className="overlap-wrapper"> */}
          {/* <div className="overlap"> */}
          <input
            // multiple
            type="file"
            name="maleSingleImage"
            className="uploadImage"
            accept="image/*"
            onChange={() => handleImageChange(maleImgRef, setMaleImage)}
            ref={maleImgRef}
          />
          {maleImage === null ? (
            <img
              className="overlap-wrapper"
              src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/650fc9a530f1426ce53ba43c/img/rectangle-48@2x.png"
              alt=""
              onClick={() => maleImgRef.current.click()}
            />
          ) : (
            <img
              className="overlap-wrapper"
              src={maleImage}
              alt=""
              onClick={() => maleImgRef.current.click()}
            />
          )}
          <div className="image">남성</div>
          {/* </div> */}
          {/* </div> */}
          {/* <div className="view-2"> */}
          {/* <div className="overlap-2"> */}
          {femaleImage === null ? (
            <img
              className="view-2"
              src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/650fc9a530f1426ce53ba43c/img/rectangle-48-1@2x.png"
              alt=""
              onClick={() => femaleImgRef.current.click()}
            />
          ) : (
            <img
              className="view-2"
              src={femaleImage}
              alt=""
              onClick={() => femaleImgRef.current.click()}
            />
          )}
          <input
            // multiple
            type="file"
            name="femaleSingleImage"
            className="uploadImage"
            accept="image/*"
            onChange={() => handleImageChange(femaleImgRef, setFemaleImage)}
            ref={femaleImgRef}
          />
          <div className="image-2">여성</div>
          {/* </div> */}
          {/* </div> */}
        </form>
        <div className="premium-text">
          <div className="text-wrapper-5">Premium</div>
          <div className="text-wrapper-6">
            커플 2명의 사진을 1장 등록해주세요.
          </div>
        </div>
        {isModalOpen && <Terms closeModal={closeModal} />}
      </div>
    </div>
  );
};
export default Premium;
