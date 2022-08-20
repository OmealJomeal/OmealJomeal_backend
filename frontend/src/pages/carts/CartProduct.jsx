import React from "react";
import CheckBox from "../../common/checkbox/CheckBox";

const CartProduct = (props) => {
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
            height: "80px",
            backgroundColor: "yellow",
            display: "flex",
          }}
        >
          <img
            style={{ width: "60px", height: "80px", marginLeft: "15px" }}
            src={
              props.product &&
              process.env.PUBLIC_URL +
                `/img/${props.product.product_id}_noneClear.png`
            }
          ></img>
          <div style={{ marginLeft: "25px", lineHeight: "81px" }}>
            {props.product && props.product.product_name}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
