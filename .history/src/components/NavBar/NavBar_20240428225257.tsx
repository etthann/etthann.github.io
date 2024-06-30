import './NavBar.css'
import Insta from '../../photos/socials/insta.png'
const NavBar: React.FC = () => {
    return (
        <div className="NavigationContainer">
            <div className='NavHeader'>
                <p>Home</p>
                <p>About</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
            <div className='SocialHeader'>
                <a href='https://www.instagram.com/e_t_hannn/'><img alt='Instagram Link' src={Insta}/></a>
                <a href='https://www.instagram.com/e_t_hannn/'><img alt='Instagram Link' src={Insta}/></a>
                <a href='https://www.instagram.com/e_t_hannn/'><img alt='Instagram Link' src={Insta}/></a>
            </div>
        </div>
    );
}

export default NavBar;