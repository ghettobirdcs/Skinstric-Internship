import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Camera.css";

import TestingContent from "../Testing/TestingContent";
import TestingBoxes from "../UI/TestingBoxes";
import CameraInfo from "./CameraInfo";
import ActiveCamera from "./ActiveCamera";

import { useDottedBoxAnimations } from "../../hooks/useDottedBoxAnimations";
import { useButtonHoverAnimations } from "../../hooks/useButtonHoverAnimations";
import { useLoadingCameraAnimations } from "../../hooks/useLoadingCameraAnimations";
import { usePhaseTwo } from "../../hooks/usePhases";
import { toast } from "react-toastify";

const Camera = () => {
  const navigate = useNavigate();

  const containerRef = useRef(null);
  useDottedBoxAnimations(containerRef);
  useButtonHoverAnimations(containerRef);
  useLoadingCameraAnimations(containerRef);

  const { loading, submitPhaseTwo } = usePhaseTwo();

  const webcamRef = useRef(null);

  const [loadingCamera, setLoading] = useState(true);

  const takePicture = async () => {
    if (webcamRef.current) {
      const screenshot = webcamRef.current.getScreenshot();
      await submitPhaseTwo(screenshot).catch(() => {
        toast.error("Something went wrong!");
      });

      localStorage.setItem("uploadedImage", screenshot);
      navigate("/select");
    }
  };

  return (
    <div id="camera" ref={containerRef}>
      <TestingBoxes style={{ opacity: loading || loadingCamera ? "1" : "0" }} />

      {/* LOADING STATE FOR AFTER CAPTURE HAS BEEN TAKEN */}
      {loading ? (
        <TestingContent
          loading={true}
          loadingMessage="PREPARING YOUR ANALYSIS..."
          placeholder="placeholder"
          value=""
          setValue={() => {}}
          validateAndProceed={() => true}
        />
      ) : (
        <>
          {/* LOADING STATE WHILE CAMERA IS BEING SET UP */}
          {loadingCamera && (
            <>
              <div className="loading-camera__container">
                <img
                  className="loading-camera__icon"
                  src="/camera-icon.svg"
                  alt=""
                />
                <p className="loading-camera__para">Setting up camera ...</p>
                <CameraInfo />
              </div>
            </>
          )}

          {/* CAPTURE SCREEN */}
          <ActiveCamera
            loadingCamera={loadingCamera}
            takePicture={takePicture}
            webcamRef={webcamRef}
            setLoading={setLoading}
          />
        </>
      )}
    </div>
  );
};

export default Camera;
