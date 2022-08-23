import React, { useState } from "react";
import CheckBox from "../../common/checkbox/CheckBox";
import styled from "styled-components";
import axios from "axios";

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
  console.log(props.product_amount);
  const [count, setCount] = useState(props.product_amount);
  const onMinus = () => {
    if (count <= 1) {
    } else {
      setCount(count - 1);
      props.setTotalPrice(props.totalPrice - props.product_price);
    }
  };

  const onPlus = () => {
    setCount(count + 1);
    props.setTotalPrice(props.totalPrice + props.product_price);
  };

  const onClickDelete = () => {
    if (window.confirm("장바구니에서 해당 상품을 삭제하시겠습니까?")) {
      axios
        .delete(`/api/cart/${props.cart_id}`)
        .then(function (response) {
          console.log("장바구니 삭제", response);
          window.location.replace("/cart");
        })
        .catch(function (error) {
          console.log("장바구니 삭제", error);
        });
    }
  };
  return (
    <>
      <div
        style={{
          width: "740px",
          height: "80px",
          display: "flex",
          margin: "10px 0px 50px 0px",
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
            src={`/upload/product/${props.product_id}_noneClear.png`}
          ></img>
          <div
            style={{ marginLeft: "25px", lineHeight: "118px", width: "350px" }}
          >
            {props.product_name}
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
            onClick={onClickDelete}
          >
            X
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
