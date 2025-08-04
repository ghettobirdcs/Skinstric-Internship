import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__text">
        <a href="#" className="navbar__text--primary">
          skinstric
        </a>
        <img src="/bracket-left.svg" alt="" />
        <p className="navbar__text--secondary">intro</p>
        <img src="/bracket-right.svg" alt="" />
      </div>
      <button className="navbar__btn">enter code</button>
    </div>
  );
};

export default Navbar;
