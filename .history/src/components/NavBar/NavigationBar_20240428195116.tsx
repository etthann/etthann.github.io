import React from 'react';
import './NavigationBar.css';
import insta from '../../photos/socials/insta.png'
import linkedIn from '../../photos/socials/linkedIn.svg'
import { link } from 'fs';
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
                <a href='https://www.instagram.com/e_t_hannn/'><img  src={insta} alt='Instagram Account of e_t_hannn'/></a>
                <a href='https://www.linkedin.com/in/ethan-ieong'><img src={link}/></a>
            </div>
        </div>
    );
}

export default NavigationBar;