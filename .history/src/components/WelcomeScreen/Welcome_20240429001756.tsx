import './Welcome.css'
const Welcome: React.FC = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const text: string [] = ["I'm Ethan Ieong", "I'm a Computer Engineering Student"]

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