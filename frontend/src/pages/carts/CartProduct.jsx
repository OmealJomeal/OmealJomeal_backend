import React, { useState } from "react";
import CheckBox from "../../common/checkbox/CheckBox";
import styled from "styled-components";

const CountButton = styled.button`
  width: 23px;
  height: 23px;
  border: solid #dddddd;
  border-width: 1.5px;
  font-size: 15px;
  background-color: white;
  color: #dddddd;
  line-height: 17px;
  text-align: center;
`;

const CartProduct = (props) => {
  const [count, setCount] = useState(
    props.product && props.product.product_amount
  );
  const onMinus = () => {
    if (count <= 1 && props.product) {
    } else {
      setCount(count - 1);
      props.setTotalPrice(props.totalPrice - props.product.product_price);
    }
  };

  const onPlus = () => {
    setCount(count + 1 && props.product);
    props.setTotalPrice(props.totalPrice + props.product.product_price);
  };
  return (
    <>
      <div
        style={{
          width: "740px",
          height: "80px",
          display: "flex",
          margin: "10px 0px",
        }}
      >
        <CheckBox
          style={{ width: "22px", height: "22px", margin: "30px 0px" }}
        ></CheckBox>
        <div
          style={{
            width: "740px",
            height: "120px",
            display: "flex",
          }}
        >
          <img
            style={{ width: "90px", height: "120px", marginLeft: "15px" }}
            src={
              props.product &&
              process.env.PUBLIC_URL +
                `/img/${props.product.product_id}_noneClear.png`
            }
          ></img>
          <div
            style={{ marginLeft: "25px", lineHeight: "118px", width: "350px" }}
          >
            {props.product && props.product.product_name}
          </div>
          <div style={{ margin: "46px 0px", width: "200px" }}>
            <CountButton onClick={onMinus} style={{ marginRight: "25px" }}>
              -
            </CountButton>
            <span style={{ fontSize: "18px", color: "#333333" }}>{count}</span>
            <CountButton onClick={onPlus} style={{ marginLeft: "25px" }}>
              +
            </CountButton>
          </div>

          <div
            style={{
              marginLRight: "25px",
              lineHeight: "120px",
              flexGrow: "1",
              cursor: "pointer",
              color: "#CCC",
            }}
          >
            X
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
