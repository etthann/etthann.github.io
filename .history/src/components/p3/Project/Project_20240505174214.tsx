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
            <div className="line">

            </div>
            <div>
                <div className="title">
                    <p>{title}</p>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="date">
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
}

export default Project; 