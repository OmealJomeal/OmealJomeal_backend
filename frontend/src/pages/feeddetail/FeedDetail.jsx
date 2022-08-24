import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousel, { CarouselItem } from "./carousel";
import styled from "styled-components";
import { BsHandThumbsUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const FeedDetail = (props) => {
  const { id } = useParams();
  const [feed, setFeed] = useState(null);
  const [likes, setLikes] = useState(null);

  let navigate = useNavigate();

  const onThumbClick = () => {
    if (props.logined === "") {
      alert("로그인이 필요한 작업입니다.");
      navigate("/signin");
    } else {
      axios
        .get(`/api/feedLikes/${id}`)
        .then((response) => {
          if (response.data === "") {
            const data = {
              feed_id: id,
            };
            axios
              .post("/api/feedLikes", JSON.stringify(data), {
                headers: {
                  "Content-Type": "application/json",
                  data,
                },
              })
              .then((response) => {})
              .catch((error) => {});
            setLikes(likes + 1);
          } else {
            alert("이미 좋아요를 누른 게시글입니다");
          }
        })
        .catch((error) => {});
    }
  };

  useEffect(() => {
    axios
      .get(`/api/feedDetail/${id}`)
      .then((response) => {
        setFeed(response.data);
        setLikes(response.data.feedDetail.countLikes);
      })
      .catch((error) => {});
  }, []);

  const onClickDelete = () => {
    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      axios
        .delete(`/api/feed/${id}`)
        .then(function (response) {
          window.location.replace("/curlytable");
        })
        .catch(function (error) {});
    }
  };

  return (
    <>
      {feed && (
        <div
          style={{
            width: "1050px",
            margin: "80px auto 0px auto",
            whiteSpace: "pre-wrap",
          }}
        >
          {props.logined.user_id === feed.feedDetail.user_id ? (
            <div
              style={{
                backgroundColor: "#C8A3E3",
                width: "70px",
                height: "25px",
                textAlign: "center",
                color: "white",
                position: "relative",
                left: "980px",
              }}
              onClick={onClickDelete}
            >
              삭제
            </div>
          ) : null}

          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "430px",
                height: "515px",
              }}
            >
              <img
                style={{ width: "380px" }}
                alt={id}
                src={`/upload/feed/${id}_FeedImg.png`}
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
                  {feed && feed.feedDetail.feed_title}
                </div>
                <div
                  style={{
                    color: "#999999",
                    fontSize: "15px",
                    marginBottom: "5px",
                  }}
                >
                  조리 시간 : &nbsp; {feed && feed.feedDetail.feed_cooktime}
                </div>
                <div
                  style={{
                    color: "#999999",
                    fontSize: "15px",
                    marginBottom: "20px",
                  }}
                >
                  조리 난이도 :&nbsp;{" "}
                  {feed && feed.feedDetail.feed_cooklevel === 2
                    ? "상"
                    : feed.feedDetail.feed_cooklevel === 1
                    ? "중"
                    : feed.feedDetail.feed_cooklevel === 0
                    ? "하"
                    : null}
                </div>
                <div
                  style={{
                    color: "#333",
                    fontSize: "17px",
                    marginBottom: "50px",
                    lineHeight: "25px",
                  }}
                >
                  {feed && feed.feedDetail.feed_description}
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
                    {feed && feed.feedDetail.feed_recipe}
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
                      {likes}
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
            {feed &&
              feed.feedDetailProductList.map((product, index) => (
                <CarouselItem
                  key={`CarouselItem${index}`}
                  order={index + 1}
                  amount={product.product_amount}
                  category={product.product_category}
                  id={product.product_id}
                  name={product.product_name}
                  price={product.product_price}
                  logined={props.logined}
                />
              ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default FeedDetail;
