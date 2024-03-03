import React from "react";
import './Hero.scss';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <img src="/hero_img.png" alt="heroimg" className="heroimg" />
      <div className="herocontent">
        <h1 className=" herotxt">Computer Engineering</h1>
        <h2 className="subherotxt">142,765 Computer Engineers follow this</h2>
      </div>
    </div>
  );
};

export default HeroSection;
