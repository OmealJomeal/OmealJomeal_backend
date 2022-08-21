import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel, { CarouselItem } from "./carousel";
import axios from "axios";
import MainCarousel, { MainCarouselItem } from "./maincarousel";
import ColumnCarousel, { ColumnCarouselItem } from "./columncarousel";

const Main = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/loginSession")
      .then((response) => {
        console.log("로그인 세션", response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  let navigate = useNavigate();
  const onClick = (e) => {
    navigate(`/productdetail/${e.target.id}`);
  };

  const mainimages = [
    "https://picsum.photos/1050/370?random=1",
    "https://picsum.photos/1050/370?random=2",
    "https://picsum.photos/1050/370?random=3",
    "https://picsum.photos/1050/370?random=4",
    "https://picsum.photos/1050/370?random=5",
    "https://picsum.photos/1050/370?random=6",
    "https://picsum.photos/1050/370?random=7",
    "https://picsum.photos/1050/370?random=8",
  ];

  const images = [
    "https://picsum.photos/250/320?random=1",
    "https://picsum.photos/250/320?random=2",
    "https://picsum.photos/250/320?random=3",
    "https://picsum.photos/250/320?random=4",
    "https://picsum.photos/250/320?random=5",
    "https://picsum.photos/250/320?random=6",
    "https://picsum.photos/250/320?random=7",
    "https://picsum.photos/250/320?random=8",
  ];

  const columnimages = [
    "https://picsum.photos/250/320?random=1",
    "https://picsum.photos/250/320?random=2",
    "https://picsum.photos/250/320?random=3",
    "https://picsum.photos/250/320?random=4",
  ];

  return (
    <>
      <MainCarousel style={{ display: "flex", flexWrap: "nowrap" }}>
        {mainimages.map((src, index) => (
          <MainCarouselItem
            key={`CarouselItem${index}`}
            order={index + 1}
            src={src}
          />
        ))}
      </MainCarousel>
      <div
        style={{
          width: "1050px",
          margin: "0px auto",
        }}
      >
        <div
          classame="carousel1"
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
          오늘은 조금 다른 메뉴 어때요?
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
          칼럼 글
        </div>
        <ColumnCarousel style={{ display: "flex", flexWrap: "nowrap" }}>
          {columnimages.map((src, index) => (
            <ColumnCarouselItem
              key={`CarouselItem${index}`}
              order={index + 1}
              src={src}
            />
          ))}
        </ColumnCarousel>
      </div>
      <div style={{ width: "1050px", height: "250px", margin: "0px auto" }}>
        <div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "600px",
                height: "150px",
                margin: "70px 0px",
                lineHeight: "25px",
                top: "10px",
                marginBottom: "150px",
                position: "relative",
                top: "50px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                요리를 어떻게 디자인해야 하나?
              </div>
              <div style={{ fontSize: "14px" }}>
                플레이팅을 할 때는 식재료와 접시를 선택하고 테이블에 요리를
                놓았을 때의 밸런스와 먹으면서 나누는 대화까지 고려해야 한다.
                먹는 사람이 맛있게 먹고 행복해지는 요리를 만들기 위해 모든
                요소를 종합적으로 고려하는 것이, 요리를 만드는 사람의 목적이자
                임무이기 때문이다.
              </div>
              <div style={{ fontSize: "14px", color: "#885EA7" }}>
                by 플레이팅의 기술 |
                <span style={{ fontWeight: "bold" }}>Machiyama Chiho</span>
              </div>
            </div>
            <img
              alt="column"
              src={process.env.PUBLIC_URL + "./img/column1.png"}
              style={{ position: "absolute", right: "0px", top: "0px" }}
            ></img>
          </div>
        </div>
        <div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "600px",
                height: "150px",
                margin: "70px 0px",
                lineHeight: "25px",
                top: "10px",
                marginBottom: "150px",
                position: "relative",
                top: "50px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                나만의 디저트 꿈꾸기
              </div>
              <div style={{ fontSize: "14px" }}>
                디저트는 어떻게 디자인해야 할까? 재료의 새로운 조합과 맛의
                밸런스는 어떻게 만들어가야 하는 걸까? 기존의 레시피 따라하기에서
                벗어나 나만의 디저트 만들기를 시작하고 싶은 당신에게 ‘바닐라
                클라우드’ 박예나 셰프의 디저트 디자인 비밀 노트를 공개한다.
              </div>
              <div style={{ fontSize: "14px", color: "#885EA7" }}>
                by 디저트 디자인 |
                <span style={{ fontWeight: "bold" }}>박예나</span>
              </div>
            </div>
            <img
              alt="column"
              src={process.env.PUBLIC_URL + "./img/column2.png"}
              style={{ position: "absolute", right: "0px", top: "0px" }}
            ></img>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              width: "600px",
              height: "150px",
              margin: "70px 0px",
              lineHeight: "25px",
              top: "10px",
              marginBottom: "150px",
              position: "relative",
              top: "50px",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "10px",
              }}
            >
              새로운 한식 디저트 클래스를 만나보세요
            </div>
            <div style={{ fontSize: "14px" }}>
              예쁘고 건강하고 맛있는 우리 떡, 한과, 퓨전 디저트! 촉촉하고
              부드러운 설기, 쫄깃하고 고소한 절편, 색다른 맛에 예쁜 모양까지
              갖춘 다양한 찹쌀떡과 색색의 고운 한과, 케이크보다 더 예쁜 새로운
              퓨전떡 디저트까지. 인기 디저트 공방 ‘널리케이크’의 대표 메뉴와
              알찬 노하우가 담긴 화제의 한식 디저트 클래스를 책으로 엮었다.
            </div>
            <div style={{ fontSize: "14px", color: "#885EA7" }}>
              by 널리케이크의 한식 디저트 클래스 |
              <span style={{ fontWeight: "bold" }}>김주현</span>
            </div>
          </div>
          <img
            alt="column"
            src={process.env.PUBLIC_URL + "./img/column3.png"}
            style={{ position: "absolute", right: "0px", top: "0px" }}
          ></img>
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              width: "600px",
              height: "150px",
              margin: "70px 0px",
              lineHeight: "25px",
              top: "10px",
              marginBottom: "150px",
              position: "relative",
              top: "50px",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "10px",
              }}
            >
              17만 팔로워 인스타그래머 솜솜이의 홈카페를 우리집으로
            </div>
            <div style={{ fontSize: "14px" }}>
              오픈, 홈카페는 인스타그래머 솜솜이(박성미)의 홈카페 시리즈
              신작이다. 아이스 음료 레시피를 소개했던 하루하루, 홈카페에 이어 두
              번째 책에서는 카페 스타일 디저트와 식사 메뉴를 선보인다. 저자는
              전작 출시 이후 그녀의 홈카페를 리뉴얼했다. 음료에 어울리는 빵을
              반죽하고 케이크를 구웠다.
            </div>
            <div style={{ fontSize: "14px", color: "#885EA7" }}>
              by 오픈 홈카페 |
              <span style={{ fontWeight: "bold" }}>솜솜이 (박성미)</span>
            </div>
          </div>
          <img
            alt="column"
            src={process.env.PUBLIC_URL + "./img/column4.png"}
            style={{ position: "absolute", right: "0px", top: "0px" }}
          ></img>
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              width: "600px",
              height: "150px",
              margin: "70px 0px",
              lineHeight: "25px",
              position: "relative",
              top: "50px",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "10px",
              }}
            >
              즐겁게 상상하며 만든 스콘 레시피 북!
            </div>
            <div style={{ fontSize: "14px" }}>
              스콘이 가진 정직하고 소박한 매력을 듬뿍 담은 책. 이 책은 겉은
              바삭하고 속은 진정으로 촉촉한 식감을 내는 각기 다른 15개 스타일의
              레시피를 소개하고 있다. 특히 다른 재료와도 쉽게 응용하여 만들 수
              있도록 구성하여 서로 다른 스타일의 스콘이 어디에서 어떻게 쓰일지
              상상하며 만들어 볼 수 있다.
            </div>
            <div style={{ fontSize: "14px", color: "#885EA7" }}>
              by 스콘 |
              <span style={{ fontWeight: "bold" }}>해피해피 케이크</span>
            </div>
          </div>
          <img
            alt="column"
            src={process.env.PUBLIC_URL + "./img/column5.png"}
            style={{ position: "absolute", right: "0px", top: "0px" }}
          ></img>
        </div>
      </div>

      {/* <h2 onClick={onClick} id={1}>
        Product
      </h2> */}
    </>
  );
};

export default Main;
