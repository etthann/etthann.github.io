import React, { useEffect } from "react";
import "../Projects/Projects.css";
import observer from "../Obeserver";

const Projects: React.FC = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".HideProjects");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section>
      <div className="ProjectsText">Projects</div>
      <div className="ProjectsContainer">
        <div className="Projects HideProjects">
          <span className="ProjectTitle">Portfolio (This website)</span> <br />
          <br />
          This website was built with React and Typescript. It's my first
          portfolio, and I hadn't used Typescript before. However, I had
          experience creating websites and using javascript This prior
          experience was gained through using Expo JS to develop an app and
          creating another website for my friend.
          <br />
          <br />
          Throughout this project, I gained significant knowledge about APIs and
          coding in general. I also learned how to use animations and more about
          CSS. Initially, I would apply CSS randomly, hoping to achieve the
          desired effects.
          <br />
          <br />
          To check out the code and learn more click down below to be taken to
          the github repository
          <br />
          <br />
          <a
            href="https://github.com/etthann/websitee"
            rel="noopener noreferrer"
            target="_blank"
            className="ClickHere4SourceCode"
          >
            Click Here
          </a>
        </div>
        <div className="Projects HideProjects">
          <span className="ProjectTitle">
            LoveLink?? (Chatgpt came up with the name, I suck with naming)
          </span>
          <br />
          <br />
          This was the first time I created a mobile application. I used the
          Expo framework and JavaScript to develop both the front end and back
          end, and I utilized Firebase for the database.
          <br />
          I gained insights into how databases function and how they are used to
          gather and store information. Additionally, I learned about
          authentication and search queries. Throughout this project, I had a
          lot of fun designing and understanding how the backend works,
          including the process of sending information from one device to
          another.
          <br />
          <br />
          To explore the source code, click the link below to access the GitHub
          repository.
          <br />
          <br />
          <a
            href="https://github.com/etthann/project"
            rel="noopener noreferrer"
            target="_blank"
          >
            Click Here
          </a>
        </div>
        <div className="Projects HideProjects">
          <span className="ProjectTitle">Christmas Themed Game</span>
          <br />
          <br />
          This is the first time I made a game using Java and my first time
          working collaboratively with my friends on a big project. This game
          was for my school's hackathon.
          <br />
          <br />
          This game was made in the lnaguage Java and we used the framework
          Swing to create the game. We used grids and multiple arrays to define
          the map and object collision.
          <br />
          <br />
          I learned a lot about grids and arrays and their applications,
          especially on object collision and how we can manipulate them to do
          cool things. I used what I learned to make a generative perlin noise
          terrain like Terraria (but it's WIP).
          <br />
          <br />
          To explore the source code, click the link below to access the GitHub
          repository.
          <br />
          <br />
          <a
            href="https://github.com/etthann/School-Hackathon/tree/main"
            rel="noopener noreferrer"
            target="_blank"
            className="ClickHere4SourceCode"
          >
            Click Here
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
