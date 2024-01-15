import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ScrollReveal from "scrollreveal";
import Header from "./components/layout/header/Header";
import "./Input.css";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Footer from "./components/pages/footer/Footer";
import Technologies from "./components/pages/technologies/Technologies";
import Projects from "./components/pages/projects/Projects";
import Contact from "./components/pages/contact/Contact";

const App = () => {
  useEffect(() => {
    // Inicializa o ScrollReveal
    ScrollReveal().reveal(".scroll-reveal", {
      duration: 1000,
      easing: "ease-in-out",
      scale: 1,
      distance: "20px",
      origin: "bottom",
      reset: true,
    });
  }, []);

  return (
    <>
      <Header />
      <div className="scroll-reveal">
        <Home />
      </div>
      <div className="scroll-reveal">
        <About />
      </div>
      <div className="scroll-reveal">
        <Technologies />
      </div>
      <div className="scroll-reveal">
        <Projects />
      </div>
      <div className="scroll-reveal">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
