import './Welcome.css'
const Welcome: React.FC = () => {

    const text: string [] = [""]

    return (
        <div className="WelcomeContainer">
            <div className="Welcome">
                <p>Welcome</p>
                <div className='AlternatingText'>

                </div>
            </div>
        </div>
    );
}

export default Welcome;