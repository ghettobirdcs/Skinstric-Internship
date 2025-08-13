import React, { useEffect, useState } from "react";
import "./SummaryCorrector.css";

const SummaryCorrector = ({
  type = "Race",
  listItem = [],
  onCorrect,
  selectedLabel = undefined,
}) => {
  const controlled = selectedLabel !== undefined;

  const [internalActive, setInternalActive] = useState("");

  useEffect(() => {
    if (!controlled) {
      setInternalActive(listItem[0]?.label || "");
    }
  }, [listItem, controlled]);

  const activeLabel = controlled ? selectedLabel : internalActive;

  const handleSelect = (item) => {
    if (item.label === activeLabel) return;
    if (!controlled) {
      setInternalActive(item.label);
    }
    if (typeof onCorrect === "function") {
      onCorrect(type, item.label, item.value, listItem);
    }
  };

  return (
    <div className="summary__corrector">
      <ul className="summary__list">
        <li className="summary__list--item summary__list--title">
          <p className="summary__para">{type}</p>
          <p className="summary__para">A.I. Confidence</p>
        </li>
        {listItem.map((item) => {
          const isActive = item.label === activeLabel;
          return (
            <li
              key={item.label}
              className={`summary__list--item ${
                isActive ? "summary__list--item--active" : ""
              }`}
              onClick={() => handleSelect(item)}
            >
              <div className="summary__item-left">
                <img
                  className="summary__list--icon"
                  src={isActive ? "/corrector-checked.svg" : "/corrector.svg"}
                  alt=""
                />
                <span className="summary__item-label">{item.label}</span>
              </div>
              <span className="summary__item-value">{item.value}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SummaryCorrector;
