import React, { useEffect, useState } from "react";
import Carousel, { CarouselItem } from "./carousel";
import Feed from "./Feed";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const CurlyTable = (props) => {
  const images = [
    "https://picsum.photos/250/320?random=1",
    "https://picsum.photos/250/320?random=2",
    "https://picsum.photos/250/320?random=3",
    "https://picsum.photos/250/320?random=4",
  ];

  const [feedList, setFeedList] = useState(null);
  const [count, setCount] = useState(5);

  const onClickLoad = () => {
    setCount(count + 5);
  };

  useEffect(() => {
    axios
      .get("/api/feed")
      .then((response) => {
        console.log(response);
        setFeedList(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  let navigate = useNavigate();

  const onClickWrite = () => {
    if (props.logined === "") {
      alert("로그인이 필요한 작업입니다.");
      navigate("/signin");
    } else {
      navigate("/createfeed");
    }
  };

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
          <img
            onClick={onClickWrite}
            src={process.env.PUBLIC_URL + "./img/createfeed.png"}
          ></img>
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
            marginBottom: "40px",
            color: "#333",
          }}
        >
          실시간 컬리 피드
        </div>
        {feedList &&
          feedList.slice(0, count).map((feed, index) => (
            <a
              href={`./feeddetail/:${feed.feed_id}`}
              style={{ textDecoration: "none", color: "#333" }}
            >
              <Feed
                key={index}
                title={feed.feed_title}
                description={feed.feed_description}
                name={feed.user_name}
                time={feed.feed_time}
                id={feed.feed_id}
              />
            </a>
          ))}
        {count - 5 < (feedList && feedList.length) &&
        (feedList && feedList.length) < count ? null : (
          <LoadFeedButton onClick={onClickLoad}>더보기</LoadFeedButton>
        )}
      </div>
    </>
  );
};

export default CurlyTable;
