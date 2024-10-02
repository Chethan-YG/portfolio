import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Case1 from "./components/case1";
import Case2 from "./components/case2";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <section id="Home">
                  <Home />
                </section>
                <section id="About">
                  <About />
                </section>
                <section id="Projects">
                  <Projects />
                </section>
                <section id="Contact">
                  <Contact />
                </section>
              </>
            }
          />
          <Route exact path="/Case1" element={<Case1 />} />
          <Route exact path="/Case2" element={<Case2 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
