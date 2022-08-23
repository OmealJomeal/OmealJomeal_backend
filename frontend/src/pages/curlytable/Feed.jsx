import React, { useState, useEffect } from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Feed = (props) => {
  return (
    <>
      <Link
        to={`/feeddetail/${props.id}`}
        style={{ textDecoration: "none", color: "#333" }}
      >
        <div style={{ position: "relative", borderTop: "solid #DDD" }}>
          <div
            style={{
              width: "600px",
              height: "150px",
              margin: "20px 0px 45px 0px",
              lineHeight: "25px",
              top: "10px",
              paddingBottom: "5px",
              position: "relative",
              top: "0px",
            }}
          >
            <div style={{ height: "40px" }}></div>
            <div style={{ fontWeight: "bold", fontSize: "16px" }}>
              {props.title}
            </div>
            <div style={{ fontSize: "14px" }}>{props.description}</div>
            <div style={{ fontSize: "14px", color: "#885EA7" }}>
              <span style={{ fontWeight: "bold" }}>{props.name}</span>
            </div>
          </div>
          <div
            style={{ display: "flex", position: "relative", bottom: "30px" }}
          >
            <BsHandThumbsUp
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
              {props.countlikes}
            </div>
          </div>
          <img
            alt={`${props.id}`}
            src={`/upload/feed/${props.id}_FeedImg.png`}
            style={{
              position: "absolute",
              right: "0px",
              top: "0px",
              width: "195px",
              height: "250px",
            }}
          ></img>
        </div>
      </Link>
    </>
  );
};

export default Feed;
