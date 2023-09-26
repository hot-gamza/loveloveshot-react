import React, { useState, useEffect } from "react";
import axios from "axios";
import "./album.css";
import { TabBar } from "../../component/tapbar/TabBar";
import { Link } from "react-router-dom";

const Album = ({ userNo }) => {
  const [taskIds, setTaskIds] = useState([]);
  const [imagePaths, setImagePaths] = useState([]);

  const baseUrl = "http://192.168.0.159:8080";

  useEffect(() => {
    const sessionTaskId = sessionStorage.getItem('taskId')
    const sessionTaskIds = sessionTaskId ? [sessionTaskId] : [];
    setTaskIds(sessionTaskIds);

    // if (userNo) {
    //   // userNo로부터 taskIds 목록 가져오기
    //   axios.get(`${baseUrl}/api/v1/taskIds?userNo=1`)
    //     .then((response) => {
    //       // console.log(userNo);
    //       // console.log(response.data.data);
    //       setTaskIds(prevTaskIds => [...prevTaskIds, ...response.data.data]);
          
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching taskIds:', error);
    //     });
    // }
  }, [userNo]);

  console.log('taskid', taskIds)


  useEffect(() => {
    taskIds.map((taskId) => {
      axios.get(`${baseUrl}/api/v1/images?taskId=${taskId}`)
        .then((response) => {
          // console.log('path', response.data.data);
          setImagePaths(response.data.data[0].imagePath);
          // console.log("path", imagePaths)

        })
        .catch((error) => {
          console.error('Error fetching images:', error);
        });
    });
  }, [taskIds])

  console.log('path', imagePaths)

  return (
    <div className="album-index">
      <div className="div">
        <div className="option-text">
          <div className="text-wrapper-3">내 사진첩</div>
          <p className="p">우리의 추억이 될 특별한 사진</p>
        </div>

        {taskIds.map((taskId) => (
          <div className='overlap' key={taskId}>
            {taskId && (
              
                <div className="element">
                  <div className="overlap-2">
                    <div className="image"></div>

                    {imagePaths.length > 0 && (
                      <div>
                        <Link to={`/Result/${taskId}`}>
                        <img src={`${baseUrl}${imagePaths}`} alt="image" height="240" width="240" />
                        <div className="div-wrapper">
                          <div className="overlap-group-2">
                            <div className="text-wrapper-4">이미지 확인하기</div>
                          </div>
                        </div>
                        </Link>
                      </div>
                    )}

                    {imagePaths.length <= 0 && (
                      <div>
                        <div className="div-wrapper">
                          <div className="overlap-group-2">
                            <div className="text-wrapper-4">이미지 생성중</div>
                          </div>
                        </div>
                        <div className="text-wrapper-5">2023.09.22에 완료 예정</div>
                        <div className="loading">
                          <div className="overlap-3">
                            <img
                              className="ellipse"
                              alt="Ellipse"
                              src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/651030636712cc4a34c8568d/img/padlock@2x.png"
                            />
                            <div className="rectangle-3" />
                            <div className="rectangle-4" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
            )}
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
