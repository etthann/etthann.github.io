import React, { useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import { JSX } from "react/jsx-runtime";
import AstronautReading from "../../photos/About/astronaut-reading.png";
import SkillsContainer from "./Skills/SkillsContainer";
import observer from "../../components/Observer/Observer";

const AboutPage: React.FC = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".skills-container");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const activities = ["Reading", "Excercising", "Drawing"];
  let activitiesList: JSX.Element[] = [];
  activities.forEach((activity, index) =>
    activitiesList.push(
      <li className="list-group-item py-2" key={index}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10%"
          height="30"
          fill="currentColor"
          className="bi bi-arrow-return-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
          />
        </svg>
        <span className="ms-4 fs-3">{activity}</span>
      </li>
    )
  );

  return (
    <div className="container-fluid overflow-x-hidden main-screen-background gx-0 about-container">
      <Nav />
      <div className="row mt-5 about-header">
        <div className="col-md-4 offset-md-2 fs-1 header-color fw-bold">
          <p>About Me</p>
        </div>
      </div>
      <div className="row mt-5 about-text">
        <div className="col-md-5 offset-md-1 fs-3 header-text">
          I'm currently pursing a bachelor in computer engineering and I am in
          my second year of engineering. <br /> <br />
          Apart from coding and building things, I enjoy many other activites!
          <ul className="bg-transparent">{activitiesList}</ul>
        </div>
        <div className="col-md-6">
          <img src={AstronautReading} alt="Astronaut Reading" />
        </div>
      </div>
      <div className="row about-header gx-0">
        <div className="col-md-12 d-flex justify-content-center align-items-center fs-1 header-color fw-bold">
          <p>Skills and Frameworks</p>
        </div>
      </div>
      <div className="skills-container">
        <SkillsContainer />
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default AboutPage;
