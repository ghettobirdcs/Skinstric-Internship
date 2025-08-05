import React, { useRef, useState } from "react";
import "./Testing.css";

import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/UI/Button";

import { useTestingAnimations } from "../../hooks/useTestingAnimations";
import TestingContent from "../../components/Testing/TestingContent";

const Testing = () => {
  const containerRef = useRef(null);
  useTestingAnimations(containerRef);

  const [name, setName] = useState("");

  return (
    <div id="testing" ref={containerRef}>
      <Navbar />
      <p className="testing__header">to start analysis</p>
      <TestingContent
        placeholder={"Introduce Yourself"}
        value={name}
        setValue={setName}
      />
      <Button path="" right={false} text="Back" />
    </div>
  );
};

export default Testing;
