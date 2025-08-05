import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useTestingAnimations = (scope) => {
  useGSAP(
    () => {
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

      return () => {
        leftSide.removeEventListener("mouseenter", handleMouseEnterLeft);
        leftSide.removeEventListener("mouseleave", handleMouseLeaveLeft);
      };
    },
    { scope },
  );
};
