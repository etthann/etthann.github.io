import Typewriter from "typewriter-effect";
import astronautImage from "../../photos/background/astronaut.png";
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
              I'm <span className="home-importantText">ETHAN IEONG</span>
            </p>
            <br/>
            <span className="home-importantText">
              <Typewriter
                options={{
                  strings: [
                    "Software Developer",
                    "Engineering Student",
                    "Full Stack Developer",
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
      <div className="row justify-content-center">
        <div className="col d-flex justify-content-center align-items-center">
          <button className="btn arrow-down" onClick={() => {}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="white"
              opacity={0.5}
              className="bi bi-arrow-down-circle-fill arrow-down arrow-bounce"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

