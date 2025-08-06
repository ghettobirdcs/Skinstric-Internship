import React from "react";
import LoadingState from "../UI/LoadingState/LoadingState";

const TestingContent = ({
  placeholder,
  value,
  setValue,
  handleKeyDown,
  loading,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="dotted-box__container">
        <img className="dotted-box testing__box" src="/DottedBox.svg" alt="" />
        <img
          className="dotted-box testing__box testing__box--second"
          src="/DottedBox.svg"
          alt=""
        />
        <img
          className="dotted-box testing__box testing__box--third"
          src="/DottedBox.svg"
          alt=""
        />
      </div>
      <div className="testing__container">
        <div className="testing__content">
          <p className="testing__content--para">
            {loading ? "Processing submission" : "click to type"}
          </p>
          <div className="testing__input--wrapper">
            <form onSubmit={handleSubmit}>
              <div className="testing__input--container">
                <span className="testing__content--span">
                  {value || placeholder}
                </span>
                {loading ? (
                  <LoadingState />
                ) : (
                  <input
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestingContent;
