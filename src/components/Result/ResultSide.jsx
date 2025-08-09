import React from "react";
import TestingBoxes from "../UI/TestingBoxes";

const ResultSide = ({
  children,
  side = "left",
  imageInputRef,
  handleImageChange,
}) => {
  return (
    <div className={`content__${side}`}>
      <TestingBoxes />
      <div className={`result__icon--container`}>
        <img
          className={`result__icon result__icon--${side === "left" ? "camera" : "gallery"}`}
          src={`${side === "left" ? "/camera-icon.svg" : "/gallery-icon.svg"}`}
          alt={`${side === "left" ? "camera" : "gallery"}`}
          onClick={
            side === "right" ? () => imageInputRef?.current?.click() : undefined
          }
        />
        <img
          className={`result__line ${side === "left" ? "camera__line" : "gallery__line"}`}
          src={`${side === "left" ? "/camera-line.svg" : "/gallery-line.svg"}`}
          alt=""
        />
        <p
          className={`result__icon--text ${side === "left" ? "camera__text" : "gallery__text"}`}
        >
          {children}
        </p>
      </div>
      {side === "right" && (
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={imageInputRef}
          onChange={handleImageChange}
        />
      )}
    </div>
  );
};

export default ResultSide;
