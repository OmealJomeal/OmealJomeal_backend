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
        width: "210px",
        height: "230px",
        position: "relative",
      }}
    >
      <img
        src={src}
        style={{
          width: "175px",
          position: "relative",
          top: "-22px",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25px",
          left: "15px",
          color: "#333",
        }}
      >
        상품명
      </div>
      <div
        style={{
          width: "45px",
          height: "45px",
          zIndex: "8",
          borderRadius: "100%",
          backgroundColor: "#816E8D",
          position: "absolute",
          textAlign: "center",
          lineHeight: "50px",
          fontSize: "20px",
          right: "25px",
          bottom: "60px",
        }}
      >
        <BsCart></BsCart>
      </div>
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex >= React.Children.count(children) - 4) {
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
        style={{ transform: `translateX(-${activeIndex * 20}%)` }}
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
            top: "80px",
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
            top: "80px",
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
