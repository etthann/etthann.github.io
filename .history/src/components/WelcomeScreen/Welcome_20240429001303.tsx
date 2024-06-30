import './Welcome.css'
const Welcome: React.FC = () => {
    return (
        <div className="WelcomeContainer">
            <div className="Welcome">
                <p>Welcome</p>
            </div>
            <div className='AlternatingText'>
                <p>1</p>
            </div>
        </div>
    );
}

export default Welcome;