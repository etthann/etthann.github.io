import { useEffect, useState } from 'react';
import './Welcome.css'

const Welcome: React.FC = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const text: string[] = ["I'm Ethan Ieong", "I'm a Computer Engineering Student."]
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
                    clearInterval(typingTimer);
                    setTimeout(() => setBackspace(true), 2000);
                } else if (backspace && currentText.length > 0) {
                    setCurrentText((prevText) => prevText.slice(0, -1));
                } else if (backspace && currentText.length === 0) {
                    setBackspace(false);
                    setIndex((prevIndex) => (prevIndex + 1) % text.length);
                }
            }
        }, backspace ? 100 : 200);

        const cursorTimer = setInterval(() => {
            setCursor((prevCursor) => !prevCursor);
        }, 500);

        return () => {
            clearInterval(typingTimer);
            clearInterval(cursorTimer);
        };
    }, [currentText, index, backspace, text]);

    return (
        <div className="WelcomeContainer">
            <div className="Welcome">
                <p>Welcome</p>
                <div className='AlternatingText'>
                    <p>{currentText}<span className="cursor" style={{opacity: cursor ? 1 : 0}}>|</span></p>
                </div>
                <p></p>
            </div>
        </div>
    );
}

export default Welcome;