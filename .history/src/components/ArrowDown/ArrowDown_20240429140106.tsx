import React from 'react';
import './ArrowDown.css';

const ArrowDown: React.FC = () => {
    const handleClick = () => {
        const nextDiv = document.getElementById('p2');
        nextDiv?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="arrowContainer" onClick={handleClick}>
            <img
        </div>
    );
}

export default ArrowDown;