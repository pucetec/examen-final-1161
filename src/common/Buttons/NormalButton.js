import * as React from 'react';
import Button from '@mui/material/Button';

const NormalButton = ({text, onclick}) => {
  return (
      <Button variant="contained" onClick={onclick}>{text}</Button>
  );
}

export default NormalButton;