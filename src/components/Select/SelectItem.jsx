import React from "react";
import { Link } from "react-router-dom";

const SelectItem = ({ text, side = "top", path, onHover, onUnHover }) => {
  return (
    <div className={`select__content select__content--${side}`}>
      <p className={`select__content--para`}>{text}</p>
      <Link
        to={`/${path}`}
        className={`select__content--box ${side === "top" ? "allowed" : ""}`}
        data-side={side}
        onMouseEnter={onHover}
        onMouseLeave={onUnHover}
      />
    </div>
  );
};

export default SelectItem;
