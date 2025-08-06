import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// TODO: Combine these two animations into one
export const useTestingAnimations = (scope) => {
  useGSAP(
    () => {
      // Hover over back button
      const tlHoverOnBack = gsap.timeline({ paused: true });
      tlHoverOnBack
        .to(".landing__btn--left", { scale: 1.1, marginRight: "16px" }, "<")
        .to(
          ".landing__btn--outline--left",
          {
            border: "1px dashed #A0A4AB",
            outlineOffset: "5px",
          },
          "<",
        );

      const handleMouseEnterLeft = () => tlHoverOnBack.play();
      const handleMouseLeaveLeft = () => tlHoverOnBack.reverse();

      const leftSide = document.querySelector(".landing__left--content");

      leftSide.addEventListener("mouseenter", handleMouseEnterLeft);
      leftSide.addEventListener("mouseleave", handleMouseLeaveLeft);

      // Hover over next button
      // NOTE: Redundant
      const tlHoverOnNext = gsap.timeline({ paused: true });
      tlHoverOnNext
        .to(".landing__btn--right", { scale: 1.1, marginLeft: "16px" }, "<")
        .to(
          ".landing__btn--outline--right",
          {
            border: "1px dashed #A0A4AB",
            outlineOffset: "5px",
          },
          "<",
        );

      const handleMouseEnterRight = () => tlHoverOnNext.play();
      const handleMouseLeaveRight = () => tlHoverOnNext.reverse();

      const rightSide = document.querySelector(".landing__right--content");

      rightSide.addEventListener("mouseenter", handleMouseEnterRight);
      rightSide.addEventListener("mouseleave", handleMouseLeaveRight);

      return () => {
        rightSide.removeEventListener("mouseenter", handleMouseEnterRight);
        rightSide.removeEventListener("mouseleave", handleMouseLeaveRight);
      };
    },
    { scope },
  );
};
