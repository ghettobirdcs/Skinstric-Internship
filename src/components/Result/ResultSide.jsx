import React, { useState } from "react";
import { Link } from "react-router-dom";

import TestingBoxes from "../UI/TestingBoxes";

const ResultSide = ({
  children,
  side = "left",
  imageInputRef,
  handleImageChange,
}) => {
  const [showDialog, setShowDialog] = useState(false);

  const showDialogTransition = (isOpen) => {
    if (isOpen) {
      setShowDialog(false);
      document.querySelector(".content__right").classList.remove("fade");
    } else {
      setShowDialog(true);
      document.querySelector(".content__right").classList.add("fade");
    }
  };

  return (
    <div className={`content__${side}`}>
      <TestingBoxes />
      <div className={`result__icon--container`}>
        <img
          className={`result__icon result__icon--${side === "left" ? "camera" : "gallery"}`}
          src={`${side === "left" ? "/camera-icon.svg" : "/gallery-icon.svg"}`}
          alt={`${side === "left" ? "camera" : "gallery"}`}
          onClick={
            side === "right"
              ? () => imageInputRef?.current?.click()
              : () => showDialogTransition(false)
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

        {showDialog && (
          <div className="allow-camera">
            <p className="allow-camera__para">
              Allow A.I. to access your camera
            </p>
            <div className="allow-camera__buttons">
              <button
                onClick={() => showDialogTransition(true)}
                className="allow-camera__button allow-camera__button--deny"
              >
                Deny
              </button>
              <Link
                to="/camera"
                className="allow-camera__button allow-camera__button--allow"
              >
                Allow
              </Link>
            </div>
          </div>
        )}
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
