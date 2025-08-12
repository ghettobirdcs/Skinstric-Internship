import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useDottedBoxAnimations = (scope) => {
  useGSAP(
    () => {
      // Center dotted boxes in a GSAP-friendly way (without touching the 'transform' prop)
      const boxes = document.querySelectorAll(".dotted-box");
      boxes.forEach((box) => {
        gsap.set(box, {
          xPercent: -50,
          yPercent: -50,
          transformOrigin: "center center",
        });
      });

      // Idle rotating animation for dotted boxes
      const boxesTl = gsap.timeline({ repeat: -1 });

      boxesTl.to(".testing__box", {
        duration: 100,
        rotation: 360,
        ease: "none",
      });

      boxesTl.to(
        ".testing__box--second",
        {
          duration: 70,
          rotation: 360,
          ease: "none",
        },
        "<",
      );

      boxesTl.to(
        ".testing__box--third",
        {
          duration: 40,
          rotation: 360,
          ease: "none",
        },
        "<",
      );
    },
    { scope },
  );
};
