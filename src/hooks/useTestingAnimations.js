import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useTestingAnimations = (scope) => {
  useGSAP(
    () => {
      const ButtonHover = (
        containerSelector,
        btnSelector,
        outlineSelector,
        marginProperty,
      ) => {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        const tl = gsap.timeline({ paused: true });
        tl.to(btnSelector, { scale: 1.1, [marginProperty]: "16px" }, "<").to(
          outlineSelector,
          { border: "1px dashed #A0A4AB", outlineOffset: "5px" },
          "<",
        );

        const handleMouseEnter = () => tl.play();
        const handleMouseLeave = () => tl.reverse();

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          container.removeEventListener("mouseenter", handleMouseEnter);
          container.removeEventListener("mouseleave", handleMouseLeave);
        };
      };

      const HoverLeft = ButtonHover(
        ".landing__left--content",
        ".landing__btn--left",
        ".landing__btn--outline--left",
        "marginRight",
      );

      const HoverRight = ButtonHover(
        ".landing__right--content",
        ".landing__btn--right",
        ".landing__btn--outline--right",
        "marginLeft",
      );

      // Idle rotating animation for dotted boxes
      const boxesTl = gsap.timeline({ repeat: -1 });
      boxesTl.to(".testing__box", {
        duration: 100,
        rotation: 360,
        ease: "none",
        translate: "-50%, -50%",
      });

      boxesTl.to(
        ".testing__box--second",
        {
          duration: 70,
          rotation: 360,
          ease: "none",
          translate: "-50%, -50%",
        },
        "<",
      );

      boxesTl.to(
        ".testing__box--third",
        {
          duration: 40,
          rotation: 360,
          ease: "none",
          translate: "-50%, -50%",
        },
        "<",
      );

      return () => {
        if (HoverLeft) HoverLeft();
        if (HoverRight) HoverRight();
      };
    },
    { scope },
  );
};
