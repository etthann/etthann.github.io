import './ContactButton.css';
import React from 'react';


const ContactButton: React.FC = ()=> {
    return (
        <div className="ContactButtonContainer">
            <div className='Button' onClick={hadnle}>
                <p>Contact Me</p>
            </div>
        </div>
    );
}

export default ContactButton;