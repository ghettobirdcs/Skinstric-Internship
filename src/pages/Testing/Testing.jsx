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

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setPhase((p) => p + 1);
    } else if (event.key === "Escape") {
      if (phase >= 2) {
        setPhase((p) => p - 1);
      }
    }
  }

  // TODO: Validate input before advancing the phase:
  // Both form fields working for {name} and {location}. They store the user's information and send it to the
  // backend to the API given. (You can store them in local storage)
  // User is not allowed to proceed without entering the expected value (form validation that {name} and
  // {location} are strings and do not contain numbers or broken values)
  return (
    <div id="testing" ref={containerRef}>
      <Navbar />
      <p className="testing__header">to start analysis</p>
      {phase === 1 ? (
        <TestingContent
          placeholder={"Introduce Yourself"}
          value={name}
          setValue={setName}
          handleKeyDown={handleKeyDown}
        />
      ) : phase === 2 ? (
        <TestingContent
          placeholder={"Where are you from?"}
          value={from}
          setValue={setFrom}
          handleKeyDown={handleKeyDown}
        />
      ) : (
        <>End of phases</>
      )}
      {/* NOTE: The user can press 'Escape' to navigate through the questions backwards and 'Enter' to move on */}
      {/* The back button always redirects to the homepage */}
      <Button path="" right={false} text="Back" />
      <button onClick={() => setPhase((p) => p + 1)}>
        <Button path="testing" right={true} text="Next" visible={name !== ""} />
      </button>
    </div>
  );
};

export default Testing;
