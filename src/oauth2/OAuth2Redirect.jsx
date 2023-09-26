import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const OAuth2Redirect = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  useEffect(() => {
    if (token) {
      localStorage.setItem("jwt", token);
    }

    window.location.replace("/");
  }, [token]);

  return <></>;
};

export default OAuth2Redirect;
