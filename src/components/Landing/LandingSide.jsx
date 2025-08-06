import React from "react";
import Button from "../UI/Button";

const LandingSide = ({ right = false, buttonText, path }) => {
  return (
    <>
      <img
        className={`dotted-box ${right ? "landing__box--right" : "landing__box--left"}`}
        src="/DottedBox.svg"
        alt=""
      />
      <img
        className={`dotted-box ${right ? "landing__box--right--2" : "landing__box--left--2"}`}
        src="/DottedBox.svg"
        alt=""
      />
      <img
        className={`dotted-box ${right ? "landing__box--right--3" : "landing__box--left--3"}`}
        src="/DottedBox.svg"
        alt=""
      />

      <Button path={path} text={buttonText} right={right} />
    </>
  );
};

export default LandingSide;
