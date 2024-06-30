import React from "react";
import './AboutMe.css'

const AboutMe: React.FC = () => {
    return (
        <div className="AboutContainer">
            <div className="TitleText">
                About Me
            </div>
            <div className="Text">
                <p>I'm a computer engineering student </p>
            </div>
        </div>
    );
}

export default AboutMe;