import React, { useEffect } from "react";
import "./Home.css";
import { IoTriangle } from "react-icons/io5";

import Navbar from "../../components/Navbar/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

let rightBorder;
let rightBorder_2;
let rightBorder_3;
let rightContent;
let leftBorder;
let leftBorder_2;
let leftBorder_3;
let leftContent;
let subtitle;
let title;
let left_button;
let right_button;
let left_button_outline;
let right_button_outline;

const Home = () => {
  useEffect(() => {
    rightBorder = document.querySelector(".landing__right--border");
    rightBorder_2 = document.querySelector(
      ".landing__right--border.border__second",
    );
    rightBorder_3 = document.querySelector(
      ".landing__right--border.border__third",
    );
    rightContent = document.querySelector(".landing__right--content");
    leftBorder = document.querySelector(".landing__left--border");
    leftBorder_2 = document.querySelector(
      ".landing__left--border.border__second",
    );
    leftBorder_3 = document.querySelector(
      ".landing__left--border.border__third",
    );
    leftContent = document.querySelector(".landing__left--content");
    subtitle = document.querySelector(".landing__title--secondary");
    title = document.querySelector(".landing__title");
    left_button = document.querySelector(".landing__btn--left");
    right_button = document.querySelector(".landing__btn--right");
    left_button_outline = document.querySelector(
      ".landing__btn--outline--left",
    );
    right_button_outline = document.querySelector(
      ".landing__btn--outline--right",
    );
  }, []);

  // Left side hover animation
  useGSAP(() => {
    const tlLeft = gsap.timeline({ paused: true });
    tlLeft
      .to(leftBorder_2, {
        opacity: 0.5,
      })
      .to(
        leftBorder_3,
        {
          opacity: 0.25,
        },
        "<",
      )
      .to(
        rightBorder,
        {
          opacity: 0,
        },
        "<",
      )
      .to(rightContent, { opacity: 0 }, "<")
      .to(subtitle, { xPercent: 33 }, "<")
      .to(title, { xPercent: 30 }, "<")
      .to(left_button, { scale: 1.1, marginRight: "16px" }, "<")
      .to(
        left_button_outline,
        {
          border: "1px dashed #A0A4AB",
          outlineOffset: "5px",
        },
        "<",
      );

    const handleMouseEnterLeft = () => tlLeft.play();
    const handleMouseLeaveLeft = () => tlLeft.reverse();

    if (leftContent) {
      leftContent.addEventListener("mouseenter", handleMouseEnterLeft);
      leftContent.addEventListener("mouseleave", handleMouseLeaveLeft);
    }
  }, [leftBorder]);

  // Right side hover animation
  useGSAP(() => {
    const tlRight = gsap.timeline({ paused: true });
    tlRight
      .to(rightBorder_2, {
        opacity: 0.5,
      })
      .to(
        rightBorder_3,
        {
          opacity: 0.25,
        },
        "<",
      )
      .to(leftBorder, { opacity: 0 }, "<")
      .to(leftContent, { opacity: 0 }, "<")
      .to(subtitle, { xPercent: -33 }, "<")
      .to(title, { xPercent: -33 }, "<")
      .to(right_button, { scale: 1.1, marginLeft: "16px" }, "<")
      .to(
        right_button_outline,
        {
          border: "1px dashed #A0A4AB",
          outlineOffset: "5px",
        },
        "<",
      );

    const handleMouseEnterRight = () => tlRight.play();
    const handleMouseLeaveRight = () => tlRight.reverse();

    if (rightContent) {
      rightContent.addEventListener("mouseenter", handleMouseEnterRight);
      rightContent.addEventListener("mouseleave", handleMouseLeaveRight);
    }
  }, [rightBorder]);

  return (
    <div id="landing">
      <Navbar />

      <div className="landing__container">
        <div className="landing__sides">
          <div className="landing__left--border" />
          <div className="landing__left--border border__second" />
          <div className="landing__left--border border__third" />

          <button className="landing__left--content">
            <div className="landing__btn landing__btn--left">
              <div className="landing__btn--outline landing__btn--outline--left" />
              <IoTriangle />
            </div>
            <p className="landing__sides--text">DISCOVER A.I.</p>
          </button>

          <h1 className="landing__title">
            Sophisticated{" "}
            <span className="landing__title--secondary">skincare</span>
          </h1>

          <div className="landing__right--border" />
          <div className="landing__right--border border__second" />
          <div className="landing__right--border border__third" />

          <button className="landing__right--content">
            <p className="landing__sides--text">TAKE TEST</p>
            <div className="landing__btn landing__btn--right">
              <div className="landing__btn--outline landing__btn--outline--right" />
              <IoTriangle />
            </div>
          </button>

          <div className="landing__info--container">
            <p className="landing__info">
              Skinstric developed an A.I. that creates a<br />
              highly-personalized routine tailored to
              <br />
              what your skin needs.
            </p>

            {/* TODO: Animate center landing button */}
            <button className="landing__content">
              <p className="landing__sides--text">ENTER EXPERIENCE</p>
              <div className="landing__btn landing__btn--center">
                <div className="landing__btn--outline" />
                <IoTriangle />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
