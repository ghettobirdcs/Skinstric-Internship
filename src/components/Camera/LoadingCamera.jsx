import React, { useRef } from "react";
import "./LoadingCamera.css";

import TestingBoxes from "../UI/TestingBoxes";

import { useDottedBoxAnimations } from "../../hooks/useDottedBoxAnimations";

const LoadingCamera = () => {
  const containerRef = useRef(null);
  useDottedBoxAnimations(containerRef);
  // useLoadingCameraAnimations(containerRef);

  return (
    <div id="loading-camera" ref={containerRef}>
      <TestingBoxes />
      {/* TODO: Animate icon + learn how to load the camera */}
      <img className="loading-camera__icon" src="/camera-icon.svg" alt="" />
      <p className="loading-camera__para">Setting up camera ...</p>

      <div className="loading-camera__info--container">
        <p className="loading-camera__info--title">
          to get better results make sure to have
        </p>
        <div className="loading-camera__info--list">
          <div className="loading-camera__info">
            <img src="/corrector.svg" alt="" />
            Neutral expression
          </div>
          <div className="loading-camera__info">
            <img src="/corrector.svg" alt="" />
            Frontal pose
          </div>
          <div className="loading-camera__info">
            <img src="/corrector.svg" alt="" />
            Adequate lighting
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCamera;
