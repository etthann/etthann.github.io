/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Nav from "../../components/Nav/Nav";
import "./Home.css";
import Welcome from "../../components/Welcome/Welcome";
import Intro from "../../components/Intro/Intro";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="container-fluid overflow-auto home-background gx-0">
      <Nav />
      <Welcome />
      <Intro />
      <br/>
      <Footer/>

    </div>
  );
};

export default Home;
