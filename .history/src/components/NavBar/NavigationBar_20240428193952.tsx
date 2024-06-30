import React from 'react';
import './NavigationBar.css';
import insta from '../../photos/socials/insta.svg'
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
                <a href='https://www.instagram.com/e_t_hannn/'><img src=''/></a>
            </div>
        </div>
    );
}

export default NavigationBar;