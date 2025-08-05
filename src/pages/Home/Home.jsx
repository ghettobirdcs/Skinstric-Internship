import React, { useRef } from "react";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import LandingLeft from "../../components/Landing/LandingLeft";
import LandingRight from "../../components/Landing/LandingRight";
import LandingCenter from "../../components/Landing/LandingCenter";
import { useHomepageAnimations } from "../../hooks/useHomepageAnimations";

const Home = () => {
  const containerRef = useRef(null);
  useHomepageAnimations(containerRef);

  return (
    <div id="landing" ref={containerRef}>
      <Navbar />
      <div className="landing__container">
        <div className="landing__sides">
          <LandingLeft />
          <h1 className="landing__title">
            Sophisticated{" "}
            <span className="landing__title--secondary">skincare</span>
          </h1>
          <LandingRight />
          <LandingCenter />
        </div>
      </div>
    </div>
  );
};

export default Home;
