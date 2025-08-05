import React, { useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/UI/Button";
import "./Testing.css";

import { useTestingAnimations } from "../../hooks/useTestingAnimations";

const Testing = () => {
  const containerRef = useRef(null);
  useTestingAnimations(containerRef);

  return (
    <div id="testing" ref={containerRef}>
      <Navbar />
      <p className="testing__header">to start analysis</p>
      <Button path="" right={false} text="Back" />
    </div>
  );
};

export default Testing;
