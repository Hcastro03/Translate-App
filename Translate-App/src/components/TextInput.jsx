import React from 'react';

const TextInput = ({ text, onTextChange }) => {
  return (
    <textarea 
      value={text} 
      onChange={(e) => onTextChange(e.target.value)} 
      placeholder="Enter text here..." 
      maxLength="500" 
    />
  );
};

export default TextInput;
