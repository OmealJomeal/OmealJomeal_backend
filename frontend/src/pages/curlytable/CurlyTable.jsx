import React from "react";
import Carousel, { CarouselItem } from "./carousel";
import Feed from "./Feed";
import styled from "styled-components";

const LoadFeedButton = styled.button`
  width: 240px;
  height: 55px;
  flex-grow: 0;
  margin: 20px 410px;
  padding: 17px 91px;
  border-radius: 3px;
  background-color: #885ea7;
  color: white;
  font-weight: bold;
  border: none;
`;

const CurlyTable = () => {
  const images = [
    "https://picsum.photos/250/320?random=1",
    "https://picsum.photos/250/320?random=2",
    "https://picsum.photos/250/320?random=3",
    "https://picsum.photos/250/320?random=4",
  ];
  return (
    <>
      <div style={{ width: "1050px", margin: "0px auto" }}>
        <div
          style={{
            position: "fixed",
            zIndex: "5",
            bottom: "30px",
            right: "100px",
          }}
        >
          <a href="./createfeed">
            <img src={process.env.PUBLIC_URL + "./img/createfeed.png"}></img>
          </a>
        </div>
        <div
          style={{
            textAlign: "center",
            height: "100px",
            lineHeight: "100px",
            fontSize: "28px",
            fontWeight: "bold",
            marginTop: "40px",
            color: "#333",
          }}
        >
          best 오늘의 meal
        </div>

        <Carousel style={{ display: "flex", flexWrap: "nowrap" }}>
          {images.map((src, index) => (
            <CarouselItem
              key={`CarouselItem${index}`}
              order={index + 1}
              src={src}
            />
          ))}
        </Carousel>
        <div
          classame="carousel2"
          style={{
            textAlign: "center",
            height: "100px",
            lineHeight: "100px",
            fontSize: "28px",
            fontWeight: "bold",
            marginTop: "40px",
            color: "#333",
          }}
        >
          실시간 컬리 피드
        </div>
        <Feed></Feed>
        <LoadFeedButton>더보기</LoadFeedButton>
      </div>
    </>
  );
};

export default CurlyTable;
