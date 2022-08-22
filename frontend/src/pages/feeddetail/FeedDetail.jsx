import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousel, { CarouselItem } from "./carousel";
import styled from "styled-components";
import { BsHandThumbsUp } from "react-icons/bs";

const FeedDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const images = [
    "https://picsum.photos/175/175?random=1",
    "https://picsum.photos/175/175?random=2",
    "https://picsum.photos/175/175?random=3",
    "https://picsum.photos/175/175?random=4",
    "https://picsum.photos/175/175?random=5",
    "https://picsum.photos/175/175?random=6",
    "https://picsum.photos/175/175?random=7",
    "https://picsum.photos/175/175?random=8",
  ];

  const onThumbClick = () => {
    window.confirm("좋아요를 누릅니다");
  };

  useEffect(() => {
    axios
      .get(`/api/productdetail/${id}`)
      .then((response) => {
        console.log(response);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <div
        style={{
          width: "1050px",
          margin: "80px auto 0px auto",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <img
              style={{
                width: "430px",
                height: "515px",
              }}
              alt="product_image"
              src={process.env.PUBLIC_URL + `/img/${id}_noneClear.png`}
            />
          </div>
          <div
            style={{
              width: "620px",
              marginBottom: "200px",
            }}
          >
            <div
              style={{
                width: "570px",
                margin: "0px 0px 0px 50px",
                position: "relative",
              }}
            >
              <div
                style={{
                  color: "#333",
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                마켓컬리 마라탕
              </div>
              <div
                style={{
                  color: "#999999",
                  fontSize: "15px",
                  marginBottom: "5px",
                }}
              >
                조리 시간 :
              </div>
              <div
                style={{
                  color: "#999999",
                  fontSize: "15px",
                  marginBottom: "20px",
                }}
              >
                조리 난이도 :
              </div>
              <div
                style={{
                  color: "#333",
                  fontSize: "17px",
                  marginBottom: "50px",
                  lineHeight: "25px",
                }}
              >
                오늘은 아이들을 위해 마라탕을 해 주었어요.
                <br />
                아이들이 맛있게 먹는 모습을 보니 절로 미소가 나오더라고요.
                <br /> 마켓컬리의 마라탕 탕탕! 추천합니다!
              </div>
              <div
                style={{
                  color: "#333",
                  fontSize: "17px",
                  marginBottom: "10px",
                  lineHeight: "25px",
                }}
              >
                <div
                  style={{
                    color: "#555",
                    fontSize: "17px",
                    marginBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  레시피
                </div>
                <div style={{ color: "#666", marginBottom: "20px" }}>
                  1. 마라탕 육수를 붓는다 <br />
                  2. 청경채를 넣는다 <br />
                  3. 푸주를 넣는다 <br />
                  완성!!
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ width: "500px" }}></div>
                  <BsHandThumbsUp
                    onClick={onThumbClick}
                    style={{
                      width: "30px",
                      height: "30px",
                      display: "block",
                      cursor: "pointer",
                    }}
                  ></BsHandThumbsUp>
                  <div
                    style={{
                      position: "relative",
                      left: "10px",
                      lineHeight: "30px",
                    }}
                  >
                    10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginLeft: "20px",
            marginBottom: "20px",
          }}
        >
          들어간 재료
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
      </div>
    </>
  );
};

export default FeedDetail;
