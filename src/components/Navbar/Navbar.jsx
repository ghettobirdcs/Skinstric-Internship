import React from "react";
import "./Navbar.css";

const Navbar = ({ showCode = true, startAnalysis = false }) => {
  return (
    <div className="navbar">
      <div className="navbar__text">
        <a href="#" className="navbar__text--primary">
          skinstric
        </a>
        <img src="/bracket-left.svg" alt="" />
        <p className="navbar__text--secondary">intro</p>
        <img src="/bracket-right.svg" alt="" />
      </div>
      {showCode && <button className="navbar__btn">enter code</button>}
      {startAnalysis && <p className="testing__header">to start analysis</p>}
    </div>
  );
};

export default Navbar;
