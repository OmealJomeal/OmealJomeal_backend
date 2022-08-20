import React from "react";
import Promition from "./Promition";
import SearchBox from "./SearchBox";
import HeaderNav from "./HeaderNav";
import HeaderIcons from "./HeaderIcons";

const Header = () => {
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
