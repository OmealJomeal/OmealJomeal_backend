import React from "react";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";

const PopupPostCode = (props) => {
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    props.setUserAddress(fullAddress);
    props.onClose();
  };

  const postCodeStyle = {
    display: "block",
    width: "400px",
    height: "500px",
    border: "solid #5F0080",
    position: "relative",
    zIndex: "10",
  };

  const ModalButton = styled.button`
    position: absolute;
    background-color: #5f0080;
    border: none;
    color: white;
    width: 405px;
    height: 25px;
    line-heigth: 25px;
    left: 0px;
  `;

  return (
    <>
      <div style={{ position: "fixed", top: "10%", left: "37%" }}>
        <DaumPostcode
          style={postCodeStyle}
          onComplete={handlePostCode}
        ></DaumPostcode>
        <ModalButton
          onClick={() => {
            props.onClose();
          }}
        >
          닫기
        </ModalButton>
      </div>
    </>
  );
};

export default PopupPostCode;
