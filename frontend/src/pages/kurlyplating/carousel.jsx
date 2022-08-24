import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./carousel.css";
import { BsCart } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

export const CarouselItem = (props) => {
  const onClickCart = () => {
    const data = {
      product_id: parseInt(props.id),
      product_price: props.price,
      product_amount: 1,
    };
    if (window.confirm("상품을 장바구니에 담겠습니까?")) {
      axios
        .post("/api/cart", JSON.stringify(data), {
          headers: {
            "Content-Type": "application/json",
            data,
          },
        })
        .then((response) => {})
        .catch((error) => {});
    }
  };

  let navigate = useNavigate();

  // navigate(`/productdetail/${props.id}`);

  const onClickImage = () => {
    if (props.category === "main_dish") {
      props.setPlateId(props.id);
    }
    if (props.category === "table_mat") {
      props.setMatId(props.id);
    }
    if (props.category === "spoon") {
      props.setSpoonId(props.id);
    }
  };

  return (
    <div
      id={`slide${props.order}`}
      className="carousel-item"
      style={{
        width: "210px",
        height: "230px",
        position: "relative",
      }}
    >
      <img
        alt={props.id}
        src={`/upload/product/${props.id}_noneClear.png`}
        style={{
          width: "175px",
          height: "175px",
          position: "relative",
          top: "-22px",
          display: "block",
        }}
        onClick={onClickImage}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25px",
          left: "15px",
          color: "#333",
        }}
      >
        {props.name}
      </div>
      {props.price && (
        <div
          style={{
            position: "absolute",
            bottom: "5px",
            left: "15px",
            color: "#333",
          }}
        >
          {props.price}&nbsp;원
        </div>
      )}
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
        onClick={onClickCart}
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
