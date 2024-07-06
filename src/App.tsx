import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Experiences from "./pages/Experiences/Experiences";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experiences" element={<Experiences/>}/>
    </Routes>
  );
};

export default App;
