// ArrowDown.tsx
import React, { useContext } from 'react';
import './ArrowDown.css';
import ArrowDownIcon from '../../photos/random/arrow-down.svg'
import ScrollContext from '../../Scroll/ScrollContext';

const ArrowDown: React.FC = () => {
    const handleClick = useContext(ScrollContext);

    return (
        <div className="arrowContainer">
            <div className='buttonContainer' onClick={handleClick}>
                <img src={ArrowDownIcon} alt='Arrow Down'/>
            </div>
        </div>
    );
}

export default ArrowDown;