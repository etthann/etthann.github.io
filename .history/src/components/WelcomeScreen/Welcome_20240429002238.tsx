import { useState } from 'react';
import './Welcome.css'
const Welcome: React.FC = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const text: string [] = ["I'm Ethan Ieong", "I'm a Computer Engineering Student"]
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const [backspace,setBackspace] = 

    return (
        <div className="WelcomeContainer">
            <div className="Welcome">
                <p>Welcome</p>
                <div className='AlternatingText'>

                </div>
            </div>
        </div>
    );
}

export default Welcome;