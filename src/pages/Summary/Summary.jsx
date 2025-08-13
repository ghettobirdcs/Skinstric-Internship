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

const Summary = () => {
  const containerRef = useRef(null);
  useButtonHoverAnimations(containerRef);

  const race = useLocalStorageEstimate("Race");
  const age = useLocalStorageEstimate("Age");
  const gender = useLocalStorageEstimate("Gender");

  const [activeType, setActiveType] = useState("Race");
  const [overrides, setOverrides] = useState({});

  const raceEffective = useMemo(() => {
    const ov = overrides.Race;
    return ov ? { ...race, label: ov.label, value: ov.value } : race;
  }, [race, overrides]);

  const ageEffective = useMemo(() => {
    const ov = overrides.Age;
    return ov ? { ...age, label: ov.label, value: ov.value } : age;
  }, [age, overrides]);

  const genderEffective = useMemo(() => {
    const ov = overrides.Gender;
    return ov ? { ...gender, label: ov.label, value: ov.value } : gender;
  }, [gender, overrides]);

  const estimatesByType = {
    Race: raceEffective,
    Age: ageEffective,
    Gender: genderEffective,
  };

  const activeEstimate = estimatesByType[activeType] || {
    label: "",
    value: null,
    percentages: {},
    error: null,
  };

  // NOTE: Contains both the original lists and the corrections - preserves original data
  // const demographics = useMemo(
  //   () => ({
  //     Race: {
  //       label: raceEffective.label,
  //       value: raceEffective.value,
  //       list: race.listItem,
  //     },
  //     Age: {
  //       label: ageEffective.label,
  //       value: ageEffective.value,
  //       list: age.listItem,
  //     },
  //     Gender: {
  //       label: genderEffective.label,
  //       value: genderEffective.value,
  //       list: gender.listItem,
  //     },
  //     overrides, // include for debugging
  //   }),
  //   [
  //     raceEffective.label,
  //     raceEffective.value,
  //     race.listItem,
  //     ageEffective.label,
  //     ageEffective.value,
  //     age.listItem,
  //     genderEffective.label,
  //     genderEffective.value,
  //     gender.listItem,
  //     overrides,
  //   ],
  // );

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
          <SummaryLeftItem
            index={1}
            value={placeholder(raceEffective)}
            active={activeType === "Race"}
            setActiveType={setActiveType}
          />
          <SummaryLeftItem
            index={2}
            value={placeholder(ageEffective)}
            active={activeType === "Age"}
            setActiveType={setActiveType}
          />
          <SummaryLeftItem
            index={3}
            value={placeholder(genderEffective)}
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
      <SummaryButtons resetOverrides={() => setOverrides({})} />
    </div>
  );
};

export default Summary;
