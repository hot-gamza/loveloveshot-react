import React from "react";
import { useNavigate } from "react-router-dom";
import "./forward.css";

export const Forward = () => {
  let navigate = useNavigate();

  return (
    <button
      className="forward"
      onClick={() => {
        navigate(-1);
      }}
    ></button>
  );
};
