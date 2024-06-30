import React from "react";
import './ProjectContainer.css';
import Project from "../Project/Project";

const ProjectContainer: React.FC = () => {
    return (
        <div className="ProjectContainer">
            <div className="ProjectTitle">
                <p>Projects and Experiences</p>
            </div>
            <div className="Project">
                <Project title="Game" description=""}/>                
            </div>
        </div>
    );
}

export default ProjectContainer;