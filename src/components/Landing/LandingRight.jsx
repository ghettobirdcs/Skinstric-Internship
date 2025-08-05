import React from "react";
import Button from "../UI/Button";

const LandingRight = () => {
  return (
    <>
      <div className="landing__right--border" />
      <div className="landing__right--border right__border--2 border__second" />
      <div className="landing__right--border right__border--3 border__third" />

      <Button path="testing" text="TAKE TEST" right={true} />
    </>
  );
};

export default LandingRight;
