import React from 'react';

const TranslationOutput = ({ translation }) => {
  return <textarea value={translation} readOnly placeholder="Translation will appear here..." />;
};

export default TranslationOutput;
