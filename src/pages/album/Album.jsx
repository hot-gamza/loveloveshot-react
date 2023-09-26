import React, { useState, useEffect } from "react";
import axios from "axios";
import "./album.css";
import { TabBar } from "../../component/tapbar/TabBar";
import { Link } from "react-router-dom";

const Album = ({ userNo }) => {
  const [taskIds, setTaskIds] = useState([]);
  const [imagePaths, setImagePaths] = useState([]);
  // const inCompleteTaskId = sessionStorage.getTaskId;

  const baseUrl = "http://192.168.0.159:8080";

  useEffect(() => {
    // userNo로부터 taskIds 목록 가져오기
    axios
      .get(`${baseUrl}/api/v1/taskIds?userNo=${userNo}`)
      .then((response) => {
        console.log(response.data.data);
        setTaskIds(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching taskIds:", error);
      });
  }, [userNo]);

  useEffect(() => {
    taskIds.map((taskId) => {
      axios
        .get(`${baseUrl}/api/v1/images?taskId=${taskId}`)
        .then((response) => {
          console.log(response.data.data[0].imagePath);
          setImagePaths(response.data.data[0].imagePath);
          // console.log('taskIds',taskId)
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    });
  }, [taskIds]);

  return (
    <div className="album-index">
      <div className="div">
        <div className="option-text">
          <div className="text-wrapper-3">내 사진첩</div>
          <p className="p">우리의 추억이 될 특별한 사진</p>
        </div>

        {taskIds.map((taskId) => (
          <div className="overlap" key={taskId}>
            <Link to={`/Result/${taskId}`}>
              <div className="element">
                <div className="overlap-2">
                  <img
                    src={`${baseUrl}${imagePaths}`}
                    alt="image"
                    height="240"
                    width="240"
                  />
                  <div className="image">Task ID: {taskId}</div>
                  <div className="div-wrapper">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-4">이미지 확인하기</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="text-wrapper-5">2023.09.22에 완료 예정</div> */}
              {/* <div className="loading">
            <div className="overlap-3">
              <img
                className="ellipse"
                alt="Ellipse"
                src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651030636712cc4a34c8568d/img/padlock@2x.png"
              />
              <div className="rectangle-3" />
              <div className="rectangle-4" />
            </div>
          </div> */}
            </Link>
          </div>
        ))}

        <div className="logout">
          <div className="overlap-4">
            <div className="text-wrapper-6">Logout</div>
            <img
              className="padlock"
              alt="Padlock"
              src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651030636712cc4a34c8568d/img/padlock@2x.png"
            />
          </div>
        </div>

        <TabBar />
      </div>
    </div>
  );
};
export default Album;
