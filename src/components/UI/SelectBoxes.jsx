import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const scaleMap = {
  top: 1.1,
  right: 1.2,
  left: 1.2,
  bottom: 1.3,
};

const opacityMap = {
  top: 1,
  right: 0.6,
  left: 0.6,
  bottom: 0.3,
};

const SelectBoxes = ({ hoveredSide }) => {
  const animBoxRef = useRef();

  useEffect(() => {
    if (!animBoxRef.current) return;
    if (!hoveredSide) {
      gsap.to(animBoxRef.current, { opacity: 0, scale: 1, duration: 0.3 });
    } else {
      gsap.to(animBoxRef.current, {
        opacity: opacityMap[hoveredSide] || 1,
        scale: scaleMap[hoveredSide] || 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [hoveredSide]);

  return (
    <div className="dotted-box__container">
      <img
        ref={animBoxRef}
        className="dotted-box select__dotted-box"
        src="/DottedBox.svg"
        alt=""
        style={{
          opacity: 0,
          pointerEvents: "none",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default SelectBoxes;
