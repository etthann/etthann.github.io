import Typewriter from "typewriter-effect";
import astronautImage from "../../../photos/Home/astronaut.png";
import React from "react";
import './Welcome.css'
import { Button } from "react-bootstrap/lib/InputGroup";
import { useState } from "react";

export default function Welcome() {

  function DownloadResumeButton() {
    const [hover, setHover] = useState(false);
    const [pressed, setPressed] = useState(false);
    const [focused, setFocused] = useState(false);

    const btnStyle = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 16px",
      border: "none",
      borderRadius: 10,
      cursor: "pointer",
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.1,
      color: "#fff",
      background: hover
        ? "linear-gradient(90deg, #2563EB, #1D4ED8)" // darker on hover
        : "linear-gradient(90deg, #3B82F6, #2563EB)", // blue gradient
      boxShadow: pressed
        ? "0 2px 10px rgba(29,78,216,.35)"
        : hover
          ? "0 8px 20px rgba(59,130,246,.35)"
          : "0 4px 12px rgba(59,130,246,.25)",
      transform: pressed ? "translateY(1px) scale(0.98)" : "none",
      transition: "background .2s ease, box-shadow .2s ease, transform .08s ease",
      outline: focused ? "3px solid #93C5FD" : "none",
      outlineOffset: focused ? 2 : 0,
    };

    const handleDownload = () => {
      const url = "/resume.pdf"; // ensure this exists in /public
      const a = document.createElement("a");
      a.href = url;
      a.download = "Ethan Ieong Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    };

    return (
      <button
        type="button"
        onClick={handleDownload}
        style={btnStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => {
          setHover(false);
          setPressed(false);
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        Download Resume
      </button>
    );
  }

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
          <br/>
          <br/><br/><br/><br/><br/><br/>
          {DownloadResumeButton()}
        </div>
        <div className="col-md-4 home-astronaut offset-md-3">
          <img src={astronautImage} alt="astronaut hanging from ufo" />
        </div>
      </div>
    </div>
  );
}

