import React from "react";

const KurlyTable = (props) => {
  return (
    <>
      <img
        style={{ width: "900px", height: "450px" }}
        src={`/img/table${props.id}.png`}
      ></img>
    </>
  );
};

export default KurlyTable;
