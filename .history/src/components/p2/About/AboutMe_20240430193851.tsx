import React from "react";
import './AboutMe.css'

const AboutMe: React.FC = () => {
    return (
        <div className="AboutContainer">
            <div className="TitleText">
                ABOUT ME
            </div>
            <div className="">
                Ethan Ieong - CE Student
            </div>
            <div className="Text">
                <p>As a computer engineering student, my passion for technology runs deep. I thrive on exploring the intersections of hardware and software, delving into areas such as full stack development, robotics, and machine learning.</p>
                <p>Outside of my academic pursuits, my hobbies fuel both my relaxation and my inspiration. I immerse myself in the immersive worlds of video games, finding joy and solace in their challenges and narratives. Reading is another cornerstone of my life; whether it's diving into the latest tech trends or exploring the realms of machine learning and mechatronics, I'm always eager to expand my knowledge and learn new things.</p>
                <p>In addition to my digital pursuits, I prioritize my physical well-being by working out regularly, finding balance between mind and body. And when I seek to express my creativity, I turn to drawing, where I can translate my thoughts and imagination onto paper, creating tangible representations of my inner world.</p>
            </div>
        </div>
    );
}

export default AboutMe;