import React, { useState, useEffect } from "react";
import axios from "axios";
import "./result.css";
import { TabBar } from "../../component/tapbar/TabBar";
import { useParams } from "react-router-dom";

const Result = () => {
  const { taskId } = useParams();
  const baseUrl = "http://localhost:8080";

  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/images?taskId=${taskId}`)
      .then((response) => {
        console.log(response.data.data);
        setImages(response.data.data);
        setSelectedTaskId(taskId);
        // console.log(`${images[0].imagePath}${images[0].imageName}`)
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, [taskId]);

  return (
    <div className="result-index">
      <div className="div">
        {images.map((image) => (
          <div className="overlap" key={image.imageName}>
            <img
              className="kakaotalk-photo"
              alt={image.imageName}
              src={`${baseUrl}${image.imagePath}`}
            />

            {/* <div className="tab-bar">
            <div className="group">
              <div className="text-wrapper">사진첩</div>
              <img
                className="vector"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651030636712cc4a34c8568d/img/vector.svg"
              />
            </div>
            <div className="button">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="rectangle" />
                  <div className="rectangle-2" />
                </div>
              </div>
            </div>
            <div className="group-2">
              <div className="text-wrapper-2">홈</div>
              <img
                className="img"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651030636712cc4a34c8568d/img/vector-1.svg"
              />
            </div>
          </div> */}
          </div>
        ))}
        <div className="group-3">
          <div className="text-wrapper-3"></div>
          <div className="text-wrapper-4"></div>
        </div>
        {/* <img
          className="kakaotalk-photo-2"
          alt="Kakaotalk"
          src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651030e59efc059aed0ee99d/img/kakaotalk-photo-2023-09-23-23-03-45-001-1@2x.png"
        /> */}
        <div className="forward" />

        <TabBar />
      </div>
    </div>
  );
};
export default Result;
