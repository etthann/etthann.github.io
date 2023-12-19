import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [splitTextDone, setSplitTextDone] = useState(false);
  const [splitTextArray, setSplitTextArray] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [accessed, setAccessed] = useState(false);
  const [animation, setAnimation] = useState(false);
  let [delay, setDelay] = useState(100);
  const navigate = useNavigate();

  const hackingCommands: string[] = [
    "HACKING IN PROGRESS...,",
    "echo Scan the network? Y/N,",
    "PAUSE >nul,",
    "arp -a,",
    "ping -n 10 8.8.4.4,",
    "echo Secure connection available. Hack into computer and download all files? Y/N,",
    "PAUSE >nul,",
    "echo Hacking into system... please wait…,",
    "timeout /t 5 >nul,",
    "echo Successfully connected to system. Downloading all files... this may take a while.,",
    "timeout /t 5 >nul,",
    'dir /s "C:\\Program Files",',
    "echo All files downloaded and decrypted.,",
    "echo Cover your tracks? Y/N,",
    "PAUSE >nul,",
    "echo Deleting hack history...,",
    "timeout /t 5 >nul,",
    "Initiating hacking sequence...,",
    "Accessing mainframe servers...,",
    "Decrypting firewalls...,",
    "Bypassing security protocols...,",
    "Downloading secret files...,",
    "Initiating cyber countermeasures...,",
    "Hacking complete! Files downloaded successfully.",
    `
______________________________________
|Hello there!                         |,|if (random.randint(0~6) == 6) {      |,|  os.remove("C:\\Windows\\System32")}  |,|} else{                              |,|   os.remove("C:\\Windows\\System32")  |,|}                                    |,|    Removing Windows\\System32...     |
---------------------------------------
            \\ \\   ^__^
             \\ \\  (oo)\\_______
              \\ \\ (__)\\       )\\/\\
                      ||----w |
                      ||     ||
    `,
  ];

  useEffect(() => {
    let tempArray: string[] = [];

    for (let i = 0; i < hackingCommands.length; i++) {
      tempArray = [...tempArray, ...hackingCommands[i].split("")];
    }

    setSplitTextArray(tempArray);
    setSplitTextDone(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (index < splitTextArray.length && splitTextDone) {
        setIndex((prevIndex) => prevIndex + 1);
        setDelay((prevDelay) => prevDelay - 10);
      } else {
        setAccessed(true);
        setTimeout(() => {
          setAnimation(true);
        }, 1500);
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [index, splitTextArray, delay, splitTextDone]);
  useEffect(() => {
    if (animation) {
      navigate("/Index");
    }
  }, [animation, navigate]);

  const displayText = splitTextArray
    .slice(0, index)
    .map((char, index) => (
      <span key={index}>{char === "," ? <br /> : char}</span>
    ));

  return (
    <div className="MainContainer">
      <div>
        <pre className="HackText">{displayText}</pre>
      </div>
      {accessed && (
        <div className="AccessedContainer">
          <div className="TextContainer">
            <h1 className="AccessText">ACCESSED GRANTED</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
