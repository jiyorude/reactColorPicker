import React from "react";

const ColorInput = ({ colorVal, setColorVal, isDarkText, setIsDarkText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Type Color</label>
      <input
        type="text"
        placeholder="Type Color"
        required
        value={colorVal}
        onChange={(e) => {
          setColorVal(e.target.value);
        }}
      />
      <button type="button" id="txtcolor" onClick={() => setIsDarkText(!isDarkText)}>
        Invert Text Color
      </button>
    </form>
  );
};

export default ColorInput;
