import React, {useState} from 'react';
import Typing from '../../components/StartingScreenAnimation/Typing';
import Glitch from '../../components/StartingScreenAnimation/Glitch';
import StartBar from '../../components/StartingScreenAnimation/StartBar/StartBar';
import "./Start.css";

const Start: React.FC = () => {

    const [typingDone, setTypingDone] = useState(false);

    const handleTypingDone = () => {
      setTypingDone(true);
    };
  
    Glitch();

  return (
    <div>
      <head>
        <title>Website</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Home Page" />
        <meta lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="React,CSS,HTML,Typescript" />
      </head>
      <div className={"Body"}>
        <div className="glitch">
          {!typingDone ? (
            <>
              <StartBar printDone={false} />
              <div className="">
                <div className="HelloWorldContainer">
                  <h1 className="HelloWorld">
                    <Typing
                      text={"print('Hello, World!')"}
                      initialDelay={300}
                      onTypingDone={handleTypingDone}
                    />
                  </h1>
                </div>
              </div>
            </>
          ) : (
            <>
              <StartBar printDone={true} />
              <div className="">
                <div className="HelloWorldContainer">
                  <h1 className="HelloWorld">
                    <Typing
                      text={"print('Hello, World!')"}
                      initialDelay={400}
                      onTypingDone={handleTypingDone}
                    />
                  </h1>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Start;
