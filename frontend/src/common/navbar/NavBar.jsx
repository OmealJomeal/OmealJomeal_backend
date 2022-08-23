import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";

const NavItem = styled.div`
  width: 33.3%;
  height: 45px;
  font-size: 15px;
  font-weight: 300;
  color: black;
  text-decoration-line: none;
  text-align: center;
  line-height: 50px;
  &:hover {
    color: ${(props) => props.theme.maincolor};
    font-weight: bolder;
  }
`;

const ShadowBox = styled.div`
  width: 100%;
  height: 1px;
  box-shadow: 0 8px 4px 0px #c1c1c1;
`;

const CategoryBar = styled.div`
  width: 350px;
  height: 130px;
  background-color: gray;
  z-index: 1;
  display: inline-block;
  position: absolute;
`;

const NavBar = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ width: "1050px", margin: "0 auto", display: "flex" }}>
          <NavItem
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            카테고리
          </NavItem>
          <NavItem as="a" href="/curlytable">
            컬리의 식탁
          </NavItem>
          <NavItem as="a" href="/kurlyplating">
            컬리 플레이팅
          </NavItem>
        </div>
        <ShadowBox />
        <div style={{ width: "1050px", margin: "0 auto" }}>
          {isHover ? (
            <CategoryBar
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></CategoryBar>
          ) : null}
        </div>
      </ThemeProvider>
    </>
  );
};

export default NavBar;
