import React, { useEffect, useState } from "react";

interface TypingProps {
  text: string;
  initialDelay: number;
  onTypingDone: () => void;
}

const Typing: React.FC<TypingProps> = ({
  text,
  initialDelay,
  onTypingDone,
}) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [delay, setDelay] = useState(initialDelay);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [blinkingCount, setBlinkingCount] = useState(0);
  const [textOver, setTextOver] = useState(false);
  const initdelay = initialDelay;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (!textOver) {
        setDelay(520);
        setCursorVisible((prevCursorVisible) => !prevCursorVisible);
        setBlinkingCount((prevCount) => prevCount + 1);

        if (blinkingCount >= 6) {
          setDelay(initdelay);
          setCursorVisible(false);
          setTextOver(true);
        }
      } else if (currentIndex < text.length) {
        setCursorVisible(true);
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setDelay((prevDelay) => Math.max(prevDelay - 15, 0));
      } else {
        setDelay(520);
        setBlinkingCount(0);
        setCursorVisible((prevCursor) => !prevCursor);
        onTypingDone();
      }
    }, delay);

    return () => clearInterval(typingInterval);
  }, [
    currentIndex,
    delay,
    text,
    textOver,
    blinkingCount,
    initdelay,
    onTypingDone,
  ]);

  const getTextColor = (char: string, index: number): string => {
    const purple = "print".split("");
    const greenLetters = "(Hello,World!)''".split("");
    // Change color based on the character being typed
    if (purple.indexOf(char.toLowerCase()) !== -1 && index < 5) {
      return "rgb(199,125,187)";
    } else if (
      greenLetters.indexOf(char.toLowerCase()) !== -1 ||
      greenLetters.indexOf(char.toUpperCase()) !== -1
    ) {
      return "rgb(106, 171, 115)";
    }
    return "white"; // Default color for other characters
  };

  return (
    <span
      style={{ display: "inline-block", width: "1ch", whiteSpace: "nowrap" }}
    >
      {currentText.split("").map((char, index) => (
        <span key={index} style={{ color: getTextColor(char, index) }}>
          {char}
        </span>
      ))}
      <span style={{ color: "white" }}>{cursorVisible && "|"}</span>
    </span>
  );
};

export default Typing;
