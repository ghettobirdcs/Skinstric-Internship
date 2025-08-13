import React from "react";
import "./SummaryLeftItem.css";

const SummaryLeftItem = ({ index, value, setActiveType, active = false }) => {
  return (
    <div
      className={`selector ${index === 1 ? "selector__first" : index === 2 ? "selector__second" : "selector__third"} ${active && "selector--active"}`}
      onClick={() => {
        index === 1
          ? setActiveType("Race")
          : index === 2
            ? setActiveType("Age")
            : setActiveType("Gender");
      }}
    >
      {value}
      <span>{index === 1 ? "Race" : index === 2 ? "Age" : "Sex"}</span>
    </div>
  );
};

export default SummaryLeftItem;
