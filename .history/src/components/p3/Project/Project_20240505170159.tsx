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
                <div className="pTitle">
                    {title}
                </div>
                <div className="pDescription">
                    {description}
                </div>
                <div className="pDate">
                    {date}
                </div>
            </div>
        </div>
    );
}

export default Project; 