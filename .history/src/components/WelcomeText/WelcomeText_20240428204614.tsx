import React, { useEffect, useState } from "react";
import "./WelcomeText.css";
const WelcomeText: React.FC = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const text: string[] = [
    "I'm Ethan Ieong",
    "I'm a Computer Engineering Student",
  ];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [backspace, setBackspace] = useState(false);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const typingTimer = setInterval(() => {
      if (index < text.length) {
        if (!backspace && currentText.length < text[index].length) {
          setCurrentText((prevText) => prevText + text[index][currentText.length]);
        } else if (!backspace && currentText.length === text[index].length) {
          setTimeout(() => setBackspace(true), 1000); // Add this line
        }
      }
    }, 200);  // Change this value to adjust the typing speed

    const backspaceTimer = setInterval(() => {
      if (backspace && currentText.length > 0) {
        setCurrentText((prevText) => prevText.slice(0, -1));
      } else if (backspace && currentText.length === 0) {
        setBackspace(false);
        setIndex((prevIndex) => (prevIndex + 1) % text.length);
      }
    }, 100); // Change this value to adjust the backspace speed

    const cursorTimer = setInterval(() => {
      setCursor((prevCursor) => !prevCursor);
    }, 500); // Change this value to adjust the cursor blink speed

    return () => {
      clearInterval(typingTimer); // Clean up the intervals on unmount
      clearInterval(backspaceTimer);
      clearInterval(cursorTimer);
    };
  }, [currentText, index, backspace, text]);

  return (
    <div className="welcomeContainer">
      <p>Welcome</p>
      <p>
        {currentText}
        <span className="cursor">{cursor ? "|" : " "}</span>
      </p>
    </div>
  );
};

export default WelcomeText;
