import React from "react";
import "./SkillsContainer.css";
import { skills } from "./tech";
import spaceCats from '../../../photos/About/space-cats.png';

export default function SkillsContainer() {
  return (
    <div className="container-fluid">
      <div className="row mt-5 gx-0 skill-container justify-content-center align-items-center">
        {skills.map((skill, i) => (
          <div className="col-md-1 skill-subcontainer d-flex justify-content-center align-items-center flex-column rounded">
            {skills[i].svg}
            <span className="skill-name">
              <p>{skills[i].name}</p>
            </span>
          </div>
        ))}
      </div>
      <img className="space-cat" src={spaceCats}alt="SPACE CATS 😃😃😃😃"/>
      <br/>
    </div>
  );
}
