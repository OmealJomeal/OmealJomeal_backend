import React from "react";
import Promition from "./Promition";
import SearchBox from "./SearchBox";
import HeaderNav from "./HeaderNav";
import HeaderIcons from "./HeaderIcons";
import axios from "axios";

const Header = () => {
  axios
    .get("http://localhost:8080/api/loginSession")
    .then((response) => {
      console.log("로그인 세션", response);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <>
      <Promition />
      <div
        style={{
          width: "1050px",
          height: "110px",
          margin: "0 auto",
          display: "flex",
          position: "relative",
        }}
      >
        <HeaderNav />
        <HeaderIcons />
        <SearchBox />
      </div>
    </>
  );
};

export default Header;
