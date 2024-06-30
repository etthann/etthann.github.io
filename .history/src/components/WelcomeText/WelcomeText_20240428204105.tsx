import React, { useEffect, useState } from "react";
import './WelcomeText.css'
const WelcomeText: React.FC = () => {

    const text: string[] = ["I'm Ethan Ieong","I'm a Computer Engineering Student"];
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentText((prevText) =>prevText + text[index]);
            setIndex((prevIndex) => prevIndex + 1)
        }, 200);
    },[]);

    return (
        <div className="welcomeContainer">
            <p>Welcome</p>
            
        </div>
    );
}

export default WelcomeText;