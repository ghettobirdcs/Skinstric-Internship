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
        text="Back"
        path="camera"
        invert={true}
        onClick={() => {
          setReviewMode(false);
        }}
        visible={reviewMode && !loadingCamera}
      />

      <Button
        right={true}
        text="Proceed"
        path="select"
        invert={true}
        visible={reviewMode && !loadingCamera}
        onClick={handleUsePhoto}
      />

      <Button
        path="result"
        right={false}
        text=""
        invert={true}
        visible={!reviewMode && !loadingCamera}
      />
    </>
  );
};

export default ActiveCameraBottom;
