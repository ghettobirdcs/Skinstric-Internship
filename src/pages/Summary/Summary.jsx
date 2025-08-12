import React, { useRef } from "react";
import "./Summary.css";

import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/UI/Button";

import { useButtonHoverAnimations } from "../../hooks/useButtonHoverAnimations";

const Summary = () => {
  const containerRef = useRef(null);
  useButtonHoverAnimations(containerRef);

  return (
    <div id="summary" ref={containerRef}>
      <Navbar showCode={false} demographics={true} />
      {/* TODO: Make components for type selector (left), content value (mid), and corrector (right) */}
      {/* TODO: Make component for 'reset' + 'confirm' btn */}
      <p className="summary__info">
        If A.I. estimate is wrong, select the correct one.
      </p>
      <Button path="select" text="Back" right={false} />
    </div>
  );
};

export default Summary;
