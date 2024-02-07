import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';


const MatRadio = ({label, onChange}) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={selectedValue}
        onChange={handleRadioChange}
      >
        <FormControlLabel value="Venta" control={<Radio />} label="Venta" />
        <FormControlLabel value="Arriendo" control={<Radio />} label="Arriendo" />
      </RadioGroup>
    </FormControl>
  );
};

export default MatRadio