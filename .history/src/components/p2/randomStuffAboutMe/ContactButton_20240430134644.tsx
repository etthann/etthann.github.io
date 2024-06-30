import './ContactButton.css';
import React, { useContext } from 'react';
import ScrollContext from '../../Scroll/ScrollContext';


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