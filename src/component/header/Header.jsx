import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const Header = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: black;
    #main_logo {
      display: flex;
      justify-content: center;
      width: 40px;
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

      .header_right {
        display: ${(props) => (props.userToggleOpen ? "flex" : "none")};
        flex-direction: column;
        width: 100%;
        background-color: black;
      }

      .header_menulist {
        display: ${(props) => (props.isToggleOpen ? "flex" : "none")};
        flex-direction: column;
        width: 100%;
        background-color: black;
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

  return (
    <Header isToggleOpen={isToggleOpen} userToggleOpen={userToggleOpen}>
      <div
        className="toggle"
        onClick={() => {
          setIsToggleOpen(!isToggleOpen);
        }}
      >
        <FontAwesomeIcon icon={!isToggleOpen ? faBars : faTimes} />
      </div>

      {/* Logo */}
      <div className="logo">
        <img src="loveloveshot_logo.png" id="main_logo" />
      </div>

      {/* User 버튼 */}
      <div
        className="user"
        onClick={() => {
          setUserToggleOpen(!userToggleOpen);
        }}
      >
        <FontAwesomeIcon icon={!userToggleOpen ? faUser : faTimes} />
      </div>

      {/* 메뉴 리스트 */}
      <ul className="header_menulist">
        <li>홈페이지</li>
        <li>사진 생성</li>
      </ul>

      {/* User 메뉴 리스트 */}
      <ul className="header_right">
        <li>Login</li>
      </ul>
    </Header>
  );
};
export default Header;
