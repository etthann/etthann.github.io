import './ContactButton.css';
import React from 'react';


const ContactButton: React.FC = ()=> {
    const handleClick = useContext(ScrollContext);
    return (
        <div className="ContactButtonContainer">
            <div className='Button' onClick={handleClick}>
                <p>Contact Me</p>
            </div>
        </div>
    );
}

export default ContactButton;