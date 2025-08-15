import React from "react";
import { toast } from "react-toastify";

import Button from "../UI/Button";
import Webcam from "react-webcam";
import CameraInfo from "./CameraInfo";

const ActiveCamera = ({
  loadingCamera,
  takePicture,
  webcamRef,
  setLoading,
}) => {
  return (
    <div className={`camera--active ${!loadingCamera && "fill-background"}`}>
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
  );
};

export default ActiveCamera;
