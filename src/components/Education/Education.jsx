import React from "react";
import "./Education.css";
import Container from "../Container/Container";
import manit from "./../../assets/manit.png";
import kvj from "./../../assets/kendriya.jpeg";

import RajasthanUniversity from "./../../assets/RajasthanUniversity.png";

export const Education = () => {
  return (
    <section class="education" id="education">
      <Container>
        <h2>MY EDUCATION 🧑🏻‍🏫 </h2>
        <div class="education-container">
          <div class="edu-card">
            <img src={manit} alt="NIT Bhopal" />
            <h3>Maulana Azad National Institute of Technology, Bhopal</h3>
            <p>Master of Computer Applications</p>
            <p>Aug 2022 - May 2025</p>
            <p class="status">Current</p>
          </div>
          <div class="edu-card">
            <img src={RajasthanUniversity} alt="University of Rajasthan" />
            <h3>University of Rajasthan, Jaipur</h3>
            <p>Bachelors of Science (Mathematics)</p>
            <p>Aug 2019 - May 2022</p>
            <p class="status">Passout</p>
          </div>
          <div class="edu-card">
            <img src={kvj} alt="KV Jaipur" />
            <h3>Kendriya Vidyalaya No. 1, Jaipur</h3>
            <p>Intermediate College</p>
            <p>April 2017 - March 2018</p>
            <p class="status">Passout</p>
          </div>
          <div class="edu-card">
            <img src={kvj} alt="KV Jaipur" />
            <h3>Kendriya Vidyalaya No. 1, Jaipur</h3>
            <p>High School</p>
            <p>April 2015 - March 2016</p>
            <p class="status">Passout</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
