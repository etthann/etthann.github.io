/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Nav from "../../components/Nav/Nav";
import "../screen.css";
import Welcome from "./Welcome/Welcome";
import Intro from "../Home/Intro/Intro";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="container-fluid overflow-auto main-screen-background gx-0">
      <Nav />
      <Welcome />
      <Intro />
      <Footer />
    </div>
  );
};

export default Home;
