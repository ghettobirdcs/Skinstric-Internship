import React from "react";
import Button from "../UI/Button";

const TestingNavigation = ({ showThankYou, loading, currentValue, onNext }) => {
  return (
    <>
      {/* The back button always redirects to the homepage */}
      <Button path="" right={false} text="Back" />

      {!loading && !showThankYou ? (
        <button onClick={onNext}>
          <Button
            path="testing"
            right={true}
            text="Next"
            visible={currentValue !== ""}
          />
        </button>
      ) : (
        <button>
          <Button
            path="result"
            right={true}
            text="Proceed"
            visible={!loading}
          />
        </button>
      )}
    </>
  );
};

export default TestingNavigation;
