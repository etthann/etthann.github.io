import React from "react";
import './Project.css';

interface ProjectProps {
    title: string;
    description: string;
    date: string;
    
}

const Project: React.FC<ProjectProps> = ({title,description,date}) => {  
    return (
        <div className="pContainer">
            <div className="pindividual">
                <p>Project</p>
            </div>
        </div>
    );
}

export default Project; 