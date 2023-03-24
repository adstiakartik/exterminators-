import React from "react";
import Mid from "./Mid/Mid";
import Left from "./Left/Left";
import Right from "./Right/Right";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="bg-blue hero-content">
      <Mid />
      <div style={{ display: "flex" }}>
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default Hero;
