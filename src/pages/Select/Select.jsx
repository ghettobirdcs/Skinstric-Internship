import React, { useRef } from "react";
import "./Select.css";

import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/UI/Button";
import TestingBoxes from "../../components/UI/TestingBoxes";
import { useButtonHoverAnimations } from "../../hooks/useButtonHoverAnimations";

const Select = () => {
  const containerRef = useRef(null);
  useButtonHoverAnimations(containerRef);

  return (
    <div id="select" ref={containerRef}>
      <Navbar showCode={false} editAnalysis={true} />
      <TestingBoxes />

      <div className="select__content--container">
        <div className="select__content--wrapper">
          <div className="select__content select__content--top">
            <p className="select__content--para">Demographics</p>
            <div className="select__content--box" />
          </div>
          <div className="select__content select__content--right">
            <p className="select__content--para">Cosmetic Concerns</p>
            <div className="select__content--box" />
          </div>
          <div className="select__content select__content--bottom">
            <p className="select__content--para">Weather</p>
            <div className="select__content--box" />
          </div>
          <div className="select__content select__content--left">
            <p className="select__content--para">Skin type details</p>
            <div className="select__content--box" />
          </div>
        </div>
      </div>

      <Button path="result" right={false} text="Back" />
      <Button path="summary" right={true} text="Get Summary" />
    </div>
  );
};

export default Select;
