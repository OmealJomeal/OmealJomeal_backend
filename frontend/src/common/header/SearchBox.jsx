import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const Searchbox = styled.input`
  width: 380px;
  padding: 0px 10px;
  height: 48px;
  border-color: ${(props) => props.theme.maincolor};
  border-radius: 6px;
  border-width: 1px;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

const SearchBox = () => {
  return (
    <>
      <div
        style={{
          margin: "auto 400px auto 160px",
          width: "400px",
          height: "48px",
          display: "flex",
          position: "relative",
        }}
      >
        <Searchbox placeholder="검색어를 입력해주세요"></Searchbox>
        <button
          style={{
            width: "38px",
            height: "38px",
            lineHeight: "48px",
            position: "absolute",
            top: "15%",
            right: "10px",
            border: "0",
            outline: "0",
            backgroundColor: "white",
            cursor: "pointer",
          }}
        >
          <BiSearch
            style={{
              width: "27px",
              height: "27px",
              color: "#5F0080",
              borderWidth: "2px",
              position: "relative",
              bottom: "-3px",
            }}
          />
        </button>
      </div>
    </>
  );
};

export default SearchBox;
