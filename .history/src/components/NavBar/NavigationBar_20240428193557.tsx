import React from 'react';
import './NavigationBar.css';
import insta from '../../'
const NavigationBar: React.FC = () => {
    return (
        <div className="navContainer">
            <div className='navText'>
                <p>Home</p>
                <p>About</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
            <div className='navSocials'>

            </div>
        </div>
    );
}

export default NavigationBar;