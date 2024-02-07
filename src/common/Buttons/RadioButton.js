import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const SelectButton = () => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="venta"
        name="radio-buttons-group"
      >
        <FormControlLabel value="arriendo" control={<Radio />} label="Arriendo" />
        <FormControlLabel value="venta" control={<Radio />} label="Venta" />
      </RadioGroup>
    </FormControl>
  );
}

export default SelectButton;