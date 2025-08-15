import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Camera.css";

import TestingContent from "../Testing/TestingContent";
import TestingBoxes from "../UI/TestingBoxes";
import CameraInfo from "./CameraInfo";
import Webcam from "react-webcam";
import Button from "../UI/Button";

import { useDottedBoxAnimations } from "../../hooks/useDottedBoxAnimations";
import { useButtonHoverAnimations } from "../../hooks/useButtonHoverAnimations";
import { usePhaseTwo } from "../../hooks/usePhases";
import { toast } from "react-toastify";

const Camera = () => {
  const navigate = useNavigate();

  const containerRef = useRef(null);
  useDottedBoxAnimations(containerRef);
  useButtonHoverAnimations(containerRef);
  // useLoadingCameraAnimations(containerRef);

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
          {/* TODO: Animate icon for loading state */}
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

          <div
            className={`camera--active ${!loadingCamera && "fill-background"}`}
          >
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={{ facingMode: "user" }}
              onUserMedia={() => setLoading(false)}
              style={{
                display: loadingCamera ? "none" : "block",
                width: "100%",
                height: "100%",
              }}
              className="camera__webcam"
            />

            {/* TODO: Hover animation for capture icon */}
            <div
              className="capture-icon__container"
              style={{ display: loadingCamera ? "none" : "flex" }}
              onClick={takePicture}
            >
              <p className="capture-icon__para">take picture</p>
              <img src="/capture-icon.svg" alt="" />
            </div>

            <CameraInfo
              loading={false}
              style={{ display: loadingCamera ? "none" : "block" }}
            />
            <Button
              path="result"
              right={false}
              text="Back"
              invert={true}
              visible={!loadingCamera}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Camera;
