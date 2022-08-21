import React from "react";
import styled from "styled-components";

const Searchbox = styled.input`
  width: 400px;
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
          margin: "auto",
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
          <img
            alt="searchicon"
            src={process.env.PUBLIC_URL + "./img/searchicon.png"}
          />
        </button>
      </div>
    </>
  );
};

export default SearchBox;
