import Button from "@mui/material/Button";
import React from "react";
import Box from '@mui/material/Box';

const MatButton = ({ text, variant, onClick, disabled }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Button
        variant={variant}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </Button>
    </Box>
  );
};

export default MatButton;