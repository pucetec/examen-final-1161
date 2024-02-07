import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const SelectButton = ({ selectOption, setSelectOption }) => {
  const handleOptionChange = (event) => {
    setSelectOption(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={selectOption}
        onChange={handleOptionChange}
        name="radio-buttons-group"
      >
        <FormControlLabel value="arriendo" control={<Radio />} label="Arriendo" />
        <FormControlLabel value="venta" control={<Radio />} label="Venta" />
      </RadioGroup>
    </FormControl>
  );
}

export default SelectButton;