import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousel, { CarouselItem } from "./carousel";
import styled from "styled-components";
import { BsHandThumbsUp } from "react-icons/bs";

const FeedDetail = () => {
  const { id } = useParams();
  const [feed, setFeed] = useState(null);

  const onThumbClick = () => {
    window.confirm("좋아요를 누릅니다");
  };

  useEffect(() => {
    axios
      .get(`/api/feedDetail/${id}`)
      .then((response) => {
        console.log(response.data);
        setFeed(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(feed);

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
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "430px",
                height: "515px",
              }}
            >
              <img
                style={{
                  width: "430px",
                  height: "515px",
                }}
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
                  {feed && feed.feedDetail.feed_cooklevel === "2"
                    ? "상"
                    : feed.feedDetail.feed_cooklevel === "1"
                    ? "중"
                    : feed.feedDetail.feed_cooklevel === "0"
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
                />
              ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default FeedDetail;
