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
        .to(".landing__box--left--2", {
          opacity: 0.6,
          transform: "scale(1.1)",
        })
        .to(
          ".landing__box--left--3",
          {
            opacity: 0.3,
            transform: "scale(1.2)",
          },
          "<",
        )
        .to(
          ".landing__box--right",
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
        .to(".landing__box--right--2", {
          opacity: 0.6,
          transform: "scale(1.1)",
        })
        .to(
          ".landing__box--right--3",
          {
            opacity: 0.3,
            transform: "scale(1.2)",
          },
          "<",
        )
        .to(".landing__box--left", { opacity: 0 }, "<")
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

      // Hover over center (small screens)
      const tlCenter = gsap.timeline({ paused: true });
      tlCenter.to(".landing__content", { scale: 1.1 });

      // Event handlers
      const handleMouseEnterLeft = () => tlLeft.play();
      const handleMouseLeaveLeft = () => tlLeft.reverse();
      const handleMouseEnterRight = () => tlRight.play();
      const handleMouseLeaveRight = () => tlRight.reverse();
      const handleMouseEnterCenter = () => tlCenter.play();
      const handleMouseLeaveCenter = () => tlCenter.reverse();

      // Acquire DOM nodes to add event listeners
      const leftSide = document.querySelector(".landing__left--content");
      const rightSide = document.querySelector(".landing__right--content");
      const center = document.querySelector(".landing__content");

      leftSide.addEventListener("mouseenter", handleMouseEnterLeft);
      leftSide.addEventListener("mouseleave", handleMouseLeaveLeft);
      rightSide.addEventListener("mouseenter", handleMouseEnterRight);
      rightSide.addEventListener("mouseleave", handleMouseLeaveRight);
      center.addEventListener("mouseenter", handleMouseEnterCenter);
      center.addEventListener("mouseleave", handleMouseLeaveCenter);

      // Cleanup function - removes event listeners
      return () => {
        leftSide.removeEventListener("mouseenter", handleMouseEnterLeft);
        leftSide.removeEventListener("mouseleave", handleMouseLeaveLeft);
        rightSide.removeEventListener("mouseenter", handleMouseEnterRight);
        rightSide.removeEventListener("mouseleave", handleMouseLeaveRight);
        center.removeEventListener("mouseenter", handleMouseEnterCenter);
        center.removeEventListener("mouseleave", handleMouseLeaveCenter);
      };
    },
    { scope },
  );
};
