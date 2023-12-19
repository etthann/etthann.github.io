import '../File/File.css'
import pythonLogo from "../../../images/StartImages/python_logo.png";
import run_in_terminal from "../../../images/StartImages/run_in_terminal.png";
import { useNavigate } from 'react-router-dom';

const File: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className = "FileModal">
            <div className='FileContainer'>
                <div className='SubContainer'>
                    <img src={pythonLogo} alt={"PythonLogo"} className='Image'/>
                    <h1 className='Text'>Ethan</h1>
                    <div className='HiddenUntilHover'>
                        <div className='VerticalLine'/>
                        <button type='button' className ="RunButtonHoverContainer" onClick={() => {navigate('/Home')}}>
                            <img src={run_in_terminal} alt={"runButton"} className='Image' id='RunButton'/>
                        </button>
                    </div>
                </div>
                <div className='SourceCode'>
                    <a href='https://github.com/etthann/websitee' rel="noopener noreferrer" target='_blank' className = 'SourceCode'>Source Code</a>
                </div>
            </div>
        </div>  
    );
}

export default File;