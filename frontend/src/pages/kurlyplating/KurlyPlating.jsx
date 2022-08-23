import React, { useEffect, useState } from "react";
import KurlyTable from "./KurlyTable";
import KurlyPlate from "./KurlyPlate";
import KurlyMat from "./KurlyMat";
import KurlySpoon from "./KurlySpoon";
import styled from "styled-components";
import Carousel, { CarouselItem } from "./carousel";
import axios from "axios";

const TableButton = styled.div`
  padding: 1px 5px;
  height: 27px;
  background-color: white;
  color: #885ea7;
  border: solid #885ea7;
  border-width: 1px;
  text-align: center;
  border-radius: 5px;
  margin-right: 20px;
  margin-top: 10px;
  font-size: 18px;
  &:hover {
    background-color: #885ea7;
    color: white;
  }
`;

const TableButtonOne = styled(TableButton)`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

const TableButtonTwo = styled(TableButton)`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

const TableButtonThree = styled(TableButton)`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

const SelectButton = styled.div`
  width: 350px;
  height: 60px;
  background-color: #f7f7f7;
  text-align: center;
  font-size: 16px;
  line-height: 60px;
`;

const SelectButtonOne = styled(SelectButton)`
  border-bottom: solid ${(props) => props.color};
`;

const SelectButtonTwo = styled(SelectButton)`
  border-bottom: solid ${(props) => props.color};
`;
const SelectButtonThree = styled(SelectButton)`
  border-bottom: solid ${(props) => props.color};
`;

const KurlyPlating = () => {
  const [table, setTable] = useState("1");
  const [category, setCategory] = useState("main_dish");
  const [plateId, setPlateId] = useState(null);
  const [matId, setMatId] = useState(null);
  const [spoonId, setSpoonId] = useState(null);

  const onClickTable = (e) => {
    setTable(e.target.id);
  };

  const onClickCategory = (e) => {
    setCategory(e.target.id);
  };

  const [productList, setProductList] = useState(null);

  useEffect(() => {
    axios
      .get("/api/product")
      .then((response) => {
        console.log(response);
        setProductList(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const filtered =
    productList &&
    productList.filter((product) => {
      if (product.product_category === category) {
        return product;
      }
    });

  return (
    <>
      <div style={{ width: "1050px", margin: "0 auto" }}>
        <div style={{ height: "130px" }}></div>
        <div style={{ width: "900px", height: " 450px", margin: "0 75px" }}>
          <div style={{ position: "relative" }}>
            <KurlyTable id={table}></KurlyTable>
            {plateId !== null ? <KurlyPlate id={plateId}></KurlyPlate> : null}
            {matId !== null ? <KurlyMat id={matId}></KurlyMat> : null}
            {spoonId !== null ? <KurlySpoon id={spoonId}></KurlySpoon> : null}
          </div>

          <div
            style={{
              display: "flex",
              width: "900px",
              margin: "0 45px",
              marginTop: "10px",
            }}
          >
            <TableButtonOne
              backgroundColor={table === "1" ? "#885ea7" : "white"}
              color={table === "1" ? "white" : "#885ea7"}
              id={1}
              onClick={onClickTable}
            >
              대리석 테이블
            </TableButtonOne>
            <TableButtonTwo
              backgroundColor={table === "2" ? "#885ea7" : "white"}
              color={table === "2" ? "white" : "#885ea7"}
              id={2}
              onClick={onClickTable}
            >
              옅은 원목 테이블
            </TableButtonTwo>
            <TableButtonThree
              backgroundColor={table === "3" ? "#885ea7" : "white"}
              color={table === "3" ? "white" : "#885ea7"}
              id={3}
              onClick={onClickTable}
            >
              짙은 원목 테이블
            </TableButtonThree>
          </div>
        </div>
        <div style={{ height: "120px" }}></div>
        <div style={{ display: "flex", flexWrap: "no-wrap" }}>
          <SelectButtonOne
            color={category === "main_dish" ? "#5F0080" : "white"}
            id={"main_dish"}
            onClick={onClickCategory}
          >
            플레이트
          </SelectButtonOne>
          <SelectButtonTwo
            color={category === "table_mat" ? "#5F0080" : "white"}
            id={"table_mat"}
            onClick={onClickCategory}
          >
            테이블 매트
          </SelectButtonTwo>
          <SelectButtonThree
            color={category === "spoon" ? "#5F0080" : "white"}
            id={"spoon"}
            onClick={onClickCategory}
          >
            커트러리
          </SelectButtonThree>
        </div>
        <div>
          <Carousel style={{ display: "flex", flexWrap: "nowrap" }}>
            {filtered &&
              filtered.map((product, index) => (
                <CarouselItem
                  key={`CarouselItem${index}`}
                  order={index + 1}
                  id={product.product_id}
                  name={product.product_name}
                  price={product.product_price}
                  category={product.product_category}
                  setPlateId={setPlateId}
                  setMatId={setMatId}
                  setSpoonId={setSpoonId}
                />
              ))}
          </Carousel>
        </div>
        <div style={{ height: "80px" }}></div>
        <SelectButton style={{ width: "100%" }}>음식 올리기</SelectButton>
      </div>
    </>
  );
};

export default KurlyPlating;
