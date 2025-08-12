import React from "react";

const SelectItem = ({ text, side = "top" }) => {
  return (
    <div className={`select__content select__content--${side}`}>
      <p className={`select__content--para`}>{text}</p>
      <div
        className={`select__content--box ${side === "top" ? "allowed" : ""}`}
      />
    </div>
  );
};

export default SelectItem;
