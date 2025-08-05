import React from "react";

const TestingContent = ({ placeholder, value, setValue }) => {
  return (
    <div className="testing__container">
      <div className="testing__border"></div>
      <div className="testing__border testing__border--second"></div>
      <div className="testing__border testing__border--third"></div>
      <div className="testing__content">
        <div className="testing__input--container">
          <p className="testing__content--para">click to type</p>
          <input
            value={value}
            name={placeholder}
            className="testing__content--input"
            placeholder={placeholder}
            type="text"
            onChange={(e) => setValue(e.target.value)}
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
};

export default TestingContent;
