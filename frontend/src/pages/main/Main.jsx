import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  let navigate = useNavigate();
  const onClick = (e) => {
    navigate(`/productdetail/:${e.target.id}`);
  };
  return (
    <div>
      <h2 onClick={onClick} id={1}>
        Product
      </h2>
    </div>
  );
};

export default Main;
