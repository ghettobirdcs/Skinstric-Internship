import React, { useMemo } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "./SummaryContent.css";

const SummaryContent = ({ type, title, value }) => {
  const titleClass =
    type === "Gender"
      ? "summary__title--uppercase"
      : type === "Race"
        ? "summary__title--capitalize"
        : "";

  const progressStyles = useMemo(
    () =>
      buildStyles({
        pathColor: "#1A1B1C",
        trailColor: "#E1E1E2",
        textColor: "#1A1B1C",
        textSize: "40px",
        strokeLinecap: "round",
        pathTransitionDuration: 0.6,
      }),
    [],
  );

  return (
    <div className="summary__content">
      <span className={`summary__title ${titleClass}`}>
        {title} {type === "Age" && "y.o."}
      </span>

      <div className="summary__circle">
        <CircularProgressbar
          value={value}
          strokeWidth={1}
          styles={progressStyles}
        />
        <div className="summary__circle__overlay">
          <span className="summary__circle--value">{value}</span>
          <span className="summary__percentage">%</span>
        </div>
      </div>
    </div>
  );
};

export default SummaryContent;
