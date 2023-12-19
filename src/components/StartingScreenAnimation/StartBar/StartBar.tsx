import React, { useState } from "react";
import './StartBar.css';
import { useNavigate } from "react-router-dom";
import pythonLogo from '../../../images/StartImages/python_logo.png';
import arrowDown from '../../../images/StartImages/arrowDown.png';
import runInTerminal from '../../../images/StartImages/run_in_terminal.png'
import File from "../File/File";

interface StarBarProps {
    printDone: boolean;
}

const StartBar: React.FC<StarBarProps> = ({printDone}) => {
    const [file, setFile] = useState(false);

    const HeaderButton = (imagePath: string, imgText: string) => {
      return <img src={imagePath} alt={imgText} className="HeaderImage" />;
    };
  
    const handlePythonLogoClick = () => {
      setFile(!file);
    };
  
    const navigate = useNavigate();
  
    if (printDone) {
        return (
          <div className="Container">
            <div className="HeaderObjects">
              <h1 className="TextToWhite">Ethan.py</h1>
              <div className="FileName">
                <button
                  className="FileButton"
                  type="button"
                  onClick={handlePythonLogoClick}
                >
                  {HeaderButton(pythonLogo, "Python Logo")}
                  <h1 className="TextToWhite">&nbsp;Ethan</h1>
                  {HeaderButton(arrowDown, "Arrow Down")}
                </button>
                <button
                  type = 'button'
                  className="FileButton"
                  onClick={() => {
                    navigate('/Home');
                  }}
                >
                  {HeaderButton(runInTerminal, "Run Code Button")}
                </button>
                {file && <File />}
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="Empty">
    
          </div>
        );
      }
    };

export default StartBar;