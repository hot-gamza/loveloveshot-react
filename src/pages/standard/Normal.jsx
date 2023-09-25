import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
// import "../assets/pages/normalImage.css";

const Normal = () => {
  const [disabled, setDisabled] = useState(false);
  const [maleImage, setMaleImage] = useState(null);
  const [femaleImage, setFemaleImage] = useState(null);
  const [waitingCount, setWaitingCount] = useState(0);
  const [count, setCount] = useState(0);
  const maleImgRef = useRef();
  const femaleImgRef = useRef();
  const springURL = "http://192.168.0.159:8080/api/v1/uploadStandardImage";
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
      formdata.append("maleImage", maleFile);
      formdata.append("femaleImage", femaleFile);

      axios
        .post(springURL, formdata)
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
                waitingNumber * 12 +
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

  if (waitingNumber * 12 - count === 0) {
    sessionStorage.clear(sessionStorage);
  }

  return (
    <>
      <p>Standard</p>
      <form
        name="singleImageForm"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="imageContainer">
          <div className="imageBoxWrapper">
            <div className="maleImageBox">
              <input
                type="file"
                id="male"
                name="maleSingleImage"
                accept="image/*"
                className="uploadImage"
                onChange={() => handleImageChange(maleImgRef, setMaleImage)}
                ref={maleImgRef}
              />
              {/* <label for="male">
              <div className="btn-upload">남성 사진 업로드</div>
            </label> */}
              {maleImage === null ? (
                <img
                  className="maleImage"
                  src="man.png"
                  alt=""
                  onClick={() => maleImgRef.current.click()}
                />
              ) : (
                <img
                  className="maleImage"
                  src={maleImage}
                  alt=""
                  onClick={() => maleImgRef.current.click()}
                />
              )}
            </div>
            <div class="normalImage_title">
              <p>Man</p>
            </div>
          </div>
          <div className="imageBoxWrapper">
            <div className="femaleImageBox">
              <input
                type="file"
                name="femaleSingleImage"
                accept="image/*"
                className="uploadImage male"
                onChange={() => handleImageChange(femaleImgRef, setFemaleImage)}
                ref={femaleImgRef}
              />
              {femaleImage === null ? (
                <img
                  className="femaleImage"
                  src="girl.png"
                  alt=""
                  onClick={() => femaleImgRef.current.click()}
                />
              ) : (
                <img
                  className="femaleImage"
                  src={femaleImage}
                  alt=""
                  onClick={() => femaleImgRef.current.click()}
                />
              )}
            </div>
            <div class="normalImage_title">
              <p>Woman</p>
            </div>
          </div>
        </div>
        <center>
          {sessionStorage.getItem("taskId") === null ? (
            <div className="normalImage_btnBox">
              <input
                type="submit"
                value="업로드 하기"
                className="btn normalImage__btn"
                disabled={disabled}
              />
            </div>
          ) : (
            <div className="normalImage_btnBox">
              <input
                type="button"
                value="결과 보기"
                className="btn normalImage__btn"
                onClick={(event) => {
                  let waitingTime = waitingCount * 12 - count;
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
            </div>
          )}
        </center>
      </form>
    </>
  );
};
export default Normal;
