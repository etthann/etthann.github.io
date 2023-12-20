import React from "react";
import '../Projects/Projects.css'

const Projects: React.FC = () => {
    return (
        <section>
            <div className="ProjectsText">
                Projects
            </div>
            <div className="ProjectsContainer">
                <div className="Project">
                    <img/>
                </div>
                <div className="Project">
                    <img/>
                </div>
                <div className="Project">
                    <img/>
                </div>
                <div className="Project">
                    <img/>
                </div>
            </div>
        </section>
    );
}

export default Projects;