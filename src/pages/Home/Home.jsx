import React from "react";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div id="landing">
      <Navbar />

      <div className="landing__container">
        <div className="landing__sides">
          <h1 className="landing__title">Sophisticated{<br />}skincare</h1>
          <div className="landing__left--border" />
          <div className="landing__left--content">
            <img src="/left-arrow.svg" alt="" />
            <p className="landing__sides--text">DISCOVER A.I.</p>
          </div>
          <div className="landing__right--border" />
          <div className="landing__right--content">
            <p className="landing__sides--text">TAKE TEST</p>
            <img src="/right-arrow.svg" alt="" />
          </div>
          <div className="landing__info--container">
            <p className="landing__info">
              Skinstric developed an A.I. that creates a<br />
              highly-personalized routine tailored to
              <br />
              what your skin needs.
            </p>
            <div className="landing__content">
              <p className="landing__sides--text">ENTER EXPERIENCE</p>
              <img src="/right-arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
