import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useHomepageAnimations = (scope) => {
  useGSAP(
    () => {
      // Page load animation
      gsap.to(".landing__title", {
        opacity: 1,
        duration: 1.5,
        delay: 0.2,
      });

      // Left side hover animation
      const tlLeft = gsap.timeline({ paused: true });
      tlLeft
        .to(".left__border--2", {
          opacity: 0.5,
        })
        .to(
          ".left__border--3",
          {
            opacity: 0.25,
          },
          "<",
        )
        .to(
          ".landing__right--border",
          {
            opacity: 0,
          },
          "<",
        )
        .to(".landing__right--content", { opacity: 0 }, "<")
        .to(".landing__title--secondary", { xPercent: 33 }, "<")
        .to(".landing__title", { xPercent: 30 }, "<")
        .to(".landing__btn--left", { scale: 1.1, marginRight: "16px" }, "<")
        .to(
          ".landing__btn--outline--left",
          {
            border: "1px dashed #A0A4AB",
            outlineOffset: "5px",
          },
          "<",
        );

      // Right side hover animation
      const tlRight = gsap.timeline({ paused: true });
      tlRight
        .to(".right__border--2", {
          opacity: 0.5,
        })
        .to(
          ".right__border--3",
          {
            opacity: 0.25,
          },
          "<",
        )
        .to(".landing__left--border", { opacity: 0 }, "<")
        .to(".landing__left--content", { opacity: 0 }, "<")
        .to(".landing__title--secondary", { xPercent: -33 }, "<")
        .to(".landing__title", { xPercent: -33 }, "<")
        .to(".landing__btn--right", { scale: 1.1, marginLeft: "16px" }, "<")
        .to(
          ".landing__btn--outline--right",
          {
            border: "1px dashed #A0A4AB",
            outlineOffset: "5px",
          },
          "<",
        );

      // Event handlers
      const handleMouseEnterLeft = () => tlLeft.play();
      const handleMouseLeaveLeft = () => tlLeft.reverse();
      const handleMouseEnterRight = () => tlRight.play();
      const handleMouseLeaveRight = () => tlRight.reverse();

      // Acquire DOM nodes to add event listeners
      const leftSide = document.querySelector(".landing__left--content");
      const rightSide = document.querySelector(".landing__right--content");

      leftSide.addEventListener("mouseenter", handleMouseEnterLeft);
      leftSide.addEventListener("mouseleave", handleMouseLeaveLeft);
      rightSide.addEventListener("mouseenter", handleMouseEnterRight);
      rightSide.addEventListener("mouseleave", handleMouseLeaveRight);

      // Cleanup function - removes event listeners
      return () => {
        leftSide.removeEventListener("mouseenter", handleMouseEnterLeft);
        leftSide.removeEventListener("mouseleave", handleMouseLeaveLeft);
        rightSide.removeEventListener("mouseenter", handleMouseEnterRight);
        rightSide.removeEventListener("mouseleave", handleMouseLeaveRight);
      };
    },
    { scope },
  );
};
