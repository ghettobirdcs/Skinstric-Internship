import React from "react";
import "./SummaryCorrector.css";

const SummaryCorrector = ({ type = "race" }) => {
  return (
    <div className="summary__corrector">
      <div className="summary__half summary__left">
        <p className="summary__para">{type}</p>
        {/* TODO: LIST LABELS */}
      </div>
      <div className="summary__half summary__right">
        <p className="summary__para">A.I. Confidence</p>
        {/* TODO: LIST PERCENTAGES */}
      </div>
    </div>
  );
};

export default SummaryCorrector;
