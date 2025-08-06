import React, { useRef, useState } from "react";
import "./Testing.css";

import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/UI/Button";

import { useTestingAnimations } from "../../hooks/useTestingAnimations";
import TestingContent from "../../components/Testing/TestingContent";

const Testing = () => {
  const containerRef = useRef(null);
  useTestingAnimations(containerRef);

  const [phase, setPhase] = useState(1);
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");

  return (
    <div id="testing" ref={containerRef}>
      <Navbar />
      <p className="testing__header">to start analysis</p>
      {phase === 1 ? (
        <TestingContent
          placeholder={"Introduce Yourself"}
          value={name}
          setValue={setName}
        />
      ) : phase === 2 ? (
        <TestingContent
          placeholder={"Where are you from?"}
          value={from}
          setValue={setFrom}
        />
      ) : (
        <>End of phases</>
      )}
      {/* TODO: Back button always goes to homepage instead of going to prev question */}
      <Button path="" right={false} text="Back" />
      <button onClick={() => setPhase((p) => p + 1)}>
        <Button path="testing" right={true} text="Next" visible={name !== ""} />
      </button>
    </div>
  );
};

export default Testing;
