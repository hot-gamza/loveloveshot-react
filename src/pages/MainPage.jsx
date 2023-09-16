import React from "react";
import { Link } from "react-router-dom";
import "../assets/pages/mainpage.css";

const MainPage = () => {
  return (
    <>
      <div>
        <div className="content-3d">
          <Link to="/modeSelect" className="btn-3d yellow">
            사진 생성
          </Link>
        </div>
      </div>
    </>
  );
};
export default MainPage;
