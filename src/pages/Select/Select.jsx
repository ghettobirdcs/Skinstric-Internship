import React, { useRef, useState } from "react";
import "./Select.css";

import Button from "../../components/UI/Button";
import Navbar from "../../components/Navbar/Navbar";
import SelectBoxes from "../../components/UI/SelectBoxes";
import SelectItem from "../../components/Select/SelectItem";

import { useButtonHoverAnimations } from "../../hooks/useButtonHoverAnimations";
import { useSelectAnimations } from "../../hooks/useSelectAnimations";

const Select = () => {
  const containerRef = useRef(null);
  useButtonHoverAnimations(containerRef);
  useSelectAnimations(containerRef);

  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <div id="select" ref={containerRef}>
      <Navbar showCode={false} editAnalysis={true} />
      <SelectBoxes hoveredSide={hoveredSide} />

      <div className="select__content--container">
        <div className="select__content--wrapper">
          {["top", "right", "bottom", "left"].map((side) => (
            <SelectItem
              key={side}
              text={
                side === "top"
                  ? "Demographics"
                  : side === "right"
                    ? "Cosmetic Concerns"
                    : side === "bottom"
                      ? "Weather"
                      : "Skin type details"
              }
              side={side}
              onHover={() => setHoveredSide(side)}
              onUnHover={() => setHoveredSide(null)}
              path={side === "top" ? "summary" : ""}
            />
          ))}
        </div>
      </div>

      <Button path="result" right={false} text="Back" />
      <Button path="summary" right={true} text="Get Summary" />
    </div>
  );
};

export default Select;
