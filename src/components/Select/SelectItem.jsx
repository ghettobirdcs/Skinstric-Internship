import React from "react";

const SelectItem = ({ text, side = "top", onHover, onUnHover }) => {
  return (
    <div className={`select__content select__content--${side}`}>
      <p className={`select__content--para`}>{text}</p>
      <div
        className={`select__content--box ${side === "top" ? "allowed" : ""}`}
        data-side={side}
        onMouseEnter={onHover}
        onMouseLeave={onUnHover}
      />
    </div>
  );
};

export default SelectItem;
