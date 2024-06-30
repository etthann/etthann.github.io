import { useEffect, useState } from 'react';
import './Welcome.css'
const Welcome: React.FC = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, react-hooks/exhaustive-deps
    const text: string [] = ["I'm Ethan Ieong", "I'm a Computer Engineering Student"]
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const [backspace, setBackspace] = useState(false);
    const [cursor, setCursor] = useState(true);

    useEffect(() => {
        let typingTimer: NodeJS.Timeout;
        if (!backspace) {
          typingTimer = setInterval(() => {
            if (index < text.length && currentText.length < text[index].length) {
              setCurrentText((prevText) => prevText + text[index][currentText.length]);
            } else if (index < text.length && currentText.length === text[index].length) {
              clearInterval(typingTimer);
              setTimeout(() => setBackspace(true), 1000);
            }
          }, 200);
        }
    
        const backspaceTimer = setInterval(() => {
          if (backspace && currentText.length > 0) {
            setCurrentText((prevText) => prevText.slice(0, -1));
          } else if (backspace && currentText.length === 0) {
            setBackspace(false);
            setIndex((prevIndex) => (prevIndex + 1) % text.length);
          }
        }, 100);
    
        const cursorTimer = setInterval(() => {
          setCursor((prevCursor) => !prevCursor);
        }, 1000);
    
        return () => {
          clearInterval(typingTimer);
          clearInterval(backspaceTimer);
          clearInterval(cursorTimer);
        };
      }, [currentText, index, backspace, text]);

    return (
        <div className="WelcomeContainer">
            <div className="Welcome">
                <p>Welcome</p>
                <div className='AlternatingText'>
                <p>{currentText}<span className="cursor" style={{opacity: cursor ? 1 : 0.5}}>|</span></p>
                </div>
            </div>
        </div>
    );
}

export default Welcome;