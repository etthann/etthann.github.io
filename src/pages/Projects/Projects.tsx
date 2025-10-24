import React from "react";
import Nav from "../../components/Nav/Nav";
import "./Projects.css";
import ProjectCard from "./projects/ProjectCard";
import Footer from "../../components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import FlowerImage from "../../photos/Projects/flower.jpg";

const Projects: React.FC = () => {


  const [repos, setRepos] = useState<any[]>([]);

  const orgRepos = [
    { org: "Ryerson-Rocketry", repoName: "Canards-Software" },
    { org: "Ryerson-Rocketry", repoName: "Canards-PCB" },
  ];


  useEffect(() => {
    const fetchMyRepos = async () => {
      try {
        const { data } = await axios.get(
          "https://api.github.com/users/etthann/repos",
          {
            params: { per_page: 100, sort: "updated" },
            headers: {
              Accept: "application/vnd.github+json",
              Authorization: `Bearer ${process.env.REACT_APP_GITHUB_PROFILE_TOKEN}`,
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );
        setRepos(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch repos", error);
      }
    };

    const fetchOrgRepos = async (repoName: string, owner: string) => {
      try {
        const { data } = await axios.get(
          "https://api.github.com/repos/" + { owner } + "/$" + { repoName },
          {
            headers: {
              Accept: "application/vnd.github+json",
              "X-GitHub-Api-Version": "2022-11-28",
            }
          }
        )
        setRepos(prev => [...prev, data]);
      } catch (error) {
        console.error("Failed to fetch repos");
      }
    }

    fetchMyRepos();
    orgRepos.forEach(element => {
      fetchOrgRepos(element.repoName, element.org);
    });

  }, []);


  return (
    <div className="container-fluid overflow-x-hidden main-screen-background gx-0 ">
      <Nav />
      <div className="projects-title mt-5 text-center fs-1">Projects</div>
      <div className="row mt-5 gx-0 justify-content-center">
        {repos.slice(1).map((project, index) => (

          <div
            key={index}
            className="col-md-3 d-flex flex-column project-card-view justify-content-center align-items-center ms-5 my-3"
          >
            <ProjectCard
              photo={FlowerImage}
              name={project?.name}
              description={project?.description}
              link={project?.html_url}
            />
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div >
  );
};

export default Projects;
