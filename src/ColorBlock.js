import React from "react";

const ColorBlock = ({ colorVal, isDarkText }) => {
  return (
    <section className="colorSquare" style={{ backgroundColor: colorVal, color: isDarkText ? "#2b2b2b" : "#fafafa" }}>
      <p>{colorVal ? colorVal : "No Color Value"}</p>
    </section>
  );
};

ColorBlock.defaultProps = {
  colorVal: "Empty Color Value",
};
export default ColorBlock;
