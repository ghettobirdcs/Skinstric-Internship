import React, { useMemo, useRef, useState } from "react";
import "./Testing.css";

import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/UI/Button";

import { useTestingAnimations } from "../../hooks/useTestingAnimations";
import TestingContent from "../../components/Testing/TestingContent";
import { toast } from "react-toastify";
import TestingBoxes from "../../components/UI/TestingBoxes";

const formSteps = [
  {
    id: "name",
    placeholder: "Introduce Yourself",
  },
  {
    id: "from",
    placeholder: "Where are you from?",
  },
];

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
      if (currentStepIndex > 0) setLoading(true);
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

  return (
    <div id="testing" ref={containerRef}>
      <Navbar />
      <p className="testing__header">to start analysis</p>
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

      {!loading && (
        <button onClick={() => validateAndProceed(currentValue)}>
          <Button
            path="testing"
            right={true}
            text="Next"
            visible={currentValue !== ""}
          />
        </button>
      )}
    </div>
  );
};

export default Testing;
