import React from "react";
import Carousel, { CarouselItem } from "./carousel";
import Feed from "./Feed";

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
        <div>
          <img src={process.env.PUBLIC_URL + "./img/createfeed.png"}></img>
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
          민경님을 위한 맞춤 추천
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
        <Feed></Feed>
      </div>
    </>
  );
};

export default CurlyTable;
