import React from "react";
import Nav from "../../components/Nav/Nav";
import "./Projects.css";
import ProjectCard from "./projects/ProjectCard";
import { projectInfo } from "./projects/projectsInfo";
import Footer from "../../components/Footer/Footer";

const Projects: React.FC = () => {
  return (
    <div className="container-fluid overflow-x-hidden main-screen-background gx-0 ">
      <Nav />
      <div className="projects-title mt-5 text-center fs-1">PROJECTS</div>
      <div className="row mt-5 gx-0 justify-content-center">
        {projectInfo.map((project, index) => (
          <div
            key={index}
            className="col-md-3 d-flex flex-column project-card-view justify-content-center align-items-center ms-5"
          >
            <ProjectCard
              photo={project.photo}
              name={project.projectName}
              description={project.description}
              link={project.githubLink}
            />
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default Projects;
