import React from "react";
import { IoTriangle } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Landing.css";

const LandingCenter = () => {
  return (
    <div className="landing__info--container">
      <p className="landing__info">
        Skinstric developed an A.I. that creates a<br />
        highly-personalized routine tailored to
        <br />
        what your skin needs.
      </p>

      <Link to="/testing" className="landing__content">
        <p className="landing__sides--text">ENTER EXPERIENCE</p>
        <div className="landing__btn landing__btn--center">
          <div className="landing__btn--outline" />
          <IoTriangle />
        </div>
      </Link>
    </div>
  );
};

export default LandingCenter;
