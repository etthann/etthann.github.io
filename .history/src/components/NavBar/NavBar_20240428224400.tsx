import './NavBar.css'
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
                <a><img/></a>
                <a><img/></a>
                <a><img/></a>

            </div>
        </div>
    );
}

export default NavBar;