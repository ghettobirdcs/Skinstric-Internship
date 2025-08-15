import React from "react";

const CameraInfo = ({ loading = true }) => {
  return (
    <div className={`loading-camera__info--container ${!loading && "active"}`}>
      <p className={`loading-camera__info--title ${!loading && "white-text"}`}>
        to get better results make sure to have
      </p>
      <div className={`loading-camera__info--list`}>
        <div className={`loading-camera__info ${!loading && "white-text"}`}>
          <img
            className={`${!loading && "invert"}`}
            src="/corrector.svg"
            alt=""
          />
          Neutral expression
        </div>
        <div className={`loading-camera__info ${!loading && "white-text"}`}>
          <img
            className={`${!loading && "invert"}`}
            src="/corrector.svg"
            alt=""
          />
          Frontal pose
        </div>
        <div className={`loading-camera__info ${!loading && "white-text"}`}>
          <img
            className={`${!loading && "invert"}`}
            src="/corrector.svg"
            alt=""
          />
          Adequate lighting
        </div>
      </div>
    </div>
  );
};

export default CameraInfo;
