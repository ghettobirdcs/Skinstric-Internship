import React from "react";
import "./SummaryCorrector.css";

const SummaryCorrector = ({ type = "race", listItem }) => {
  return (
    <div className="summary__corrector">
      <div className="summary__half summary__left">
        <p className="summary__para">{type}</p>
        <ul className="summary__list summary__list--labels">
          {listItem.map((item) => (
            <li key={item.label} className={`summary__list--item`}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="summary__half summary__right">
        <p className="summary__para">A.I. Confidence</p>
        <ul className="summary__list summary__list--values">
          {listItem.map((item) => (
            <li key={item.label} className={`summary__list--item`}>
              {item.value}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SummaryCorrector;
