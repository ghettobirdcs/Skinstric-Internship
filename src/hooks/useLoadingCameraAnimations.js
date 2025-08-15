import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useLoadingCameraAnimations = (scope) => {
  useGSAP(
    () => {
      gsap.to(".loading-camera__icon", {
        scale: 1.1,
        opacity: 0.6,
        duration: 1,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        transformOrigin: "center center",
      });

      gsap.to(".loading-camera__icon", {
        rotate: 360,
        duration: 2,
        repeat: -1,
        ease: "none",
      });
    },
    { scope },
  );
};
