import React from "react";

import Header from "./components/Header";
import Title from "./components/Title";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Title />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
