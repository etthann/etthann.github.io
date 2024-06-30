import React from 'react';
import './NavigationBar.css';

const NavigationBar: React.FC = () => {
    return (
        <div className="container">
            <div className='backgroundBlur'/>
            <div className="text">
                <p>Home</p>
                <p>About</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
        </div>
    );
}

export default NavigationBar;