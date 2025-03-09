import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar">
      <h1 class="logo">Yakshita Acharya</h1>
      <ul class="nav-links">
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#education">EDUCATION</a>
        </li>
        <li>
          <a href="#skills">SKILLS</a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
      </ul>
      <button class="hire-btn">HIRE ME</button>
    </nav>
  );
};

export default Navbar;
