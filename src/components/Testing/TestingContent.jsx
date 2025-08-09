import React, { useEffect, useRef } from "react";
import LoadingState from "../UI/LoadingState/LoadingState";

const TestingContent = ({
  loadingMessage = "Processing submission",
  placeholder,
  value,
  setValue,
  validateAndProceed,
  loading,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!loading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleSubmit(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    const success = validateAndProceed(inputValue);
    if (success) setValue(inputValue);
  };

  return (
    <>
      <div className="testing__container">
        <div
          className={`testing__content ${loading && "testing__content--loading"}`}
        >
          <div className="testing__content--para">
            {loading ? (
              loadingMessage
            ) : placeholder === "Proceed for the next step" ? (
              <p className="thank-you">Thank you!</p>
            ) : (
              "click to type"
            )}
          </div>
          <div className="testing__input--wrapper">
            <form onSubmit={handleSubmit}>
              <div className="testing__input--container">
                <span className="testing__content--span">
                  {value || placeholder}
                </span>
                {loading ? (
                  <LoadingState />
                ) : (
                  <>
                    {placeholder === "Proceed for the next step" ? (
                      <div className="proceed-message">{placeholder}</div>
                    ) : (
                      <input
                        ref={inputRef}
                        value={value}
                        name={placeholder}
                        className="testing__content--input"
                        placeholder={placeholder}
                        type="text"
                        spellCheck={false}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e)}
                      />
                    )}
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestingContent;
