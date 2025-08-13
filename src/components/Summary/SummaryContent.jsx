import React from "react";
import "./SummaryContent.css";

const SummaryContent = ({ type, title, value }) => {
  return (
    <div className="summary__content">
      <span
        className={`summary__title ${type === "Gender" ? "summary__title--uppercase" : type === "Race" ? "summary__title--capitalize" : ""}`}
      >
        {title} {type === "Age" && "y.o."}
      </span>
      {/* TODO: Learn how to make a circular percentile display */}
      <div className="summary__circle">
        <span className="summary__circle--value">{value}</span>
        <span className="summary__percentage">%</span>
      </div>
    </div>
  );
};

export default SummaryContent;
