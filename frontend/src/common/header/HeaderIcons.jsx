import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderIcons = (props) => {
  let navigate = useNavigate();

  const onClickCart = () => {
    if (props.logined === "") {
      alert("로그인이 필요한 작업입니다.");
        navigate("signin");
    } else {
      navigate("cart");
    }
  };

  return (
    <>
      <div
        style={{
          width: "147px",
          height: "36px",
          position: "absolute",
          right: "0px",
          bottom: "25%",
        }}
      >
        <img
          style={{ margin: "0 5px" }}
          alt="searchicon"
          src={process.env.PUBLIC_URL + "./img/headermap.png"}
        />
        <img
          style={{ margin: "0 5px" }}
          alt="searchicon"
          src={process.env.PUBLIC_URL + "./img/headerheart.png"}
        />
        <img
          style={{ margin: "0 5px" }}
          alt="searchicon"
          src={process.env.PUBLIC_URL + "./img/headercart.png"}
          onClick={onClickCart}
        />
      </div>
    </>
  );
};

export default HeaderIcons;
