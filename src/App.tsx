import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from './pages/About/About';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default App;
