import React, { useRef, useState } from "react";
import "./Summary.css";

import Button from "../../components/UI/Button";
import Navbar from "../../components/Navbar/Navbar";
import SummaryLeftItem from "../../components/Summary/SummaryLeftItem";

import { useButtonHoverAnimations } from "../../hooks/useButtonHoverAnimations";
import { useLocalStorageEstimate } from "../../hooks/useLocalStorageEstimate";

const Summary = () => {
  const containerRef = useRef(null);
  useButtonHoverAnimations(containerRef);

  const race = useLocalStorageEstimate("Race");
  const age = useLocalStorageEstimate("Age");
  const gender = useLocalStorageEstimate("Gender");

  const [activeIndex, setActiveIndex] = useState(1);

  const placeholder = (estimate) =>
    estimate.error ? "Unavailable" : `${estimate.label}`;

  return (
    <div id="summary" ref={containerRef}>
      <Navbar showCode={false} demographics={true} />
      <div className="summary__container">
        <SummaryLeftItem
          index={1}
          value={placeholder(race)}
          active={activeIndex === 1}
          setActiveIndex={setActiveIndex}
        />
        <SummaryLeftItem
          index={2}
          value={placeholder(age)}
          active={activeIndex === 2}
          setActiveIndex={setActiveIndex}
        />
        <SummaryLeftItem
          index={3}
          value={placeholder(gender)}
          active={activeIndex === 3}
          setActiveIndex={setActiveIndex}
        />
        {/* TODO: Make components for content value (mid), and corrector (right) */}
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
