import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/layout/header/Header";
import "./Input.css";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Footer from "./components/pages/footer/Footer";
import Technologies from "./components/pages/technologies/Technologies";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Technologies />
    <Footer />
  </React.StrictMode>
);
