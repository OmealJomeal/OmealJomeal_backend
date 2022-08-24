import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./radio.css";
import { useNavigate } from "react-router-dom";

const Indicator = styled.div`
  width: 100px;
  margin: 17px 40px 17px 0px;
  font-size: 14px;
`;

const UnitBox = styled.div`
  width: 700px;
  height: 80px;
  margin: 0px auto;
  display: flex;
`;

const FeedUploadButton = styled.button`
  width: 350px;
  height: 56px;
  flex-grow: 0;
  margin: 20px auto 0px auto;
  padding: 17px 91px;
  border-radius: 3px;
  background-color: #5f0080;
  color: white;
  font-weight: bold;
`;

const Line = styled.div`
  width: 840px;
  height: 1.5px;
  background-color: #333;
  margin-bottom: 50px;
`;
const CreateFeed = () => {
  const [value, setValue] = useState({
    title: "",
    description: "",
    recipe: "",
    cooktime: "",
    cooklevel: 0,
    food_time: 0,
  });

  const onChangeHandler = (e) => {
    setValue((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  // formdata

  const formData = new FormData();

  const onFeedImageUpload = (e) => {
    const img = e.target.files[0];
    formData.append("feed_img", img);
  };

  const [productList, setProductList] = useState(null);
  const [search, setSearch] = useState("null");
  const [selected, setSelected] = useState([]);
  const [selectedId, setSelectedId] = useState([]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    if (search.length === 1 || 0) {
      setSearch("null");
    }
  };

  useEffect(() => {
    if (search.length === 0) {
      setSearch("null");
    }
  }, [search.length]);

  const filtered =
    productList &&
    productList.filter((product) => {
      if (product.product_name.toLowerCase().includes(search)) {
        return product;
      }
    });

  const onClickSelect = (e) => {
    if (selected.includes(e.target.id)) {
    } else {
      setSelected((selected) => [...selected, e.target.id]);
      setSelectedId((selectedId) => [...selectedId, e.target.className]);
    }
  };

  const showFiltered =
    filtered &&
    filtered.map((product) => {
      return (
        <div
          style={{
            margin: "0px 10px",
            height: "20px",
            display: "flex",
          }}
        >
          <div
            onClick={onClickSelect}
            id={product.product_name}
            className={product.product_id}
            style={{
              display: "block",
              marginRight: "10px",
              backgroundColor: "#885EA7",
              color: "white",
              width: "40px",
              textAlign: "center",
              borderRadius: "5px",
              fontSize: "13px",
            }}
          >
            선택
          </div>
          {product.product_name}
        </div>
      );
    });

  const showSelected =
    selected &&
    selected.map((name) => {
      return (
        <div
          style={{
            border: "solid #BA8CDC",
            borderWidth: "1px",
            padding: "2px 5px",
            height: "25px",
            margin: "0px 20px",
            textAlign: "center",
            borderRadius: "5px",
            margin: "2px",
          }}
        >
          {name}
        </div>
      );
    });

  useEffect(() => {
    axios
      .get("/api/product")
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => {});
  }, []);

  let navigate = useNavigate();

  const onUploadFeed = () => {
    if (formData.get("feed_title") === null) {
      formData.append("feed_title", value.title);
    }
    if (formData.get("feed_description") === null) {
      formData.append("feed_description", value.description);
    }
    if (formData.get("feed_recipe") === null) {
      formData.append("feed_recipe", value.recipe);
    }
    if (formData.get("feed_cooktime") === null) {
      formData.append("feed_cooktime", value.cooktime);
    }
    if (formData.get("feed_cooklevel") === null) {
      formData.append("feed_cooklevel", value.cooklevel);
    }
    if (formData.get("feed_food_time") === null) {
      formData.append("feed_food_time", value.food_time);
    }
    if (formData.get("product_id") === null) {
      formData.append("product_id", selectedId);
    }
    axios
      .post("/api/feed", formData)
      .then((response) => {
        window.location.replace("/curlytable");
      })
      .catch((error) => {});
  };

  return (
    <>
      <div style={{ width: "840px", margin: "0px auto" }}>
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
          글쓰기
        </div>
        <Line></Line>
      </div>
      <UnitBox>
        <Indicator>제목</Indicator>
        <div>
          <input
            style={{
              width: "599px",
              height: "30px",
              border: "1px solid #aaa;",
              margin: "8px 0px",
              outline: "none",
              padding: "8px",
              boxSizing: "border-box",
            }}
            type="text"
            name="title"
            onChange={onChangeHandler}
          ></input>
        </div>
      </UnitBox>
      <UnitBox style={{ height: "200px" }}>
        <Indicator>상세설명</Indicator>
        <textarea
          type="text"
          name="description"
          onChange={onChangeHandler}
          style={{
            width: "950px",
            height: "180px",
            border: "1px solid #aaa;",
            borderRadius: "4px",
            margin: "8px 0px",
            outline: "none",
            padding: "8px",
            boxSizing: "border-box",
          }}
        ></textarea>
      </UnitBox>
      <div></div>
      <UnitBox style={{ height: "200px" }}>
        <Indicator>레시피</Indicator>
        <textarea
          type="text"
          name="recipe"
          onChange={onChangeHandler}
          style={{
            width: "950px",
            height: "180px",
            border: "1px solid #aaa;",
            borderRadius: "4px",
            margin: "8px 0px",
            outline: "none",
            padding: "8px",
            boxSizing: "border-box",
          }}
        ></textarea>
      </UnitBox>
      <UnitBox style={{ height: "50px" }}></UnitBox>
      <UnitBox>
        <Indicator>상품 검색</Indicator>
        <div>
          <input
            style={{
              width: "599px",
              height: "30px",
              border: "1px solid #aaa;",
              margin: "8px 0px",
              outline: "none",
              padding: "8px",
              boxSizing: "border-box",
            }}
            onChange={onChangeSearch}
            type="text"
            name="title"
            placeholder="상품명으로 검색하세요 ex) 양파, 계란"
          ></input>
        </div>
      </UnitBox>
      <UnitBox style={{ display: "flex", flexWrap: "wrap" }}>
        {showFiltered}
      </UnitBox>
      <UnitBox style={{ display: "flex", flexWrap: "wrap" }}>
        {showSelected}
      </UnitBox>
      <UnitBox>
        <Indicator>조리 시간</Indicator>
        <div className="checks">
          <input
            onChange={onChangeHandler}
            type="radio"
            id="0~0.5시간"
            name="cooktime"
            value="0~0.5시간"
          />
          <label htmlFor="0~0.5시간" style={{ padding: "0px 0px 0px 30px" }}>
            <div
              style={{
                width: "120px",
                height: "80px",
                lineHeight: "45px",
                textAlign: "right",
              }}
            >
              0~0.5시간
            </div>
          </label>
        </div>
        <div className="checks">
          <input
            onChange={onChangeHandler}
            type="radio"
            id="0.5~1시간"
            name="cooktime"
            value="0.5~1시간"
          />
          <label htmlFor="0.5~1시간" style={{ padding: "0px 0px 0px 30px" }}>
            <div
              style={{
                width: "120px",
                height: "80px",
                lineHeight: "45px",
                textAlign: "right",
              }}
            >
              0.5~1시간
            </div>
          </label>
        </div>
        <div className="checks">
          <input
            onChange={onChangeHandler}
            type="radio"
            id="1~1.5시간"
            name="cooktime"
            value="1~1.5시간"
          />
          <label htmlFor="1~1.5시간" style={{ padding: "0px 0px 0px 30px" }}>
            <div
              style={{
                width: "120px",
                height: "80px",
                lineHeight: "45px",
                textAlign: "right",
              }}
            >
              1~1.5시간
            </div>
          </label>
        </div>
        <div className="checks">
          <input
            onChange={onChangeHandler}
            type="radio"
            id="1.5시간~"
            name="cooktime"
            value="1.5시간~"
          />
          <label htmlFor="1.5시간~" style={{ padding: "0px 0px 0px 30px" }}>
            <div
              style={{
                width: "120px",
                height: "80px",
                lineHeight: "45px",
                textAlign: "right",
              }}
            >
              1.5~ 시간
            </div>
          </label>
        </div>
      </UnitBox>
      <UnitBox>
        <Indicator>조리 난이도</Indicator>
        <div className="checks">
          <input
            onChange={onChangeHandler}
            type="radio"
            id="하"
            name="cooklevel"
            value="0"
          />
          <label htmlFor="하">
            <div
              style={{
                width: "150px",
                height: "80px",
                lineHeight: "45px",
                textAlign: "center",
              }}
            >
              하
            </div>
          </label>
        </div>
        <div className="checks">
          <input
            onChange={onChangeHandler}
            type="radio"
            id="중"
            name="cooklevel"
            value="1"
          />
          <label htmlFor="중">
            <div
              style={{
                width: "150px",
                height: "80px",
                lineHeight: "45px",
                textAlign: "center",
              }}
            >
              중
            </div>
          </label>
        </div>
        <div className="checks">
          <input
            onChange={onChangeHandler}
            type="radio"
            id="상"
            name="cooklevel"
            value="2"
          />
          <label htmlFor="상">
            <div
              style={{
                width: "150px",
                height: "80px",
                lineHeight: "45px",
                textAlign: "center",
              }}
            >
              상
            </div>
          </label>
        </div>
      </UnitBox>
      <UnitBox>
        <Indicator style={{ margin: "17px 0px" }}>
          이미지 업로드(필수)
        </Indicator>
        <input
          type="file"
          accept="image/jpg,image/png,image/jpeg,image/gif"
          name="feed_img"
          onChange={onFeedImageUpload}
          style={{ position: "relative", top: "30px", left: "20px" }}
          id="file"
        ></input>
      </UnitBox>
      <UnitBox>
        <FeedUploadButton onClick={onUploadFeed}>글 등록하기</FeedUploadButton>
      </UnitBox>
    </>
  );
};

export default CreateFeed;
