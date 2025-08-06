import React from "react";

const TestingContent = ({ placeholder, value, setValue, handleKeyDown }) => {
  return (
    <>
      <div className="dotted-box__container">
        <img className="dotted-box testing__box" src="/DottedBox.svg" alt="" />
        <img
          className="dotted-box testing__box--second"
          src="/DottedBox.svg"
          alt=""
        />
        <img
          className="dotted-box testing__box--third"
          src="/DottedBox.svg"
          alt=""
        />
      </div>
      <div className="testing__container">
        <div className="testing__content">
          <p className="testing__content--para">click to type</p>
          <div className="testing__input--wrapper">
            {/* TODO: Find out how to make this form work with validated input */}
            <form className="testing__input--container">
              <span className="testing__content--span">
                {value || placeholder}
              </span>
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestingContent;
