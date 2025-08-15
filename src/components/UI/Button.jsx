import React from "react";
import { IoTriangle } from "react-icons/io5";
import { Link } from "react-router-dom";

const Button = ({
  path,
  text,
  right = true,
  visible = true,
  invert = false,
}) => {
  return (
    <Link
      to={`/${path}`}
      className={right ? "landing__right--content" : "landing__left--content"}
      style={{ opacity: !visible && 0 }}
    >
      {!right && (
        <div
          className={`landing__btn landing__btn--left ${invert && "invert"}`}
        >
          <div
            className={`landing__btn--outline landing__btn--outline--left`}
          />
          <IoTriangle />
        </div>
      )}
      <p className={`landing__sides--text ${invert && "invert"}`}>{text}</p>
      {right && (
        <div
          className={`landing__btn landing__btn--right ${invert && "invert"}`}
        >
          <div
            className={`landing__btn--outline landing__btn--outline--right`}
          />
          <IoTriangle />
        </div>
      )}
    </Link>
  );
};

export default Button;
