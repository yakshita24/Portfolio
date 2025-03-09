import React from "react";
import Container from "../Container/Container.jsx";
import "./Hero.css";
import Navbar from "../Navbar/Navbar.jsx";
import profilePhoto from "./../../assets/picture.jpeg";
import Typed from "typed.js";

const Hero = () => {
  // const typedText = React.useRef("");

  // React.useEffect(() => {
  //   const typed = new Typed(typedText.current, {
  //     strings: [
  //       "CODING ",
  //       "WITH ",
  //       "<span>🔥 PASSION </span>,",
  //       "CREATING ",
  //       "WITH ",
  //       "PURPOSE.",
  //     ],
  //     typeSpeed: 50,
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <section className="hero" id="home">
      <Container>
        <Navbar />
        <div className="hero-section">
          <div class="hero-text">
            <h2>
              CODING WITH <span>🔥 PASSION</span>, CREATING WITH PURPOSE.
            </h2>
            <p>
              Hello and welcome to my portfolio. I am Yakshita Acharya, an MCA
              Student of NIT-Bhopal. I am thrilled to showcase my passion for
              software engineering and machine learning.
            </p>
            <div class="buttons">
              <button class="talk-btn">LETS TALK</button>
              <a
                href="https://drive.google.com/file/d/1__-LUJgifEvvCk6N4PgBYPPfsE6jihHn/view?usp=sharing"
                class="download-resume"
                target="_blank"
              >
                ➡ Download Resume
              </a>
            </div>
          </div>
          <div class="hero-image">
            <img src={profilePhoto} alt="Yakshita Acharya" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
