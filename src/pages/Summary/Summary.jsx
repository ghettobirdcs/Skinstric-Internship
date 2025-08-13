import React, { useRef, useState } from "react";
import "./Summary.css";

import Button from "../../components/UI/Button";
import Navbar from "../../components/Navbar/Navbar";
import SummaryLeftItem from "../../components/Summary/SummaryLeftItem";
import SummaryContent from "../../components/Summary/SummaryContent";

import { useButtonHoverAnimations } from "../../hooks/useButtonHoverAnimations";
import { useLocalStorageEstimate } from "../../hooks/useLocalStorageEstimate";
import SummaryCorrector from "../../components/Summary/SummaryCorrector";

const Summary = () => {
  const containerRef = useRef(null);
  useButtonHoverAnimations(containerRef);

  const race = useLocalStorageEstimate("Race");
  const age = useLocalStorageEstimate("Age");
  const gender = useLocalStorageEstimate("Gender");

  const [activeType, setActiveType] = useState("Race");

  const estimatesByType = {
    Race: race,
    Age: age,
    Gender: gender,
  };

  const activeEstimate = estimatesByType[activeType] || {
    label: "",
    value: null,
    percentages: {},
    error: null,
  };

  const placeholder = (estimate) =>
    estimate.error ? "Unavailable" : `${estimate.label}`;

  return (
    <div id="summary" ref={containerRef}>
      <Navbar showCode={false} demographics={true} />
      <div className="summary__container">
        <div className="summary__item--container">
          <SummaryLeftItem
            index={1}
            value={placeholder(race)}
            active={activeType === "Race"}
            setActiveType={setActiveType}
          />
          <SummaryLeftItem
            index={2}
            value={placeholder(age)}
            active={activeType === "Age"}
            setActiveType={setActiveType}
          />
          <SummaryLeftItem
            index={3}
            value={placeholder(gender)}
            active={activeType === "Gender"}
            setActiveType={setActiveType}
          />
        </div>
        <SummaryContent
          type={activeType}
          title={activeEstimate.label}
          value={activeEstimate.value?.toFixed(0)}
        />
        <SummaryCorrector
          type={activeType}
          listItem={activeEstimate.listItem}
        />
        {/* TODO: Make component for 'reset' + 'confirm' btn */}
      </div>
      <p className="summary__info">
        If A.I. estimate is wrong, select the correct one.
      </p>
      <Button path="select" text="Back" right={false} />
    </div>
  );
};

export default Summary;
