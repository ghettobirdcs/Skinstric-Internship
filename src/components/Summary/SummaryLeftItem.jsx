import React from "react";
import "./SummaryLeftItem.css";

const SummaryLeftItem = ({ index, value, setActiveIndex, active = false }) => {
  return (
    <div
      className={`selector ${index === 1 ? "selector__first" : index === 2 ? "selector__second" : "selector__third"} ${active && "selector--active"}`}
      onClick={() => {
        setActiveIndex(index);
      }}
    >
      {value}
      <span>{index === 1 ? "Race" : index === 2 ? "Age" : "Sex"}</span>
    </div>
  );
};

export default SummaryLeftItem;
