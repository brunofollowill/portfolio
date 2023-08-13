import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/layout/header/Header";
import "./Input.css";
import About from "./components/pages/about/About";
import NavBar from "./components/layout/navbar/NavBar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <Header />
  </React.StrictMode>
);
