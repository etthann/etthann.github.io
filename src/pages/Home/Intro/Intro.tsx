import React, { useEffect } from "react";
import "./Intro.css";
import astronautSelfie from "../../../photos/Home/astronaut-selfie.png";
import Socials from "../../../components/Socials/Socials";
import observer from "../../../components/Observer/Observer";

export default function Intro() {
  useEffect(() => {
    // Select both text and images for animation
    const hiddenTextElements = document.querySelectorAll(".intro-text");
    const hiddenImageElements = document.querySelectorAll(".astronaut-selfie"); // Assuming your images have this class

    // Observe text elements
    hiddenTextElements.forEach((el) => observer.observe(el));

    // Observe image elements
    hiddenImageElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenTextElements.forEach((el) => observer.unobserve(el));
      hiddenImageElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="container-fluid intro">
      <div className="row">
        <div className="col-md-5 offset-md-2">
          <div className="intro-header fs-1">
            ALLOW ME TO <span className="intro-subtitle">INTRODUCE</span> MYSELF
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-1 intro-text fs-4">
          <p>
            Hello! I'm a computer engineering student with a strong passion for
            programming.
          </p>
          <p>
            My main interests lie in robotics and software engineering. I'm
            fascinated <br />
            by the intersection of hardware and software, and I enjoy exploring
            how <br />
            autonomous systems can be designed to solve real-world challenges.
          </p>
          <p>
            Outside of my studies, I love applying my skills to develop things.
            <br />
            Whether it's programs simplify everyday tasks, or experimenting with{" "}
            <br />
            new technologies, I'm always eager to expand my knowledge and refine
            my craft.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 astronaut-selfie-container">
          <img
            className="astronaut-selfie"
            src={astronautSelfie}
            alt="Astronaut taking a selfie"
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-12 justify-content-center text-center fs-1 fw-bold text-white">
          FIND ME ON MY SOCIALS
        </div>
        <div className="col-md-12 justify-content-center text-center fs-5 text-white">
          <Socials />
        </div>
      </div>
    </div>
  );
}
