import React from "react";
import axios from "axios";

const CreateFeed = () => {
  const formData = new FormData();

  const onChange = (e) => {
    const img = e.target.files[0];
    formData.append("img", img);
    console.log(formData); // FormData {}
    for (const keyValue of formData) console.log(keyValue); // ["img", File] File은 객체
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <input
        type="file"
        accept="image/jpg,impge/png,image/jpeg,image/gif"
        name="profile_img"
        onChange={onChange}
      ></input>
      <button onClick={onChange}>제출</button>
    </div>
  );
};

export default CreateFeed;
