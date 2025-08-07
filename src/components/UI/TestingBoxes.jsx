import React from "react";

const TestingBoxes = () => {
  return (
    <div className="dotted-box__container">
      <img className="dotted-box testing__box" src="/DottedBox.svg" alt="" />
      <img
        className="dotted-box testing__box testing__box--second"
        src="/DottedBox.svg"
        alt=""
      />
      <img
        className="dotted-box testing__box testing__box--third"
        src="/DottedBox.svg"
        alt=""
      />
    </div>
  );
};

export default TestingBoxes;
