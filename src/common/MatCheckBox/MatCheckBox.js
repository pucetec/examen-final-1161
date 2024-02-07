import React from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

const MatCheckBox = ({ label, checked, onChange }) => {
  const handleCheckboxChange = (event) => {
    onChange(event.target.name, event.target.checked);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox onChange={handleCheckboxChange} name="Internet" />
            }
            label="Internet"
          />
          <FormControlLabel
            control={
              <Checkbox onChange={handleCheckboxChange} name="Agua Potable"/>
            }
            label="Agua Potable"
          />
          <FormControlLabel
            control={
              <Checkbox onChange={handleCheckboxChange} name="Electricidad"/>
            }
            label="Electricidad"
          />
        </FormGroup>
      </FormControl>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox onChange={handleCheckboxChange} name="Telefono"/>
            }
            label="Telefono"
          />
          <FormControlLabel
            control={
              <Checkbox onChange={handleCheckboxChange} name="Guardiania"/>
            }
            label="Guardiania 24H"
          />
          <FormControlLabel
            control={
              <Checkbox onChange={handleCheckboxChange} name="TV Cable"/>
            }
            label="TV Cable"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default MatCheckBox;