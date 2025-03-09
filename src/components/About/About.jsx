import React from "react";
import Container from "../Container/Container";
import "./About.css";
import profilePhoto from "./../../assets/about.jpeg";

export const About = () => {
  return (
    <section class="about" id="about">
      <Container>
        <div class="about-container">
          <div class="about-image">
            <img src={profilePhoto} alt="Yakshita Acharya" />
            <p class="port-name">
              -- Yakshita Acharya{" "}
              <a
                href="https://www.linkedin.com/in/yakshita-acharya-495367244/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </p>
          </div>
          <div class="about-text">
            <h2>ABOUT ME </h2>
            <p>
              I am a final-year MCA student at NIT Bhopal (Maulana Azad National
              Institute of Technology, Bhopal), Class of 2025, with a passion
              for building high-performance, scalable, and secure software
              solutions. With hands-on experience in full-stack development,
              Java application design, and backend optimization, I focus on
              writing efficient and maintainable code.
            </p>
            <p>
              An avid problem solver and competitive programmer, I actively
              participate in LeetCode, CodeChef, and HackerRank challenges. I
              have a strong grasp of data structures, algorithms, and system
              design principles, enabling me to design and develop scalable
              architectures for real-world applications.
            </p>
            <p>
              Driven by curiosity and a deep interest in software engineering
              and system scalability, I am eager to contribute my skills in an
              entry-level Software Development Engineer role, where I can
              innovate, optimize, and build impactful software solutions.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
