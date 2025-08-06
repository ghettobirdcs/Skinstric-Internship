import React, { useRef, useState } from "react";
import "./Testing.css";

import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/UI/Button";

import { useTestingAnimations } from "../../hooks/useTestingAnimations";
import TestingContent from "../../components/Testing/TestingContent";
import { toast } from "react-toastify";

const Testing = () => {
  const containerRef = useRef(null);
  useTestingAnimations(containerRef);

  const [phase, setPhase] = useState(1);
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");

  const validateInput = (text) => {
    // String with at least 1 character and no numbers or broken values
    const regex = /^[A-Za-z\s]+$/;

    if (regex.test(text)) {
      setPhase((p) => p + 1);
    } else {
      toast("Invalid input! Try again.");
    }
  };

  const handleKeyDown = (event, text) => {
    if (event.key === "Enter") {
      validateInput(text);
    } else if (event.key === "Escape") {
      if (phase >= 2) {
        setPhase((p) => p - 1);
      }
    }
  };

  return (
    <div id="testing" ref={containerRef}>
      <Navbar />
      <p className="testing__header">to start analysis</p>
      {phase === 1 ? (
        <TestingContent
          placeholder={"Introduce Yourself"}
          value={name}
          setValue={setName}
          handleKeyDown={(e) => handleKeyDown(e, name)}
        />
      ) : phase === 2 ? (
        <TestingContent
          placeholder={"Where are you from?"}
          value={from}
          setValue={setFrom}
          handleKeyDown={(e) => handleKeyDown(e, from)}
        />
      ) : (
        <TestingContent loading={true} />
      )}

      {/* NOTE: The user can press 'Escape' to navigate through the questions backwards and 'Enter' to move on */}
      {/* The back button always redirects to the homepage */}
      <Button path="" right={false} text="Back" />
      <button
        onClick={() => {
          if (phase === 1) {
            validateInput(name);
          } else if (phase === 2) {
            validateInput(from);
          }
        }}
      >
        <Button path="testing" right={true} text="Next" visible={name !== ""} />
      </button>
    </div>
  );
};

export default Testing;
