import React, { useState, useRef } from "react";
import "./standard.css";
import { TabBar } from "../../component/tapbar/TabBar";
import axios from "axios";

const Standard = () => {
  const [disabled, setDisabled] = useState(false);
  const [maleImage, setMaleImage] = useState(null);
  const [femaleImage, setFemaleImage] = useState(null);
  const maleImgRef = useRef();
  const femaleImgRef = useRef();
  const springURL = "http://192.168.0.159:8080/api/v1/uploadStandardImage";

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
          sessionStorage.setItem("taskId", resp.data.data.taskId);
        })
        .catch(function (err) {
          alert(err);
        });
      await new Promise((r) => setTimeout(r, 2000));
      setDisabled(false);
    }
  };
  return (
    <div className="standard-index">
      <div className="div">
        <TabBar className="tab-bar" />
        <input type="submit" className="div-wrapper">
          <div className="text-wrapper-3">생성하기</div>
        </input>
        <div className="view">
          <div className="ellipse" />
          <div className="text-wrapper-4">사진 업로드 약관 동의</div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="image">남성</div>
            <button className="element-wrapper">
              <div className="element">이미지 등록하기</div>
            </button>
          </div>
        </div>
        <div className="view-2">
          <div className="overlap-2">
            <div className="image-2">여성</div>
            <button className="button-2">
              <div className="element">이미지 등록하기</div>
            </button>
          </div>
        </div>
        <div className="standard-text">
          <div className="text-wrapper-5">Standard</div>
          <div className="text-wrapper-6">커플 2명의 사진을 등록해주세요.</div>
        </div>
      </div>
    </div>
  );
};
export default Standard;
