import React from "react";

const KurlyPlate = (props) => {
  return (
    <>
      <img
        style={{
          width: "270px",
          height: "270px",
          position: "absolute",
          bottom: "80px",
          left: "220px",
        }}
        src={`/upload/product/${props.id}_clearImg.png`}
      ></img>
    </>
  );
};

export default KurlyPlate;
