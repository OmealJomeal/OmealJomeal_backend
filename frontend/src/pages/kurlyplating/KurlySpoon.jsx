import React from "react";

const KurlySpoon = (props) => {
  return (
    <>
      <img
        style={{
          width: "170px",
          height: "210px",
          position: "absolute",
          bottom: "80px",
          right: "170px",
          zIndex: "2",
        }}
        src={`/upload/product/${props.id}_clearImg.png`}
      ></img>
    </>
  );
};

export default KurlySpoon;
