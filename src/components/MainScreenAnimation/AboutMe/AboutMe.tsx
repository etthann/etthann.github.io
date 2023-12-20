import React, { useEffect } from "react";
import observer from "../Obeserver";
import "./AboutMe.css";

import BlackPicture from '../../../images/MainImages/png/black.png';
import LinkedInPfp from '../../../images/MainImages/png/linkedinpfp.png'
import GithubPfp from '../../../images/MainImages/png/githubPfp.png'

import Discord from "../SocialMedia/Discord/Discord";
import SocialMedia from "../SocialMedia/SocialMedia";

import LinkedInLogo from '../../../images/MainImages/svg/linkedin.svg'
import GitHubLogo from '../../../images/MainImages/svg/github.svg';
import DiscordLogo from '../../../images/MainImages/svg/discord.svg';
import InstagramLogo from '../../../images/MainImages/svg/instagram.svg';

const AboutMe: React.FC = () => {

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".HideText");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const hiddenElements2 = document.querySelectorAll(".HideContainer");
    hiddenElements2.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements2.forEach((el) => observer.unobserve(el));
    };
  }, []);


  return (
    <section>
        <div className="AboutMeTitle HideText"
            >A Little Bit About Me
        </div>
        <div className="AboutMeText HideText">
          I'm a computer engineer student with an insatiable passion for
          innovation and programming. <br />
          Beyond the realm of code and engineering, I find love in music and
          games. I am currently learning <br /> how to play guitar, and web
          development. Check out down below for my socials and github
        </div>
        <div className="SocialsContainer HideContainer">
            <div className="Socials HideContainer">
                <img src={DiscordLogo} alt="Discord Logo" className="SocialImages"/>
                <Discord/>
            </div>
            <div className="Socials HideContainer">
                <img src={InstagramLogo} alt="Discord Logo" className="SocialImages"/>
                <SocialMedia username="@e_t_hannn" profilePicture={BlackPicture} profileLink={'https://www.instagram.com/e_t_hannn/'}/>
            </div>
            <div className="Socials HideContainer">
                <img src={LinkedInLogo} alt="Discord Logo" className="SocialImages"/>
                <SocialMedia username="Ethan Ieong" profilePicture={LinkedInPfp} profileLink={'https://www.linkedin.com/in/ethan-ieong-66a365257/'}/>
            </div>
            <div className="Socials HideContainer">
                <img src={GitHubLogo} alt="Discord Logo" className="SocialImages"/>
                <SocialMedia username="etthann" profilePicture={GithubPfp} profileLink={'https://github.com/etthann'}/>
            </div>
        </div>

    </section>
  );
};

export default AboutMe;
