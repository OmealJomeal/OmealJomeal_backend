import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";

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
  height: 150px;
  border: solid #ddd;
  border-width: 1px;
  background-color: white;
  position: absolute;
  z-index: 10;
  display: block;
`;

const CategoryBarItem1 = styled(CategoryBar)`
  height: 50px;
  border: none;
  text-align: center;
  line-height: 50px;
  top: 0px;
  &:hover {
    color: ${(props) => props.theme.maincolor};
    font-weight: bolder;
    background-color: #f7f7f7;
  }
  cursor: pointer;
`;

const CategoryBarItem2 = styled(CategoryBar)`
  height: 50px;
  border: none;
  text-align: center;
  line-height: 50px;
  top: 50px;
  &:hover {
    color: ${(props) => props.theme.maincolor};
    font-weight: bolder;
    background-color: #f7f7f7;
  }
  cursor: pointer;
`;

const CategoryBarItem3 = styled(CategoryBar)`
  height: 50px;
  border: none;
  text-align: center;
  line-height: 50px;
  top: 100px;
  &:hover {
    color: ${(props) => props.theme.maincolor};
    font-weight: bolder;
    background-color: #f7f7f7;
  }
  cursor: pointer;
`;

const NavBar = (props) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  let navigate = useNavigate();

  const onClickPlating = () => {
    if (props.logined === "") {
      alert("로그인이 필요한 작업입니다.");
      navigate("/signin");
    } else {
      navigate("/kurlyplating");
    }
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ width: "1050px", margin: "0 auto", display: "flex" }}>
          <NavItem
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <VscThreeBars
              style={{ position: "relative", top: "2px" }}
            ></VscThreeBars>
            &nbsp; 카테고리
          </NavItem>
          <NavItem as="a" href="/curlytable">
            컬리의 식탁
          </NavItem>
          <NavItem onClick={onClickPlating}>컬리 플레이팅</NavItem>
        </div>
        <ShadowBox />
        <div style={{ width: "1050px", margin: "0 auto" }}>
          {isHover ? (
            <CategoryBar
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CategoryBarItem1>라이프 생활</CategoryBarItem1>
              <CategoryBarItem2>관심 분야</CategoryBarItem2>
              <CategoryBarItem3>음식 취향</CategoryBarItem3>
            </CategoryBar>
          ) : null}
        </div>
      </ThemeProvider>
    </>
  );
};

export default NavBar;
