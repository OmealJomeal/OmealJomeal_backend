import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./carousel.css";
import { BsCart } from "react-icons/bs";

// https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

export const CarouselItem = ({ src, order }) => {
  return (
    <div
      id={`slide${order}`}
      className="carousel-item"
      style={{
        width: "262.5px",
        height: "400px",
        position: "relative",
      }}
    >
      <img
        src={src}
        style={{
          width: "250px",
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
        }}
      >
        피드명
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
    </div>
  );
};

export default Carousel;
