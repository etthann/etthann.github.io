import React from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import { JSX } from "react/jsx-runtime";
import AstronautReading from "../../photos/About/astronaut-reading.png";

const AboutPage: React.FC = () => {
  const activities = ["Reading", "Excercising", "Drawing"];
  let activitiesList: JSX.Element[] = [];
  activities.forEach((activity, index) =>
    activitiesList.push(
      <li className="list-group-item" key={index}>
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
        <span className="ms-4">{activity}</span>
      </li>
    )
  );

  return (
    <div className="container-fluid overflow-auto main-screen-background gx-0">
      <Nav />
      <div className="row mt-5 about-header">
        <div className="col-md-4 offset-md-2 fs-1 header-color fw-bold">
          <p>About Me</p>
        </div>
      </div>
      <div className="row mt-5 about-text">
        <div className="col-md-4 offset-md-1 fs-3 header-text">
          I'm currently in my second year of engineering. <br />
          Apart from coding and building things, I enjoy many other activites!
          <br />
          <br />
          <ul className="bg-transparent">{activitiesList}</ul>
          <div className="astronaut-reading">
            <img src={AstronautReading} alt="Astronaut Reading" />
          </div>
        </div>
      </div>
      <div className="row mt-5 about-header">
        <div className="col-md-5 offset-md-5 fs-1 header-color fw-bold">
          <p>Skills and Frameworks</p>
        </div>
      </div>
      
    </div>
  );
};

export default AboutPage;
