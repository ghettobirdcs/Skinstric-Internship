import React, { useMemo, useRef, useState } from "react";
import "./Summary.css";

import Button from "../../components/UI/Button";
import Navbar from "../../components/Navbar/Navbar";
import SummaryLeftItem from "../../components/Summary/SummaryLeftItem";
import SummaryContent from "../../components/Summary/SummaryContent";
import SummaryCorrector from "../../components/Summary/SummaryCorrector";
import SummaryButtons from "../../components/Summary/SummaryButtons";

import { useButtonHoverAnimations } from "../../hooks/useButtonHoverAnimations";
import { useLocalStorageEstimate } from "../../hooks/useLocalStorageEstimate";

const TYPES = ["Race", "Age", "Gender"];

const Summary = () => {
  const containerRef = useRef(null);
  useButtonHoverAnimations(containerRef);

  const raceEstimate = useLocalStorageEstimate("demographics", "Race");
  const ageEstimate = useLocalStorageEstimate("demographics", "Age");
  const genderEstimate = useLocalStorageEstimate("demographics", "Gender");

  const estimates = {
    Race: raceEstimate,
    Age: ageEstimate,
    Gender: genderEstimate,
  };

  const [activeType, setActiveType] = useState("Race");
  const [overrides, setOverrides] = useState({});

  const effectiveEstimates = useMemo(
    () =>
      TYPES.reduce((acc, type) => {
        const est = estimates[type];
        const ov = overrides[type];
        acc[type] = ov ? { ...est, label: ov.label, value: ov.value } : est;
        return acc;
      }, {}),
    [estimates, overrides],
  );

  const activeEstimate = effectiveEstimates[activeType] || {
    label: "",
    value: null,
    percentages: {},
    error: null,
  };

  const corrections = useMemo(
    () =>
      TYPES.reduce((acc, type) => {
        acc[type] = {
          label: effectiveEstimates[type].label,
          value: effectiveEstimates[type].value,
        };
        return acc;
      }, {}),
    [effectiveEstimates, estimates],
  );

  const handleCorrect = (type, newLabel, newValue) => {
    setOverrides((prev) => ({
      ...prev,
      [type]: { label: newLabel, value: newValue },
    }));
  };

  const placeholder = (estimate) =>
    estimate.error ? "Unavailable" : `${estimate.label}`;

  return (
    <div id="summary" ref={containerRef}>
      <Navbar showCode={false} demographics={true} />
      <div className="summary__container">
        <div className="summary__item--container">
          {TYPES.map((type, idx) => (
            <SummaryLeftItem
              key={type}
              index={idx + 1}
              value={placeholder(effectiveEstimates[type])}
              active={activeType === type}
              setActiveType={setActiveType}
            />
          ))}
        </div>
        <SummaryContent
          type={activeType}
          title={activeEstimate.label}
          value={activeEstimate.value?.toFixed(0)}
        />
        <SummaryCorrector
          type={activeType}
          listItem={activeEstimate.listItem || []}
          onCorrect={handleCorrect}
          selectedLabel={overrides[activeType]?.label}
        />
      </div>

      {/* BACK BUTTON - to /select */}
      <Button path="select" text="Back" right={false} />

      <p className="summary__info">
        If A.I. estimate is wrong, select the correct one.
      </p>

      {/* CONFIRM AND RESET BUTTONS */}
      <SummaryButtons
        confirmOverrides={() =>
          localStorage.setItem("corrections", JSON.stringify(corrections))
        }
        resetOverrides={() => setOverrides({})}
      />
    </div>
  );
};

export default Summary;
