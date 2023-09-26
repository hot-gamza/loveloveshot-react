import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode> // 콘솔 두번 찍히게 함 왜지?
    <App />
  // </React.StrictMode>
);
