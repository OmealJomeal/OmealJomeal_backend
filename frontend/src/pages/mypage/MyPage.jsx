import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CheckBox from "../../common/checkbox/CheckBox";
import axios from "axios";

const Line = styled.div`
  width: 840px;
  height: 1.5px;
  background-color: #333;
  margin-bottom: 50px;
`;

const UnitBox = styled.div`
  width: 700px;
  height: 80px;
  margin: 0px auto;
  display: flex;
`;

const SelectBox = styled.label`
  display: inline-block;
  width: 160px;
  margin: 0px 10px;
  height: 40px;
`;

const Indicator = styled.div`
  width: 100px;
  margin: 17px 40px 17px 0px;
  font-size: 15px;
`;

const MyPage = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user")
      .then((response) => {
        console.log("마이페이지", response);
      })
      .catch((error) => {
        console.log("마이페이지", error.response.data);
      });
  });
  const [value, setValue] = useState({
    email: "",
    password: "",
    name: "",
    phoneNumber: "",
    // lifestyle
    livealone: 0,
    child: 0,
    worker: 0,
    couple: 0,
    homemaker: 0,
    babay: 0,
    // interest
    pet: 0,
    outdoor: 0,
    health: 0,
    baking: 0,
    cooking: 0,
    babycare: 0,
    // food_favor
    sweetness: 0,
    bitter: 0,
    sour_taste: 0,
    salty: 0,
    spicy: 0,
  });

  const onToggle = (e) => {
    value &&
      setValue((prevState) => {
        console.log(prevState);
        switch (e.target.name) {
          case "livealone":
            return { ...prevState, [e.target.name]: !prevState.livealone };
          case "child":
            return { ...prevState, [e.target.name]: !prevState.child };
          case "worker":
            return { ...prevState, [e.target.name]: !prevState.worker };
          case "homemaker":
            return { ...prevState, [e.target.name]: !prevState.homemaker };
          case "baby":
            return { ...prevState, [e.target.name]: !prevState.baby };
          case "pet":
            return { ...prevState, [e.target.name]: !prevState.pet };
          case "outdoor":
            return { ...prevState, [e.target.name]: !prevState.outdoor };
          case "health":
            return { ...prevState, [e.target.name]: !prevState.health };
          case "baking":
            return { ...prevState, [e.target.name]: !prevState.baking };
          case "cooking":
            return { ...prevState, [e.target.name]: !prevState.cooking };
          case "babycare":
            return { ...prevState, [e.target.name]: !prevState.babycare };
          case "sweetness":
            return { ...prevState, [e.target.name]: !prevState.sweetness };
          case "bitter":
            return { ...prevState, [e.target.name]: !prevState.bitter };
          case "sour_taste":
            return { ...prevState, [e.target.name]: !prevState.sour_taste };
          case "salty":
            return { ...prevState, [e.target.name]: !prevState.salty };
          case "spicy":
            return { ...prevState, [e.target.name]: !prevState.spicy };
          default:
            return;
        }
      });
  };
  return (
    <>
      <div style={{ width: "840px", margin: "0 auto" }}>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            width: "840px",
            textAlign: "center",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          마이페이지
        </div>
        <Line></Line>
        <UnitBox style={{ margin: "30px auto 60px auto" }}>
          <Indicator>라이프 스타일</Indicator>
          <div
            style={{
              width: "600px",
              justifyContent: "center",
            }}
          >
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                onToggle={onToggle}
                type="checkbox"
                name="livealone"
                label="혼자 살아요"
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="livealone"
                label="아이가 있어요"
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="livealone"
                label="직장인이에요"
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="livealone"
                label="커플이에요"
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="livealone"
                label="가정주부에요"
              ></CheckBox>
            </SelectBox>
          </div>
        </UnitBox>
        <UnitBox style={{ margin: "60px auto" }}>
          <Indicator>관심 분야</Indicator>
          <div
            style={{
              width: "600px",
              justifyContent: "center",
            }}
          >
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="pet"
                label="반려 동물"
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="outdoor"
                label="야외 활동"
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="health"
                label="건강"
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="baking"
                label="제과/제빵"
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="cooking"
                label="요리"
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="babycare"
                label="아기 돌보기"
              ></CheckBox>
            </SelectBox>
          </div>
        </UnitBox>
        <UnitBox style={{ margin: "60px auto" }}>
          <Indicator>음식 취향</Indicator>
          <div
            style={{
              width: "600px",
              justifyContent: "center",
            }}
          >
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="sweetness"
                label="달달한 맛"
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="bitter"
                label="쓴 맛"
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="sour_taste"
                label="신 맛"
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="salty"
                label="짠 맛"
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="spicy"
                label="매운 맛"
              ></CheckBox>
            </SelectBox>
          </div>
        </UnitBox>
      </div>
    </>
  );
};

export default MyPage;
