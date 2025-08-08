import React, { useMemo, useRef, useState } from "react";
import "./Testing.css";

import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/UI/Button";

import { useTestingAnimations } from "../../hooks/useTestingAnimations";
import TestingContent from "../../components/Testing/TestingContent";
import { toast } from "react-toastify";
import TestingBoxes from "../../components/UI/TestingBoxes";
import axios from "axios";

const formSteps = [
  {
    id: "name",
    placeholder: "Introduce Yourself",
  },
  {
    id: "location",
    placeholder: "Where are you from?",
  },
  {
    id: "Thank you",
    placeholder: "Proceed for the next step",
  },
];

// TODO: Separate components in this file
const Testing = () => {
  const containerRef = useRef(null);
  useTestingAnimations(containerRef);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const currentStep = useMemo(
    () => formSteps[currentStepIndex],
    [currentStepIndex],
  );
  const currentValue = formData[currentStep?.id] || "";

  const validateAndProceed = (value) => {
    // String with at least 1 character that isn't a space; no numbers or broken values
    const regex = /^(?=.*[A-Za-z])[A-Za-z\s]+$/;

    if (regex.test(value)) {
      setCurrentStepIndex((prevIndex) => prevIndex + 1);
      if (currentStepIndex > 0) {
        setLoading(true);
        postPhaseOne();
      }
      return true;
    } else {
      toast.error("Invalid input! Try again.");
      return false;
    }
  };

  const handleValueChange = (newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      [currentStep.id]: newValue,
    }));
  };

  async function postPhaseOne() {
    localStorage.setItem("Name", formData["name"]);
    localStorage.setItem("Location", formData["location"]);

    await axios.post(
      "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
      formData,
    );
    setLoading(false);
  }

  return (
    <div id="testing" ref={containerRef}>
      <Navbar showCode={false} startAnalysis={true} />
      <TestingBoxes />

      <TestingContent
        key={currentStep?.id}
        placeholder={currentStep?.placeholder}
        value={currentValue}
        setValue={handleValueChange}
        validateAndProceed={validateAndProceed}
        loading={loading}
      />

      {/* The back button always redirects to the homepage */}
      <Button path="" right={false} text="Back" />

      {!loading && currentStep?.id !== "Thank you" ? (
        <button onClick={() => validateAndProceed(currentValue)}>
          <Button
            path="testing"
            right={true}
            text="Next"
            visible={currentValue !== ""}
          />
        </button>
      ) : (
        <button>
          <Button
            path="result"
            right={true}
            text="Proceed"
            visible={!loading}
          />
        </button>
      )}
    </div>
  );
};

export default Testing;
