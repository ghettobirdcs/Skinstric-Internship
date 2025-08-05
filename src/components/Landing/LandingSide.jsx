import React from "react";
import Button from "../UI/Button";

const LandingSide = ({ right = false, buttonText, path }) => {
  return (
    <>
      <img
        className={`dotted-box ${right ? "landing__box--right" : "landing__box--left"}`}
        src="/DottedBox.svg"
      />
      <img
        className={`dotted-box ${right ? "landing__box--right--2" : "landing__box--left--2"}`}
        src="/DottedBox.svg"
      />
      <img
        className={`dotted-box ${right ? "landing__box--right--3" : "landing__box--left--3"}`}
        src="/DottedBox.svg"
      />

      <Button path={path} text={buttonText} right={right} />
    </>
  );
};

export default LandingSide;
