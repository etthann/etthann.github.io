import React from 'react';
import './ArrowDown.css';
import ArrowDownIcon from '../../photos/random/arrow-down.svg'

const ArrowDown: React.FC = () => {
    const handleClick = () => {
        const nextDiv = document.getElementById('p2');
        nextDiv?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="arrowContainer">
            <div className='buttonContainer'>
                <img src={ArrowDownIcon} alt='Arrow Down'/>
            </div>
        </div>
    );
}

export default ArrowDown;