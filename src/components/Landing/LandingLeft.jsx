import React from "react";
import Button from "../UI/Button";

const LandingLeft = () => {
  return (
    <>
      <div className="landing__left--border" />
      <div className="landing__left--border left__border--2 border__second" />
      <div className="landing__left--border left__border--3 border__third" />

      <Button path="#" text="DISCOVER A.I." right={false} />
    </>
  );
};

export default LandingLeft;
