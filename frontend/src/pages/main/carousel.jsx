import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./carousel.css";
import { useNavigate } from "react-router-dom";

// https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

export const CarouselItem = (props) => {
  let navigate = useNavigate();

  const onClickFeed = (e) => {
    navigate(`/feeddetail/${props.id}`);
  };
  return (
    <div
      id={`slide${props.order}`}
      className="carousel-item"
      style={{
        width: "262.5px",
        height: "400px",
        position: "relative",
      }}
      onClick={onClickFeed}
    >
      <img
        alt={props.id}
        src={`/upload/feed/${props.id}_FeedImg.png`}
        style={{
          width: "250px",
          height: "320px",
          position: "relative",
          top: "-22px",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "5px",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        {props.title}
      </div>
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex >= React.Children.count(children) - 3) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    // const interval = setInterval(() => {
    //   if (!paused) {
    //     updateIndex(activeIndex + 1);
    //   }
    // }, 3000);
    // return () => {
    //   if (interval) {
    //     clearInterval(interval);
    //   }
    // };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ position: "relative" }}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 25}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          style={{
            backgroundColor: "#FFFFFF",
            width: "40px",
            height: "40px",
            borderRadius: "100%",
            outline: "none",
            border: "none",
            position: "absolute",
            left: "-20px",
            top: "160px",
            zIndex: "10",
            fontSize: "20px",
          }}
        >
          〈
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          style={{
            backgroundColor: "#FFFFFF",
            width: "40px",
            height: "40px",
            borderRadius: "100%",
            outline: "none",
            border: "none",
            position: "absolute",
            right: "-20px",
            top: "160px",
            fontSize: "20px",
          }}
        >
          〉
        </button>
      </div>
    </div>
  );
};

export default Carousel;
