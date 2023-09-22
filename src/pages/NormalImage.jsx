import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useDropzone } from "react-dropzone";
// import ImageUpload from "../component/ImageUpload";
import "../assets/pages/normalImage.css";

const NormalImage = () => {
  const [disabled, setDisabled] = useState(false);
  const [maleImage, setMaleImage] = useState(null);
  const [femaleImage, setFemaleImage] = useState(null);
  const maleImgRef = useRef();
  const femaleImgRef = useRef();
  const navigate = useNavigate();
  const springURL = "http://192.168.0.21:8080/api/v1/singleImage";

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
      formdata.append("maleSingleImage", maleFile);
      formdata.append("femaleSingleImage", femaleFile);


      axios
        .post(springURL, formdata)
        .then(function (resp) {
          console.log(resp);
          console.log(resp.data.data);
          navigate("/normalResult", {
            state: {
              result: resp.data.data.aiImage,
            },
          });
        })
        .catch(function (err) {
          alert(err);
        });
      await new Promise((r) => setTimeout(r, 2000));
      setDisabled(false);
    }
  };
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
                onClick={() => maleImgRef.current.click()}
              />
            ) : (
              <img
                className="maleImage"
                src={maleImage}
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
                onClick={() => femaleImgRef.current.click()}
              />
            ) : (
              <img
                className="femaleImage"
                src={femaleImage}
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
          <div className="normalImage_btnBox">
            <input
              type="submit"
              value="결과 보기"
              className="btn normalImage__btn"
              disabled={disabled}
            />
          </div>
        </center>
      </form>
    </>
  );
};
export default NormalImage;
