import React from "react";
import { IoTriangle } from "react-icons/io5";
import { Link } from "react-router-dom";

const Button = ({
  path,
  text,
  buttonRef,
  contentRef,
  outlineRef,
  right = true,
}) => {
  return (
    <Link
      to={`/${path}`}
      className={right ? "landing__right--content" : "landing__left--content"}
      ref={contentRef}
    >
      {!right && (
        <div className={`landing__btn landing__btn--left`} ref={buttonRef}>
          <div
            className={`landing__btn--outline landing__btn--outline--left`}
            ref={outlineRef}
          />
          <IoTriangle />
        </div>
      )}
      <p className="landing__sides--text">{text}</p>
      {right && (
        <div className={`landing__btn landing__btn--right`} ref={buttonRef}>
          <div
            className={`landing__btn--outline landing__btn--outline--right`}
            ref={outlineRef}
          />
          <IoTriangle />
        </div>
      )}
    </Link>
  );
};

export default Button;
