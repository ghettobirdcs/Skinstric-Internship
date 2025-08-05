import React, { useRef } from "react";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import LandingSide from "../../components/Landing/LandingSide";
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
          <LandingSide path="#" buttonText="DISCOVER A.I." right={false} />

          <h1 className="landing__title">
            Sophisticated{" "}
            <span className="landing__title--secondary">skincare</span>
          </h1>

          <LandingSide path="testing" buttonText="TAKE TEST" right={true} />

          {/* Replacement for the sides - only shows on small screens */}
          <LandingCenter />
        </div>
      </div>
    </div>
  );
};

export default Home;
