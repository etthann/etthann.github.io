import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import "./Projects.css";
import ProjectCard from "./projects/ProjectCard";
import Footer from "../../components/Footer/Footer";
import FlowerImage from "../../photos/Projects/flower.jpg";
import axios from "axios";

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const orgRepos = [
    { org: "Ryerson-Rocketry", repoName: "Canards-Software" },
    { org: "Ryerson-Rocketry", repoName: "Canards-PCB" },
  ];

  useEffect(() => {
    let cancelled = false;

    const headers = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    const fetchMyRepos = async () => {
      const { data } = await axios.get(
        "https://api.github.com/users/etthann/repos",
        { params: { per_page: 100, sort: "updated" }, headers }
      );
      return data;
    };

    const fetchOrgRepos = async (owner: string, repoName: string) => {
      const { data } = await axios.get(
        `https://api.github.com/repos/${owner}/${repoName}`,
        { headers }
      );
      return data;
    };

    (async () => {
      try {
        const [userRepos, ...orgs] = await Promise.all([
          fetchMyRepos(),
          ...orgRepos.map(({ org, repoName }) => fetchOrgRepos(org, repoName)),
        ]);

        if (cancelled) return;

        // Combine and de-dup by id just in case
        const all = [...userRepos, ...orgs].filter(Boolean);
        const dedup = Array.from(new Map(all.map(r => [r.id, r])).values());
        setRepos(dedup);
      } catch (e: any) {
        // Helpful message on rate-limit
        if (e?.response?.status === 403) {
          setError(
            "GitHub rate limit reached for unauthenticated requests (60/hour). Try again later or add a server-side proxy with a token."
          );
        } else {
          setError("Failed to fetch repositories.");
        }
        console.error(e);
      }
    })();

    return () => { cancelled = true; };
  }, []);

  return (
    <div className="container-fluid overflow-x-hidden main-screen-background gx-0">
      <Nav />
      <div className="projects-title mt-5 text-center fs-1">Projects</div>

      {error && (
        <div className="alert alert-warning text-center mt-3" role="alert">
          {error}
        </div>
      )}

      <div className="row mt-5 gx-0 justify-content-center">
        {repos.map((project, index) => (
          <div
            key={project.id ?? index}
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

      <Footer />
    </div>
  );
};

export default Projects;
