import React from 'react';
import './ArrowDown.css';

const ArrowDown: React.FC = () => {
    const handleClick = () => {
        const nextDiv = document.getElementById('nextDiv');
        nextDiv?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="arrowContainer" onClick={handleClick}>

        </div>
    );
}

export default ArrowDown;