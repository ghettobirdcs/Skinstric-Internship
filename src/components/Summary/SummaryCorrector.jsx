import React from "react";
import "./SummaryCorrector.css";

// The first (highest) value should automatically be the 'active' item in the list.
// The classname for an active item is .summary__list--item--active.
// for an active item, the summary__list--icon src should be /corrector-checked.svg instead of /corrector.svg
// When the user clicks on an item, that item should then be set to 'active' and the previous active item should be unset
// Also, we will have to update the left side block (SummaryLeftItem) to reflect the new 'active' item since the user deemed the active value to be more accurate than the one the A.I. has provided.
// I think in order to update the left side, we will have to update the local storage item itself. For now, just write a placeholder function where this logic will take place instead of trying
// to implement that now.
const SummaryCorrector = ({ type = "race", listItem }) => {
  return (
    <div className="summary__corrector">
      <div className="summary__half summary__left">
        <p className="summary__para">{type}</p>
        <ul className="summary__list summary__list--labels">
          {listItem.map((item) => (
            <li key={item.label} className={`summary__list--item`}>
              <img
                className="summary__list--icon"
                src="/corrector.svg"
                alt=""
              />
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
