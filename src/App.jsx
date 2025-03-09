import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Education } from "./components/Education/Education";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
