import React from "react";
import Container from "../Container/Container";
import "./Skills.css";
import Frontend from "./../../assets/frontend.png";
import Backend from "./../../assets/backend.png";
import Database from "./../../assets/database.png";
import Version from "./../../assets/version.svg";
import System from "./../../assets/system.png";
import Responsive from "./../../assets/responsive.png";

export const Skills = () => {
  return (
    <section class="skills" id="skills">
      <Container>
        <h2>
          I SPECIALIZED IN A RANGE OF <span>💪 SKILLS</span>
        </h2>
        <div class="skills-grid">
          <div class="skill">
            <img src={Frontend} alt="Frontend" />
            <div className="simple_card-text">
              <h3>Frontend Development</h3>
              <p>I’m very good at HTML5, CSS3, JavaScript (ES6+), ReactJS</p>
            </div>
          </div>
          <div class="skill">
            <img src={Backend} alt="Backend" />
            <div className="simple_card-text">
              <h3>Backend Development</h3>
              <p>I’m very good at doing NodeJS, Express, Java (Backend)</p>
            </div>
          </div>
          <div class="skill">
            <img src={Database} alt="Database" />
            <div className="simple_card-text">
              <h3>Database</h3>
              <p>I’m very good at MySQL and MongoDB</p>
            </div>
          </div>
          <div class="skill">
            <img src={Version} alt="Version Control" />
            <div className="simple_card-text">
              <h3>Version Control</h3>
              <p>I use Git & GitHub regularly to manage code.</p>
            </div>
          </div>
          <div class="skill">
            <img src={Responsive} alt="Responsive Design" />
            <div className="simple_card-text">
              <h3>Responsive Design</h3>
              <p>
                Creating visually appealing and functional websites across
                devices.
              </p>
            </div>
          </div>
          <div class="skill">
            <img src={System} alt="System Design" />
            <div className="simple_card-text">
              <h3>System Design</h3>
              <p>Good at designing and creating scalable systems.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
