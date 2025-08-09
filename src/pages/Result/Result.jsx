import React, { useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/UI/Button";
import TestingBoxes from "../../components/UI/TestingBoxes";
import { useTestingAnimations } from "../../hooks/useTestingAnimations";

import "./Result.css";

const Result = () => {
  const containerRef = useRef(null);
  // Use the same button hover animations from the testing page
  useTestingAnimations(containerRef);

  return (
    <div id="result" ref={containerRef}>
      <Navbar showCode={false} startAnalysis={true} />

      {/* Back btn goes back to the start of /testing */}
      <Button path="testing" right={false} text="Back" />

      <div className="content__container">
        <div className="content__left">
          <TestingBoxes />
          <div className="result__icon--container">
            <img
              className="result__icon result__icon--camera"
              src="/camera-icon.svg"
              alt="camera"
            />
            <img
              className="result__line camera__line"
              src="/camera-line.svg"
              alt=""
            />
            <p className="result__icon--text camera__text">
              Allow A.I.
              <br />
              to scan your face
            </p>
          </div>
        </div>
        <div className="content__right">
          <TestingBoxes />
          <div className="result__icon--container">
            <img
              className="result__icon result__icon--gallery"
              src="/gallery-icon.svg"
              alt="gallery"
            />
            <img
              className="result__line gallery__line"
              src="/gallery-line.svg"
              alt=""
            />
            <p className="result__icon--text gallery__text">
              Allow A.I.
              <br />
              access gallery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
