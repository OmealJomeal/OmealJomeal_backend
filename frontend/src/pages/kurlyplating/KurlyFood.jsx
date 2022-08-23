import React from "react";

const KurlyFood = (props) => {
  return (
    <>
      <img
        style={{
          width: "180px",
          height: "180px",
          position: "absolute",
          bottom: "125px",
          left: "265px",
          zIndex: "3",
        }}
        src={`${props.src}`}
      ></img>
    </>
  );
};

export default KurlyFood;
