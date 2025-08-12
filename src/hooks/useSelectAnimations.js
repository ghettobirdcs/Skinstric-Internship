import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useSelectAnimations = (scope) => {
  useGSAP(
    () => {
      // Hover animation for items on /select page
      const itemTl = gsap.timeline({ paused: true });
      itemTl.to(".testing__box--second", {
        opacity: "1",
        scale: "1",
        duration: "0.4",
      });

      // Event handlers
      const handleMouseEnter = () => itemTl.play();
      const handleMouseLeave = () => itemTl.reverse();

      // Acquire DOM nodes to add event listeners
      const selectContent = document.querySelector(".select__content--box");

      selectContent.addEventListener("mouseenter", handleMouseEnter);
      selectContent.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup function - removes event listeners
      return () => {
        selectContent.removeEventListener("mouseenter", handleMouseEnter);
        selectContent.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope },
  );
};
