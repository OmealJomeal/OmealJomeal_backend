import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CheckBox from "../../common/checkbox/CheckBox";
import { AiOutlineShopping } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import CartProduct from "./CartProduct";
import axios from "axios";

const Line = styled.div`
  width: 740px;
  height: 1.5px;
  background-color: #333333;
  margin-bottom: 50px;
`;

const AddressButton = styled.button`
  width: 300px;
  height: 50px;
  flex-grow: 0;
  line-height: 0px;
  padding: 16px 120px;
  border-radius: 3px;
  border: solid 1px #5f0080;
  background-color: white;
  color: #5f0080;

  font-weight: bold;
  &:hover {
    background-color: #5f0080;
    outline: none;
    color: white;
  }
`;

const OrderButton = styled.button`
  width: 340px;
  height: 56px;
  flex-grow: 0;
  margin: 20px 0px;
  padding: 17px 91px;
  border: none;
  border-radius: 3px;
  background-color: #5f0080;
  color: white;
  font-weight: bold;
`;

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const MapCartProduct =
    cartProducts &&
    cartProducts.map((product, index) => (
      <>
        <CartProduct
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          product_price={product.product_price}
          product_amount={product.product_amount}
          product_name={product.product_name}
          product_id={product.product_id}
          key={index}
        ></CartProduct>
      </>
    ));

  useEffect(() => {
    axios
      .get("/api/cart")
      .then((response) => {
        console.log(response.data);
        setCartProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (cartProducts != null) {
      let sumtotal = 0;
      for (let i = 0; i < cartProducts.length; i++) {
        const total =
          cartProducts[i].product_price * cartProducts[i].product_amount;
        sumtotal += total;
      }
      setTotalPrice(sumtotal);
    }
  }, [cartProducts]);

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
        <div style={{ width: "1050px", height: "30px" }}></div>
        {/* <div style={{ width: "1050px", height: "30px", display: "flex" }}>
          <CheckBox
            type="checkbox"
            name="cooking"
            label="전체 선택"
            style={{ margin: "2px 10px", color: "#333333" }}
          ></CheckBox>
          <div
            style={{
              width: "100px",
              height: "30px",
              margin: "2px 40px",
              lineHeight: "20px",
              color: "#333333",
            }}
          >
            선택 삭제
          </div>
        </div> */}
        <div style={{ width: "1050px", height: "10px" }}> </div>
        <div style={{ width: "1050px", display: "flex" }}>
          <div style={{ width: "740px" }}>
            <Line style={{ width: "740px", margin: "20px 0px" }}></Line>
            <div style={{ display: "flex" }}>
              <AiOutlineShopping
                style={{
                  width: "27px",
                  height: "27px",
                  border: "0.5px",
                  color: "#333333",
                }}
              />
              <div
                style={{
                  width: "150px",
                  height: "27px",
                  margin: "0px 10px",
                  color: "#333333",
                }}
              >
                상품 내역
              </div>
            </div>
            {MapCartProduct}
          </div>
          <div style={{ width: "310px" }}>
            <div style={{ width: "310px", height: "18px" }}></div>
            <div
              style={{
                width: "290px",
                height: "155px",
                padding: "20px 20px 40px 20px",
                border: "solid #F2F2F2",
                borderWidth: "2px",
              }}
            >
              <div style={{ fontSize: "20px", display: "flex" }}>
                <FiMapPin style={{ fontSize: "25px" }} />
                &nbsp; &nbsp; &nbsp; 배송지
              </div>
              <div style={{ fontSize: "20px", margin: "30px 0px 10px 0px" }}>
                <span style={{ color: "#5f0080", fontWeight: "bold" }}>
                  배송지를 등록하고
                </span>
                <br /> 구매 가능한 상품을 확인하세요!
              </div>
              <AddressButton>주소 검색</AddressButton>
            </div>
            <div
              style={{
                width: "310px",
                backgroundColor: "#FAFAFA",
                padding: "12px",
                color: "#333",
              }}
            >
              <div
                style={{
                  height: "45px",
                  display: "flex",
                  fontSize: "18px",
                }}
              >
                <div style={{ flexGrow: 1, lineHeight: "50px" }}>상품 금액</div>
                <div style={{ lineHeight: "50px" }}>{totalPrice}원</div>
              </div>
              <div
                style={{
                  height: "45px",
                  display: "flex",
                  fontSize: "18px",
                }}
              >
                <div style={{ flexGrow: 1, lineHeight: "50px" }}>
                  상품 할인 금액
                </div>
                <div style={{ lineHeight: "50px" }}>0원</div>
              </div>
              <div
                style={{
                  height: "45px",
                  display: "flex",
                  fontSize: "18px",
                }}
              >
                <div style={{ flexGrow: 1, lineHeight: "50px" }}>배송비</div>
                <div style={{ lineHeight: "50px" }}>+3000원</div>
              </div>
              <div
                style={{
                  height: "45px",
                  display: "flex",
                  fontSize: "18px",
                }}
              >
                <div style={{ flexGrow: 1, lineHeight: "50px" }}>
                  결제 예정 금액
                </div>
                <div style={{ lineHeight: "50px" }}>{totalPrice + 3000}원</div>
              </div>
            </div>
            <OrderButton>주문하기</OrderButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
