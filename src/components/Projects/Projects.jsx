import React from "react";
import Container from "../Container/Container";
import "./Projects.css";

export const Projects = () => {
  return (
    <section class="projects" id="projects">
      <Container>
        <h2>HERE’S A GLIMPS OF SOME EXITING PROJECTS I’VE DONE 👩‍💻</h2>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-img">PROJ IMAGE</div>
            <h3>Courier Here</h3>
            <p>
              I’ve created a system that solves the problem of window courier.
              Users can now courier from their home.
            </p>
            <a
              href="https://github.com/yakshita24/CourierHere"
              class="repo-link"
              target="_blank"
            >
              <i>Repository →</i>
            </a>
          </div>
          <div class="project-card">
            <div class="project-img">PROJ IMAGE</div>
            <h3>StaffEase</h3>
            <p>
              I’ve built an ERP System mainly used for Employee Management. It
              has all the basic working functionalities.
            </p>
            <a
              href="https://github.com/yakshita24/Staffease-Employee-Management-Project-"
              class="repo-link"
              target="_blank"
            >
              <i>Repository →</i>
            </a>
          </div>
          <div class="project-card">
            <div class="project-img">PROJ IMAGE</div>
            <h3>Blog Along</h3>
            <p>
              I’ve created a blogging website in which users can post their
              blogs and the feeds can be read and improved by other users.
            </p>
            <a
              href="https://github.com/yakshita24/Full-Stack-Blog-App"
              class="repo-link"
              target="_blank"
            >
              <i>Repository →</i>
            </a>
          </div>
          <div class="project-card">
            <div class="project-img">PROJ IMAGE</div>
            <h3>Fake News Detection</h3>
            <p>
              I’ve created a Machine Learning model that is trained to detect if
              any news published was fake or genuine.
            </p>
            <a
              href="https://github.com/yakshita24/Fake-News-Detection"
              class="repo-link"
              target="_blank"
            >
              <i>Repository →</i>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
