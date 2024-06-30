import React, { useState } from "react";
import './WelcomeText.css'
const WelcomeText: React.FC = () => {

    const text: string[] = ["I'm Ethan Ieong","I'm a Computer Engineering Student"];
    const [currentText, setCurrentText] = useState("");
    CONST [index, setIndex] = useState(0)

    return (
        <div className="welcomeContainer">
            <p>Welcome</p>
            
        </div>
    );
}

export default WelcomeText;