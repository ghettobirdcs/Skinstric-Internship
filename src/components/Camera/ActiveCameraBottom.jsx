import React from "react";
import Button from "../UI/Button";
import CameraInfo from "./CameraInfo";

const ActiveCameraBottom = ({
  reviewMode,
  setReviewMode,
  loadingCamera,
  handleUsePhoto,
}) => {
  return (
    <>
      <CameraInfo
        loading={false}
        style={{ display: loadingCamera ? "none" : "block" }}
      />

      <Button
        right={false}
        text={`${reviewMode ? "Back" : ""}`}
        path={`${reviewMode ? "camera" : "result"}`}
        invert={true}
        onClick={() => {
          if (reviewMode) setReviewMode(false);
        }}
        visible={!loadingCamera}
      />

      <Button
        right={true}
        text="Proceed"
        path="select"
        invert={true}
        visible={reviewMode && !loadingCamera}
        onClick={handleUsePhoto}
      />
    </>
  );
};

export default ActiveCameraBottom;
