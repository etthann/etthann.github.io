/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Nav from "../../components/Nav/Nav";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="container-fluid overflow-auto h-background gx-0">
      <div className="home">
        <Nav />
        <div className="welcome bg-black">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
