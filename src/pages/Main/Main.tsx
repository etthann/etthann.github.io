import React from "react";
import "./Main.css";
import Logo from "../../components/MainScreenAnimation/Logo/Logo";
import Frameworks from "../../components/MainScreenAnimation/Framework/Framework";
import AboutMe from "../../components/MainScreenAnimation/AboutMe/AboutMe";
import Projects from "../../components/MainScreenAnimation/Projects/Projects";
import Glitch from "../../components/StartingScreenAnimation/Glitch";

const Main: React.FC = () => {

  Glitch();

  return (
    <div className="MainContainer">

      {/* First Page */}
      <div className="Page">
        <div className="IntroWordsContainer">
          <h1>Hi, I am</h1>
        </div>
        <div className="MyNameContainer glitch">
          <h1>Ethan Ieong</h1>
        </div>
        <div className="AboutMe">
          <h1>
            Welcome To My Website
            <br />
            sorry for the beginning... I know it's very long but I had fun
            implementing all that
          </h1>
        </div>
      </div>
      <div className="Spacing">&nbsp;</div>

      {/* Second Page */}
      <div className="Page">
        <section>
          <AboutMe/>
        </section>
      </div>

      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>


      {/* Third Page */}
      <div className="Page">
        <section>
          <Logo />
          <Frameworks />
        </section>
      </div>

      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>

      {/* Fourth Page */}
      <div className="Page">
        <section>
          <Projects/>
        </section>
      </div>

    </div>
  );
};

export default Main;
