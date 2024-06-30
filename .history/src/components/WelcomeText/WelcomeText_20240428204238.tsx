import React, { useEffect, useState } from "react";
import './WelcomeText.css'
const WelcomeText: React.FC = () => {

    const text: string[] = ["I'm Ethan Ieong","I'm a Computer Engineering Student"];
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
          if (index < text.length) {
            if (currentText.length < text[index].length) {
              setCurrentText((prevText) => prevText + text[index][currentText.length]);
            } else {
              setCurrentText("");
              setIndex((prevIndex) => (prevIndex + 1) % text.length);
            }
          }
        }, 200); // Change this value to adjust the typing speed
      
        return () => clearInterval(timer); // Clean up the interval on unmount
      }, [currentText, index]);

    return (
        <div className="welcomeContainer">
            <p>Welcome</p>
            <p>{currentText}</p>
        </div>
    );
}

export default WelcomeText;