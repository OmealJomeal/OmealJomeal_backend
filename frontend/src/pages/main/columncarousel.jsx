import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./carousel.css";

// https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

export const ColumnCarouselItem = ({ src, order }) => {
  return (
    <div
      id={`slide${order}`}
      className="carousel-item"
      style={{
        width: "525px",
        position: "relative",
      }}
    >
      <img
        src={src}
        style={{
          width: "520px",
          position: "relative",
          top: "-22px",
          display: "block",
        }}
      />
    </div>
  );
};

const ColumnCarousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex >= React.Children.count(children) - 1) {
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
        style={{ transform: `translateX(-${activeIndex * 50}%)` }}
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
            top: "190px",
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
            top: "190px",
            fontSize: "20px",
          }}
        >
          〉
        </button>
      </div>
    </div>
  );
};

export default ColumnCarousel;
