import React, { useEffect } from "react";
import observer from "../Obeserver";
import "../AboutMe/AboutMe.css";
import Discsord from '../../../images/MainImages/svg/discord.svg'
import Instagram from '../../../images/MainImages/svg/instagram.svg'
import LinkedIn from '../../../images/MainImages/svg/linkedin.svg'
import Github from '../../../images/MainImages/svg/github.svg'
const AboutMe: React.FC = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".Hide");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section>
        <div className="AboutMeTitle"
            >A Little Bit About Me
        </div>
        <div className="AboutMeText">
          I'm a computer engineer student with an insatiable passion for
          innovation and programming. <br />
          Beyond the realm of code and engineering, I find love in music and
          games. I am currently learning <br /> how to play guitar, and web
          development. Check out down below for my socials and github
        </div>
        <div className="SocialsContainer">
            <div className="Socials">
                <img src={Discsord} alt="Discord Logo" className="SocialImages"/>
            </div>
            <div className="Socials">
                <img src={Instagram} alt="Discord Logo" className="SocialImages"/>
            </div>
            <div className="Socials">
                <img src={LinkedIn} alt="Discord Logo" className="SocialImages"/>
            </div>
            <div className="Socials">
                <img src={Github} alt="Discord Logo" className="SocialImages"/>
            </div>
        </div>

    </section>
  );
};

export default AboutMe;
