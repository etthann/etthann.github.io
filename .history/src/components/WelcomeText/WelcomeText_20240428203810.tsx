import React, { useState } from "react";
import './WelcomeText.css'
const WelcomeText: React.FC = () => {

    const text: string[] = ["I'm Ethan Ieong","I'm a Computer Engineering Student"];
    const [typingDone, setTyping] = useState(false);
    const [current]

    return (
        <div className="welcomeContainer">
            <p>Welcome</p>
            
        </div>
    );
}

export default WelcomeText;