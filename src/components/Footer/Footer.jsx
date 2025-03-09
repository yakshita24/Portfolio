import React from "react";
import "./Footer.css";
import Container from "./../Container/Container";

export const Footer = () => {
  return (
    <footer class="footer">
      <Container>
        <h2>LET’S WORK TOGETHER</h2>
        <div class="footer-icon">
          <span>⃔</span>{" "}
        </div>
        <p class="email">acharyayakshita24@gmail.com</p>
        <p class="name">YAKSHITA ACHARYA</p>
        <button class="hire-btn-down">HIRE ME</button>
      </Container>
    </footer>
  );
};
