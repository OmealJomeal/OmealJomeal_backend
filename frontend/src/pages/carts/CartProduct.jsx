import React from "react";
import CheckBox from "../../common/checkbox/CheckBox";

const CartProduct = () => {
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
            src={process.env.PUBLIC_URL + `/img/1_noneClear.png`}
          ></img>
          <div style={{ marginLeft: "25px", lineHeight: "81px" }}>
            [미식당] 고구마 치즈볼 돈카츠 150g*2입 (소스포함)
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
