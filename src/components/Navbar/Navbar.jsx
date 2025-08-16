import React from "react";
import "./Navbar.css";

const Navbar = ({
  showCode = true,
  startAnalysis = false,
  editAnalysis = false,
  demographics = false,
}) => {
  return (
    <div className="navbar">
      <div className="navbar__text">
        <button className="navbar__text--primary">skinstric</button>
        <img src="/bracket-left.svg" alt="" />
        <p className="navbar__text--secondary">intro</p>
        <img src="/bracket-right.svg" alt="" />
      </div>
      {showCode && <button className="navbar__btn">enter code</button>}
      {startAnalysis && <p className="testing__header">to start analysis</p>}
      {editAnalysis && (
        <>
          <p className="testing__header">A.I. Analysis</p>
          <p className="testing__header testing__header--secondary">
            a.i. has estimated the following.
            <br />
            fix estimated information if needed.
          </p>
        </>
      )}
      {demographics && (
        <>
          <p className="testing__header">A.I. Analysis</p>
          <p className="testing__header summary__header--large">DEMOGRAPHICS</p>
          <p className="testing__header summary__header--secondary">
            PREDICTED RACE &amp; AGE
          </p>
        </>
      )}
    </div>
  );
};

export default Navbar;
