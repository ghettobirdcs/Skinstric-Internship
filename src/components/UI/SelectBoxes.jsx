import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import TestingBoxes from "./TestingBoxes";

const scaleMap = {
  top: 1,
  right: 1.1,
  left: 1.1,
  bottom: 1.2,
};

const opacityMap = {
  top: 1,
  right: 0.75,
  left: 0.75,
  bottom: 0.5,
};

const SelectBoxes = ({ hoveredSide }) => {
  const animBoxRef = useRef();

  useEffect(() => {
    if (!animBoxRef.current) return;

    gsap.set(animBoxRef.current, {
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "center center",
    });
    gsap.killTweensOf(animBoxRef.current);

    if (!hoveredSide) {
      gsap.to(animBoxRef.current, {
        opacity: 0,
        scale: 0.6,
        duration: 0.4,
        ease: "power1.out",
        overwrite: "auto",
      });
      gsap.to(".testing__box", {
        opacity: 1,
      });
      gsap.to(".testing__box--second", {
        opacity: 0.6,
      });
      gsap.to(".testing__box--third", {
        opacity: 0.3,
      });
    } else {
      gsap.to(animBoxRef.current, {
        opacity: opacityMap[hoveredSide] || 1,
        scale: scaleMap[hoveredSide] || 1,
        duration: 0.4,
        ease: "power1.out",
        overwrite: "auto",
      });
      gsap.to(".testing__box", {
        opacity: 0,
      });
    }
  }, [hoveredSide]);

  return (
    <div className="dotted-box__container">
      <TestingBoxes />
      <img
        ref={animBoxRef}
        className="dotted-box select__dotted-box"
        src="/DottedBox.svg"
        alt=""
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          pointerEvents: "none",
          opacity: 0,
        }}
      />
    </div>
  );
};

export default SelectBoxes;
