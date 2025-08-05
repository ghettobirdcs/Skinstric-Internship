import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/UI/Button";
import "./Testing.css";

const Testing = () => {
  return (
    <div id="testing">
      <Navbar />
      <p className="testing__header">to start analysis</p>

      {/* TODO: Animate back button */}
      <Button path="" right={false} text="Back" />
    </div>
  );
};

export default Testing;
