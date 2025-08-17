import React from "react";
import { toast } from "react-toastify";

import Webcam from "react-webcam";
import Navbar from "../Navbar/Navbar";
import ActiveCameraBottom from "./ActiveCameraBottom";

const ActiveCamera = ({
  loadingCamera,
  webcamRef,
  setLoading,
  takePicture,
  handleUsePhoto,
  reviewMode,
  setReviewMode,
  capturedImage,
  showAnalysis,
}) => {
  return (
    <div className={`camera--active ${!loadingCamera}`}>
      <Navbar camera={true} showCode={false} showAnalysis={showAnalysis} />
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{ facingMode: "user" }}
        onUserMedia={() => setLoading(false)}
        style={{
          display: loadingCamera || reviewMode ? "none" : "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        className="camera__webcam"
        onUserMediaError={(e) => toast.error(`Error ${e.code}: ${e.message}`)}
      />

      <div
        className="capture-icon__container"
        style={{ display: loadingCamera ? "none" : "flex" }}
        onClick={takePicture}
      >
        <p className="capture-icon__para">take picture</p>
        <img src="/capture-icon.svg" alt="" />
      </div>

      {reviewMode && (
        <>
          <p className="camera__webcam--great-shot">great shot!</p>
          <img
            src={capturedImage}
            alt="Your selfie"
            className="camera__webcam"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </>
      )}

      <ActiveCameraBottom
        handleUsePhoto={handleUsePhoto}
        setReviewMode={setReviewMode}
        loadingCamera={loadingCamera}
        reviewMode={reviewMode}
      />
    </div>
  );
};

export default ActiveCamera;
