import React from "react";
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

const HeaderNav = () => {
  return (
    <>
      <div style={{ position: "absolute", top: "5px", right: "2px" }}>
        <Text as="a" href="/signup">
          회원가입
        </Text>
        <Middle></Middle>
        <Text as="a" href="/signin" style={{}}>
          로그인
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
