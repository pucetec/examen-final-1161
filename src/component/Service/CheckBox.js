import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ServicesCheckBox = () => {
  return (
    <FormGroup>
      <h3 style={{ minWidth: "150px" }}>Servicios:</h3>
      <div>
      <FormControlLabel control={<Checkbox />} label="Internet" />
      <FormControlLabel control={<Checkbox />} label="Telefono" />
      <FormControlLabel control={<Checkbox />} label="Agua Potable" />
      </div>
      <div>
      <FormControlLabel control={<Checkbox />} label="Guardiania 24h" />
      <FormControlLabel control={<Checkbox />} label="Electricidad" />
      <FormControlLabel control={<Checkbox />} label="TV Cable" />
      </div>
    </FormGroup>
  );
}

export default ServicesCheckBox;