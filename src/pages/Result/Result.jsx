import axios from "axios";
import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ResultSide from "../../components/Result/ResultSide";
import TestingContent from "../../components/Testing/TestingContent";
import Button from "../../components/UI/Button";
import TestingBoxes from "../../components/UI/TestingBoxes";
import { useTestingAnimations } from "../../hooks/useTestingAnimations";

import "./Result.css";

const Result = () => {
  const containerRef = useRef(null);
  const leftImageInputRef = useRef(null);
  const rightImageInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  // Use the same button hover animations from the testing page
  useTestingAnimations(containerRef);

  const handleImageChange = (event) => {
    setLoading(true);

    const image = event.target.files[0];
    if (!image) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result;
      // Post base64 encoded string to phase 2 API
      await postPhaseTwo(base64Image);
    };
    reader.readAsDataURL(image);
  };

  async function postPhaseTwo(base64Image) {
    const { data } = await axios.post(
      "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
      { image: base64Image },
    );
    setResult(data.data);

    // setLoading(false);
  }

  return (
    <div id="result" ref={containerRef}>
      {loading ? (
        <>
          {/* We can re use the testing loading components */}
          <TestingBoxes />
          <TestingContent
            loading={true}
            loadingMessage="PREPARING YOUR ANALYSIS..."
            placeholder="placeholder"
            value=""
            setValue={() => {}}
            validateAndProceed={() => true}
          />
        </>
      ) : (
        <>
          <Navbar showCode={false} startAnalysis={true} />

          {/* Back btn goes back to the start of /testing */}
          <Button path="testing" right={false} text="Back" />

          <div className="content__container">
            <ResultSide
              side="left"
              imageInputRef={leftImageInputRef}
              handleImageChange={handleImageChange}
            >
              Allow A.I.
              <br />
              Access to camera
            </ResultSide>

            <ResultSide
              side="right"
              imageInputRef={rightImageInputRef}
              handleImageChange={handleImageChange}
            >
              Allow A.I
              <br />
              access gallery
            </ResultSide>
          </div>
        </>
      )}
    </div>
  );
};

export default Result;
