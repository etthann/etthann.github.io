import React from 'react';
import './ArrowDown.css';
import ArrowDown from '../../photos/random/arrow-down.svg'

const ArrowDown: React.FC = () => {
    const handleClick = () => {
        const nextDiv = document.getElementById('p2');
        nextDiv?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="arrowContainer" onClick={handleClick}>
            <img src={ArrowDown} alt='Arrow Down'/>
        </div>
    );
}

export default ArrowDown;