import React, { useMemo, useRef, useState } from "react";
import "./Testing.css";

import Navbar from "../../components/Navbar/Navbar";
import TestingBoxes from "../../components/UI/TestingBoxes";
import TestingContent from "../../components/Testing/TestingContent";
import TestingNavigation from "../../components/Testing/TestingNavigation";

import { useButtonHoverAnimations } from "../../hooks/useButtonHoverAnimations";
import { useDottedBoxAnimations } from "../../hooks/useDottedBoxAnimations";
import { usePhaseOne } from "../../hooks/usePhases";

import { toast } from "react-toastify";

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

const Testing = () => {
  const containerRef = useRef(null);
  useButtonHoverAnimations(containerRef);
  useDottedBoxAnimations(containerRef);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  const { loading, submitPhaseOne } = usePhaseOne();

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
        submitPhaseOne(formData).catch(() => {
          toast.error("Something went wrong!");
        });
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

      <TestingNavigation
        onNext={() => validateAndProceed(currentValue)}
        loading={loading}
        currentValue={currentValue}
        showThankYou={currentStep?.id === "Thank you"}
      />
    </div>
  );
};

export default Testing;
