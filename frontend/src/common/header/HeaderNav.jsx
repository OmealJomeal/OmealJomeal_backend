import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const HeaderNav = (props) => {
  let navigate = useNavigate();
  const [logined, setLogined] = useState("");

  const onLogOut = () => {
    axios
      .get("/api/logout")
      .then((response) => {
        alert("로그아웃 되셨습니다.");
        setLogined("");
      })
      .catch((error) => {});
  };

  useEffect(() => {
    // axios
    //   .get("/api/loginSession")
    //   .then((response) => {
    //     console.log("로그인 세션", response);
    //     setLogined(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setLogined(props.logined);
  }, [props.logined]);

  const onClickMypage = () => {
    if (props.logined === "") {
      alert("로그인이 필요한 작업입니다.");
      navigate("/signin");
    } else {
      navigate("/mypage");
    }
  };

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
        <Text onClick={onClickMypage}>마이페이지</Text>
      </div>
    </>
  );
};

export default HeaderNav;
