import React, { useState, useEffect, Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = ({ edit, setEdit }) => {
  const Header = styled.div`
    width: 100%;
    height: 7vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: #2ee59d;

    a {
      color: white;
      text-decoration: none;
    }
    #main_logo {
      margin: 5% auto;
      display: flex;
      justify-content: center;
      width: 70px;
      height: 70px;
    }

    .logo {
      margin: 0 1rem;
      font-size: 2rem;
    }

    .header_menulist {
      list-style: none;
      display: flex;
    }

    .header_left {
      display: flex;
    }

    .header_right {
      list-style: none;
      display: flex;
    }

    .header_right div {
      margin: 0 1rem;
    }

    li {
      padding: 0 1rem;
      font-size: 1.2rem;
    }

    .toggle {
      display: none;
      font-size: 1.5rem;
      padding: 1rem 1rem;
    }

    .user {
      display: none;
      font-size: 1.5rem;
      padding: 1rem 1rem;
    }

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      height: 11vh;
      .header_right {
        display: ${(props) => (props.userToggleOpen ? "flex" : "none")};
        flex-direction: column;
        width: 100%;
        background-color: #0e0e0d;
      }

      .header_menulist {
        display: ${(props) => (props.isToggleOpen ? "flex" : "none")};
        flex-direction: column;
        width: 100%;
        background-color: #0e0e0d;
      }

      .header_menulist li,
      .header_right li {
        margin: 1rem 0;
        padding: 0;
      }

      .toggle {
        display: block;
      }

      .user {
        display: block;
      }
    }
  `;

  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [userToggleOpen, setUserToggleOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  let loginInfo = localStorage.getItem("jwt");

  useEffect(() => {
    if (loginInfo) {
      setIsLogin(true);
    }
    if (!loginInfo) {
      setIsLogin(false);
    }
  }, []);
  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLogin(false);
  };

  if (isLogin === false) {
    return (
      <Header isToggleOpen={isToggleOpen} userToggleOpen={userToggleOpen}>
        <div
          className="toggle"
          onClick={() => {
            setIsToggleOpen(!isToggleOpen);
            if (userToggleOpen) {
              setUserToggleOpen(false);
            }
          }}
        >
          <FontAwesomeIcon icon={!isToggleOpen ? faBars : faTimes} />
        </div>

        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="loveloveshot_logo.png" id="main_logo" />
          </Link>
        </div>

        {/* User 버튼 */}
        <div
          className="user"
          onClick={() => {
            setUserToggleOpen(!userToggleOpen);
            if (isToggleOpen) {
              setIsToggleOpen(false);
            }
          }}
        >
          <FontAwesomeIcon icon={!userToggleOpen ? faUser : faTimes} />
        </div>

        {/* 메뉴 리스트 */}
        <ul className="header_menulist">
          <li>
            <Link to="/">홈페이지</Link>
          </li>
          <li>
            <Link to="/modeSelect">사진 생성</Link>
          </li>
        </ul>

        {/* User 메뉴 리스트 */}
        <ul className="header_right">
          <li>
            <button type="button" onClick={() => setEdit(!edit)}>
              Login
            </button>
            <Link to="http://192.168.0.159:8080/oauth2/authorization/naver?redirect_uri=http://localhost:3000/oauth2/redirect">
              네이버
            </Link>
            <Link to="http://192.168.0.159:8080/oauth2/authorization/kakao?redirect_uri=http://192.168.0.159:3000/oauth2/redirect">
              카카오
            </Link>
          </li>
        </ul>
      </Header>
    );
  }

  return (
    <Header isToggleOpen={isToggleOpen} userToggleOpen={userToggleOpen}>
      <div
        className="toggle"
        onClick={() => {
          setIsToggleOpen(!isToggleOpen);
          if (userToggleOpen) {
            setUserToggleOpen(false);
          }
        }}
      >
        <FontAwesomeIcon icon={!isToggleOpen ? faBars : faTimes} />
      </div>

      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="loveloveshot_logo.png" id="main_logo" />
        </Link>
      </div>

      {/* User 버튼 */}
      <div
        className="user"
        onClick={() => {
          setUserToggleOpen(!userToggleOpen);
          if (isToggleOpen) {
            setIsToggleOpen(false);
          }
        }}
      >
        <FontAwesomeIcon icon={!userToggleOpen ? faUser : faTimes} />
      </div>

      {/* 메뉴 리스트 */}
      <ul className="header_menulist">
        <li>
          <Link to="/">홈페이지</Link>
        </li>
        <li>
          <Link to="/modeSelect">사진 생성</Link>
        </li>
      </ul>

      {/* User 메뉴 리스트 */}
      <ul className="header_right">
        <li>
          <button type="button" onClick={handleLogOut}>
            LogOut
          </button>
        </li>
      </ul>
    </Header>
  );
};
export default Header;
