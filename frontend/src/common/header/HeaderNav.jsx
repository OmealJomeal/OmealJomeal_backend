import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Text = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: black;
  text-decoration-line: none;
  &:hover {
    color: ${(props) => props.theme.maincolor};
    font-weight: bolder;
  }
`;

const Middle = styled.div`
  width: 1.5px;
  height: 14px;
  background-color: #d9d9d9;
  display: inline-block;
  margin: 0 8px;
`;

const Login = styled.span``;

const Logout = styled.span``;

const HeaderNav = () => {
  const [logined, setLogined] = useState(null);

  const onLogOut = () => {
    axios
      .get("http://localhost:8080/api/logout")
      .then((response) => {
        console.log("로그인 세션", response);
        alert("로그아웃 되셨습니다.");
        setLogined("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/loginSession")
      .then((response) => {
        console.log("로그인 세션", response);
        setLogined(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <div style={{ position: "absolute", top: "5px", right: "2px" }}>
        <Text as="a" href="/signup">
          회원가입
        </Text>
        <Middle></Middle>
        <Text as="a" href="/signin">
          {logined === "" ? (
            <Login>로그인 </Login>
          ) : (
            <Logout onClick={onLogOut}>로그아웃</Logout>
          )}
        </Text>
        <Middle></Middle>
        <Text as="a" href="/mypage">
          마이페이지
        </Text>
      </div>
    </>
  );
};

export default HeaderNav;
