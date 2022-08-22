import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const InputBox = styled.input`
  width: 95px;
  height: 14px;
  flex-grow: 0;
  padding: 17px 229px 18px 16px;
  border-radius: 4px;
  border: solid 0.7px #ddd;
  margin: 8px 0px;
  &:focus {
    background-color: #e8f0fe;
    outline: none;
  }
`;

const SignInUpBox = styled.button`
  width: 340px;
  height: 54px;
  flex-grow: 0;
  padding: 16px 141px;
  border-radius: 3px;
  border: solid 1px ${(props) => props.theme.maincolor};
  background-color: white;
  color: ${(props) => props.theme.maincolor};
  margin: 7px 0px;
  font-weight: bold;
  &:hover {
    background-color: ${(props) => props.theme.maincolor};
    outline: none;
    color: white;
  }
`;

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  let navigate = useNavigate();

  const axios_post = () => {
    const data = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:8080/api/login", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          data,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data !== "") {
          navigate("/");
        } else {
          alert("존재하지 않는 아이디나 비밀번호입니다.");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        alert("");
      });
  };

  return (
    <>
      <div
        style={{
          width: "340px",
          height: "360px",
          margin: "auto",
          marginTop: "70px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            width: "340px",
            marginBottom: "25px",
          }}
        >
          로그인
        </div>
        <InputBox required onChange={onChangeEmail} value={email}></InputBox>
        <InputBox
          required
          onChange={onChangePassword}
          value={password}
        ></InputBox>
        <div
          style={{
            textAlign: "right",
            margin: "20px 0px",
            fontSize: "small",
          }}
        >
          <span>아이디 찾기</span>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <span>비밀번호 찾기</span>
        </div>
        <SignInUpBox onClick={axios_post}>로그인</SignInUpBox>
        <a href="/signup">
          <Link to={"/signup"}>
            <SignInUpBox>회원가입</SignInUpBox>
          </Link>
        </a>
      </div>
    </>
  );
};

export default SignIn;
