// import React from "react";
// import { useNavigate } from "react-router-dom";

const OAuth2LogOutRedirect = () => {
  //   const location = useNavigate();
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    localStorage.removeItem("jwt");
    // location("/");
    window.location.replace("/");
  }
};
export default OAuth2LogOutRedirect;
