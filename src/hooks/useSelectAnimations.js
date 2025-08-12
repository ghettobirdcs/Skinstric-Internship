import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useSelectAnimations = (scope) => {
  useGSAP(
    () => {
      // Select all content boxes and all dotted boxes
      const boxes = document.querySelectorAll(".select__content--box");
      const dottedBox = document.querySelector(".select__dotted-box");

      // Store listeners for cleanup
      const listeners = [];

      boxes.forEach((box) => {
        const side = box.getAttribute("data-side");

        // Animation specs
        let animProps = { scale: 1, opacity: 1 };
        switch (side) {
          case "top":
            animProps = { scale: 1, opacity: 1 };
            break;
          case "right":
            animProps = { scale: 1.25, opacity: 1 };
            break;
          case "bottom":
            animProps = { scale: 1.5, opacity: 1 };
            break;
          case "left":
            animProps = { scale: 1.25, opacity: 1 };
            break;
          default:
            animProps = { scale: 1, opacity: 1 };
        }

        const tl = gsap.timeline({ paused: true });
        tl.to(dottedBox, animProps);

        // Handlers
        const onEnter = () => tl.play();
        const onLeave = () => tl.reverse();

        box.addEventListener("mouseenter", onEnter);
        box.addEventListener("mouseleave", onLeave);

        listeners.push({ box, onEnter, onLeave });
      });

      // Cleanup
      return () => {
        listeners.forEach(({ box, onEnter, onLeave }) => {
          box.removeEventListener("mouseenter", onEnter);
          box.removeEventListener("mouseleave", onLeave);
        });
      };
    },
    { scope },
  );
};
