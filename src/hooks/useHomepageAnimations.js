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

      const createHoverTimeline = (direction) => {
        const isLeft = direction === "left";

        const tl = gsap.timeline({ paused: true });
        tl.to(`.landing__box--${direction}--2`, {
          opacity: 0.6,
          transform: "scale(1.1)",
        })
          .to(
            `.landing__box--${direction}--3`,
            {
              opacity: 0.3,
              transform: "scale(1.2)",
            },
            "<",
          )
          .to(
            `.landing__box--${isLeft ? "right" : "left"}`,
            {
              opacity: 0,
            },
            "<",
          )

          .to(
            `.landing__${isLeft ? "right" : "left"}--content`,
            { opacity: 0 },
            "<",
          )
          .to(
            `.landing__title--secondary`,
            { xPercent: isLeft ? 33 : -33 },
            "<",
          )
          .to(`.landing__title`, { xPercent: isLeft ? 33 : -33 }, "<")
          .to(
            `.landing__btn--${direction}`,
            { scale: 1.1, [isLeft ? "marginRight" : "marginLeft"]: "16px" },
            "<",
          )
          .to(
            `.landing__btn--outline--${direction}`,
            {
              border: "1px dashed #A0A4AB",
              outlineOffset: "5px",
            },
            "<",
          );

        return tl;
      };

      // Create hover timelines using utility function above
      const tlLeft = createHoverTimeline("left");
      const tlRight = createHoverTimeline("right");

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
