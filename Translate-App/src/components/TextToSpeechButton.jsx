import React from 'react';

const TextToSpeechButton = ({ text }) => {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return <button onClick={speak}>Listen</button>;
};

export default TextToSpeechButton;
