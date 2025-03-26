import { useState, useEffect } from "react";

const useTypingEffect = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!text) {
      setDisplayText(""); 
      return;
    }

    let i = 0;
    setDisplayText(text[0] || ""); 

    const interval = setInterval(() => {
      i++;
      if (i < text.length) { 
        setDisplayText((prev) => prev + text[i]);
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayText;
};

export default useTypingEffect;

