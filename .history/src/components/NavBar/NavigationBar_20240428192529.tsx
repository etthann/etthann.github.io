import React from 'react';
import './NavigationBar.css';

const NavigationBar: React.FC = () => {
    return (
        <div className="navContainer">
            <div className='navText'>
                <p>Home</p>
                <p>About</p>
                <p></p>
            </div>
        </div>
    );
}

export default NavigationBar;