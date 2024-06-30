import React, { useContext } from 'react';
import ScrollContext from '../../Scroll/ScrollContext';

interface ContactButtonProps {
  id: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ id }) => {
    const handleClick = useContext(ScrollContext);

    return (
        <div className="ContactButtonContainer">
            <div className='Button' onClick={() => handleClick && handleClick(id)}>
                <p>Contact Me</p>
            </div>
        </div>
    );
}

export default ContactButton;