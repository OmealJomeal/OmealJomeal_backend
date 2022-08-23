import React from "react";

const KurlyMat = (props) => {
  return (
    <div>
      <img
        style={{
          width: "600px",
          height: "400px",
          position: "absolute",
          bottom: "20px",
          left: "150px",
          zIndex: "1",
        }}
        src={`/upload/product/${props.id}_clearImg.png`}
      ></img>
    </div>
  );
};

export default KurlyMat;
