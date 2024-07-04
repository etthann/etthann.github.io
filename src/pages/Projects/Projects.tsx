import React from "react";
import Nav from "../../components/Nav/Nav";
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <div className="container-fluid overflow-x-hidden main-screen-background gx-0 about-container">
      <Nav />
      <div className="projects-title mt-5 text-center fs-1">
        PROJECTS
      </div>
    </div>
  );
};

export default Projects;
