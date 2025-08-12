import React, { useRef } from "react";
import "./Select.css";

import Button from "../../components/UI/Button";
import Navbar from "../../components/Navbar/Navbar";
import TestingBoxes from "../../components/UI/TestingBoxes";
import SelectItem from "../../components/Select/SelectItem";

import { useButtonHoverAnimations } from "../../hooks/useButtonHoverAnimations";
import { useSelectAnimations } from "../../hooks/useSelectAnimations";

const Select = () => {
  const containerRef = useRef(null);
  useButtonHoverAnimations(containerRef);
  useSelectAnimations(containerRef);

  return (
    <div id="select" ref={containerRef}>
      <Navbar showCode={false} editAnalysis={true} />
      <TestingBoxes />

      <div className="select__content--container">
        <div className="select__content--wrapper">
          <SelectItem text="Demographics" side="top" />
          <SelectItem text="Cosmetic Concerns" side="right" />
          <SelectItem text="Weather" side="bottom" />
          <SelectItem text="Skin type details" side="left" />
        </div>
      </div>

      <Button path="result" right={false} text="Back" />
      <Button path="summary" right={true} text="Get Summary" />
    </div>
  );
};

export default Select;
