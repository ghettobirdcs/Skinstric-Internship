import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/UI/Button";

const Result = () => {
  return (
    <div id="result">
      <Navbar showCode={false} startAnalysis={true} />

      {/* Back btn goes back to the start of /testing */}
      <Button path="testing" right={false} text="Back" />
    </div>
  );
};

export default Result;
