import React from "react";
import "./SummaryButtons.css";

import { Link } from "react-router-dom";

const SummaryButtons = ({ resetOverrides, confirmOverrides }) => {
  return (
    <div className="summary__buttons">
      <button
        onClick={resetOverrides}
        className="summary__button summary__button--reset"
      >
        Reset
      </button>
      <Link
        onClick={confirmOverrides}
        to="/"
        className="summary__button summary__button--confirm"
      >
        Confirm
      </Link>
    </div>
  );
};

export default SummaryButtons;
