import React from "react";
import "./Main.css";
import Logo from "../../components/MainScreenAnimation/Logo/Logo";
import Frameworks from "../../components/MainScreenAnimation/Framework/Framework";
import AboutMe from "../../components/MainScreenAnimation/AboutMe/AboutMe";
import Projects from "../../components/MainScreenAnimation/Projects/Projects";
import Glitch from "../../components/StartingScreenAnimation/Glitch";
import ContactMe from "../../components/MainScreenAnimation/ContactMe/ContactMe";

const Main: React.FC = () => {
  Glitch();

  return (
    <div className="MainContainer">
      <head>
        <script src="https://www.google.com/recaptcha/enterprise.js?render=6LeI6zgpAAAAAH8-2E_BBSUpW9-zrmydlQpuWJ5X"></script>
      </head>

      {/* First Page (Title screen)*/}
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

      {/* Second Page (Introduction About me and my socials)*/}
      <div className="Page">
        <section>
          <AboutMe />
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

      {/* Third Page (Logos and Frameworks that I know)*/}
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
      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>

      {/* Fourth Page (Projects)*/}
      <div className="Page">
        <section>
          <Projects />
        </section>
      </div>

      {/* Fifth Page (Contact Me) */}
      <div className="Page">
        <section>
          <ContactMe />
        </section>
      </div>

      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>
      <div className="Spacing">&nbsp;</div>

    </div>
  );
};

export default Main;
