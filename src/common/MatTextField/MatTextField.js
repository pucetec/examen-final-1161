import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';

const MatTextField = ({ label, variant, onChange, width, height }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label={label} variant={variant} onChange={onChange} size='small' multiline style={{ width, height }} />
    </Box>
  );
};

export default MatTextField;
