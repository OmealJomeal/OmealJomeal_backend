import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

const HeaderIcons = (props) => {
  let navigate = useNavigate();

  const onClickCart = () => {
    if (props.logined === "") {
      alert("로그인이 필요한 작업입니다.");
      navigate("/signin");
    } else {
      navigate("/cart");
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
        <FiMapPin
          style={{
            margin: "0 9px",
            width: "25px",
            height: "25px",
            color: "#777",
          }}
        />
        <AiOutlineHeart
          style={{
            margin: "0 9px",
            width: "30px",
            height: "30px",
            color: "#777",
            position: "relative",
            bottom: "-3px",
          }}
        />
        <BsCart2
          style={{
            margin: "0 9px",
            width: "30px",
            height: "30px",
            color: "#777",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={onClickCart}
        />
      </div>
    </>
  );
};

export default HeaderIcons;
