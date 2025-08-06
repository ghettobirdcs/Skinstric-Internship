import React from "react";
import "./LoadingState.css";

const LoadingState = () => {
  return (
    <div className="loading__container">
      <div className="loading__dot" />
      <div className="loading__dot" />
      <div className="loading__dot" />
    </div>
  );
};

export default LoadingState;
