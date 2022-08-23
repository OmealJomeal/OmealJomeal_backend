import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./carousel.css";

// https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

export const MainCarouselItem = ({ src, order }) => {
  return (
    <div
      id={`slide${order}`}
      className="carousel-item"
      style={{
        width: "100%",
      }}
    >
      <img
        src={src}
        style={{ width: "1200px", position: "relative", top: "150px" }}
      />
    </div>
  );
};

const MainCarousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div {...handlers} className="carousel" style={{ position: "relative" }}>
      <div
        className="inner"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          height: "500px",
        }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};

export default MainCarousel;
