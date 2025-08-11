import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useDottedBoxAnimations = (scope) => {
  useGSAP(
    () => {
      // Idle rotating animation for dotted boxes
      const boxesTl = gsap.timeline({ repeat: -1 });
      boxesTl.to(".testing__box", {
        // WARN: Sometimes the translate property gets lost on reload - no idea how to fix this without breaking the animation
        translate: "-50%, -50%",
        duration: 100,
        rotation: 360,
        ease: "none",
      });

      boxesTl.to(
        ".testing__box--second",
        {
          translate: "-50%, -50%",
          duration: 70,
          rotation: 360,
          ease: "none",
        },
        "<",
      );

      boxesTl.to(
        ".testing__box--third",
        {
          translate: "-50%, -50%",
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
