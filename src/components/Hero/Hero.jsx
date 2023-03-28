import React from "react";
import Mid from "./Mid/Mid";
import Right from "./Right/Right";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="bg-blue hero-content">
      <Mid />
      <Right />
    </div>
  );
};

export default Hero;
