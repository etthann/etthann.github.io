import Typewriter from "typewriter-effect";
import astronautImage from "../../../photos/Home/astronaut.png";
import React from "react";
import './Welcome.css'

export default function Welcome() {
  return (
    <div className="home">
      <div className="row">
        <div className="col-md-4 offset-md-1">
          <div className="home-header fs-1">
            <p>Hi There!</p>
            <p>
              I'm <span className="home-importantText">Ethan Ieong</span>
            </p>
            <br />
            <span className="home-importantText">
              <Typewriter
                options={{
                  strings: [
                    "Software Developer",
                    "Computer Engineering Student",
                    "Full Stack Developer",
                    "Embedded Software Developer"
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </div>
        </div>
        <div className="col-md-4 home-astronaut offset-md-3">
          <img src={astronautImage} alt="astronaut hanging from ufo" />
        </div>
      </div>
    </div>
  );
}

