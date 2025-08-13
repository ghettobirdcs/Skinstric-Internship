import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import ResultSide from "../../components/Result/ResultSide";
import TestingContent from "../../components/Testing/TestingContent";
import TestingBoxes from "../../components/UI/TestingBoxes";
import Button from "../../components/UI/Button";

import { usePhaseTwo } from "../../hooks/usePhases";
import { useDottedBoxAnimations } from "../../hooks/useDottedBoxAnimations";
import { useButtonHoverAnimations } from "../../hooks/useButtonHoverAnimations";

import "./Result.css";
import { toast } from "react-toastify";

const Result = () => {
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const leftImageInputRef = useRef(null);
  const rightImageInputRef = useRef(null);

  const { loading, submitPhaseTwo } = usePhaseTwo();

  useDottedBoxAnimations(containerRef);
  useButtonHoverAnimations(containerRef);

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    if (!image) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result;
      await submitPhaseTwo(base64Image).catch(() => {
        toast.error("Something went wrong!");
      });
      navigate("/select");
    };
    reader.readAsDataURL(image);
  };

  return (
    <div id="result" ref={containerRef}>
      {/* NOTE: Boxes cannot be rendered conditionally while being animated with GSAP */}
      <TestingBoxes
        className={`${loading && "dotted-boxes__loading"}`}
        style={{ opacity: loading ? 1 : 0 }}
      />

      {loading ? (
        <>
          {/* We can re use the testing content component exclusively for loading this part */}
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
