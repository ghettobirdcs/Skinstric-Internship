import React from "react";
import "./SummaryLeftItem.css";

const SummaryLeftItem = ({ index, value }) => {
  return (
    <div
      className={`selector ${index === 1 ? "selector__first" : index === 2 ? "selector__second" : "selector__third"}`}
    >
      {value}
      <br />
      {index === 1 ? "Race" : index === 2 ? "Age" : "Sex"}
    </div>
  );
};

export default SummaryLeftItem;
