import React from "react";
import Games from "../assets/2ndPage.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Games})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT C&C: RED ALERT</h1>
        <div className="abtBot">
          <p>
          Welcome to the thrilling world of Command & Conquer: Red Alert, where strategic brilliance meets intense warfare in an alternate reality where the past is rewritten, and destinies are forged on the anvil of battle.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;