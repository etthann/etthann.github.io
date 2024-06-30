import React from "react";
import './AboutMe.css'

const AboutMe: React.FC = () => {
    return (
        <div className="AboutContainer">
            <div className="TitleText">
                About Me
            </div>
            <div className="Text">
                <p>I'm a computer engineering student and I have a deep passion for technology.</p>
                <p>I'm most interested in exploring the intersections of hardware and software, delving into areas such as full stack development, robotics, and machine learning.</p>
                <p>Outside of my academic pursuits, you can often find me indulging in my hobbies. I thoroughly enjoy immersing myself in the worlds of video games, where I find both relaxation and inspiration. Reading is another passion of mine; whether it's diving into the latest science fiction novel or exploring technical manuals, I always find joy in expanding my knowledge. Additionally, I have a knack for expressing my creativity through drawing, where I can translate my thoughts and imagination onto paper.</p>
            </div>
        </div>
    );
}

export default AboutMe;