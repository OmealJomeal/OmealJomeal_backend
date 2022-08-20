import React from "react";
import styled from "styled-components";

const Cart = () => {
  const Line = styled.div`
    width: 740px;
    height: 1.5px;
    background-color: #333;
    margin-bottom: 50px;
  `;

  return (
    <>
      <div style={{ width: "1050px", margin: "0 auto" }}>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            width: "840px",
            textAlign: "center",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          장바구니
        </div>
        <Line></Line>
      </div>
    </>
  );
};

export default Cart;
