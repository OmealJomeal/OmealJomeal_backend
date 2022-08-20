import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Main = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/loginSession")
      .then((response) => {
        console.log("로그인 세션", response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  let navigate = useNavigate();
  const onClick = (e) => {
    navigate(`/productdetail/:${e.target.id}`);
  };
  return (
    <div>
      <h2 onClick={onClick} id={1}>
        Product
      </h2>
    </div>
  );
};

export default Main;
