import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyButton = ({ text }) => {
  return (
    <CopyToClipboard text={text}>
      <button>Copy</button>
    </CopyToClipboard>
  );
};

export default CopyButton;
