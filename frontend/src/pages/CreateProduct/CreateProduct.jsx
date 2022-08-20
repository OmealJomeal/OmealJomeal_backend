import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [value, setValue] = useState({
    name: "",
    price: "",
    description: "",
    category: ""
  });

  const onChangeHandler = (e) => {
    setValue((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  //   formdata

  const formData = new FormData();

  const onImageUpload = (e) => {
    const img = e.target.files[0];
    formData.append("product_img", img);
    for (const keyValue of formData) console.log(keyValue); // ["img", File] File은 객체
  };

  const onClearImageUpload = (e) => {
    const img = e.target.files[0];
    formData.append("product_clear_img", img);
    for (const keyValue of formData) console.log(keyValue); // ["img", File] File은 객체
  };

  const onUploadProduct = () => {
    // formData.append('stringFoodDto', JSON.stringify(foodDto));
    // console.log(formData.get("product_name"));
    if (formData.get("product_name") === null) {
      formData.append("product_name", value.name);
    }
    if (formData.get("product_price") === null) {
      formData.append("product_price", value.price);
    }
    if (formData.get("product_description") === null) {
      formData.append("product_description", value.description);
    }
    if (formData.get("product_category") === null) {
      formData.append("product_category", value.category);
    }

    // const data = {
    //   product_name: value.name,
    //   product_price: value.price,
    //   product_description: value.description,
    //   product_category: value.category,
    // };
    // formData.append("product_name",value.name);
    // formData.append("product_price",value.price);
    // formData.append("product_description",value.description);
    // formData.append("product_category",value.category);
    axios
      .post("http://localhost:8080/api/productImg", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
        for (const keyValue of formData) console.log(keyValue);
      });
  };

  return (
    <div>
      <div style={{ width: "1050px", height: "100px" }}></div>
      상품명 <input type="text" name="name" onChange={onChangeHandler}></input>
      <br />
      <br />
      가격 <input type="text" name="price" onChange={onChangeHandler}></input>
      <br />
      <br />
      상세설명
      <textarea
        type="text"
        name="description"
        onChange={onChangeHandler}
        style={{ width: "500px", height: "300px" }}
      ></textarea>
      <br />
      <br />
      <div>카테고리</div>
      <br />
      <br />
      <label>
        <input
          type="radio"
          onChange={onChangeHandler}
          name="category"
          value="veg"
        ></input>
        채소
      </label>
      <br />
      <label>
        <input
          type="radio"
          onChange={onChangeHandler}
          name="category"
          value="fruit"
        ></input>
        과일/견과/쌀
      </label>
      <br />
      <label>
        <input
          type="radio"
          onChange={onChangeHandler}
          name="category"
          value="seafood"
        ></input>
        수산/해산/건어물
      </label>
      <br />
      <label>
        <input
          type="radio"
          onChange={onChangeHandler}
          name="category"
          value="meat"
        ></input>
        정육/계란
      </label>
      <br />
      <label>
        <input
          type="radio"
          onChange={onChangeHandler}
          name="category"
          value="soup"
        ></input>
        국/반찬/메인요리
      </label>
      <br />
      <label>
        <input
          type="radio"
          onChange={onChangeHandler}
          name="category"
          value="salad"
        ></input>
        샐러드/간편식
      </label>
      <br />
      <label>
        <input
          type="radio"
          onChange={onChangeHandler}
          name="category"
          value="noodle"
        ></input>
        면/양념/오일
      </label>
      <br />
      <label>
        <input
          type="radio"
          onChange={onChangeHandler}
          name="category"
          value="water"
        ></input>
        생수/음료/우유/커피
      </label>
      <br />
      <label>
        <input
          type="radio"
          onChange={onChangeHandler}
          name="category"
          value="snack"
        ></input>
        간식/과자/떡
      </label>
      <br />
      <label>
        <input
          type="radio"
          onChange={onChangeHandler}
          name="category"
          value="bakery"
        ></input>
        베이커리/치즈/델리
      </label>
      <br />
      <label>
        <input
          type="radio"
          onChange={onChangeHandler}
          name="category"
          value="health"
        ></input>
        건강식품
      </label>
      <br />
      <label>
        <input
          type="radio"
          onChange={onChangeHandler}
          name="category"
          value="wine"
        ></input>
        와인
      </label>
      <br />
      <label>
        <input
          type="radio"
          onChange={onChangeHandler}
          name="category"
          value="tradbeer"
        ></input>
        전통주
      </label>
      <br />
      <label>
        <input
          type="radio"
          onChange={onChangeHandler}
          name="category"
          value="utility"
        ></input>
        주방용품
      </label>
      <br />
      <br />
      <div>이미지</div>
      <input
        type="file"
        accept="image/jpg,image/png,image/jpeg,image/gif"
        name="product_img"
        onChange={onImageUpload}
      ></input>
      <br />
      <br />
      <div>투명 배경 이미지</div>
      <input
        type="file"
        accept="image/jpg,image/png,image/jpeg,image/gif"
        name="product_clear_img"
        onChange={onClearImageUpload}
      ></input>
      <br />
      <br />
      <button onClick={onUploadProduct}>상품 등록</button>
    </div>
  );
};

export default CreateProduct;
