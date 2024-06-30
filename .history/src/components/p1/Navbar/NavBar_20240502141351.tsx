import './NavBar.css'
import Insta from '../../../photos/socials/insta.png'
import GitHub from '../../../photos/socials/github.svg'
import LinkedIn from '../../../photos/socials/linkedIn.svg'
import { useContext } from 'react'
import ScrollContext from '../../Scroll/ScrollContext'

const NavBar: React.FC = () => {
    const handleClick = useContext(ScrollContext);

    return (
        <div className="NavigationContainer">
            <div className='NavHeader'>
                <p onClick={()=>{handleClick('p1')}}>Home</p>
                <p onClick={()=>{handleClick('p2')}}>About</p>
                <p onClick={()=>{handleClick('p3')}}>Projects</p>
                <p onClick={()=>{handleClick('p4')}}>Home</p>
            </div>
            <div className='SocialHeader'>
                <a href='https://www.instagram.com/e_t_hannn/'><img alt='Instagram Link' src={Insta}/></a>
                <a href='www.linkedin.com/in/ethan-ieong'><img alt='Instagram Link' src={LinkedIn}/></a>
                <a href='https://github.com/etthann'><img alt='Instagram Link' src={GitHub}/></a>
            </div>
        </div>
    );
}

export default NavBar;