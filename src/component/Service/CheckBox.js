import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ServicesCheckBox = ({selectedServices, setSelectedServices}) => {
  const handleServiceChange = (event) => {
    const { name, checked } = event.target;
    setSelectedServices(prevSelectedServices => ({
      ...prevSelectedServices,
      [name]: checked
    }));
  };
  return (
    <FormGroup>
      <h3 style={{ minWidth: "150px" }}>Servicios:</h3>
      <div>
        <FormControlLabel 
          control={<Checkbox name="internet" onChange={handleServiceChange} />}
          label="Internet"
        />
        <FormControlLabel 
          control={<Checkbox name="telefono" onChange={handleServiceChange} />}
          label="Telefono"
        />
        <FormControlLabel 
          control={<Checkbox name="aguaPotable" onChange={handleServiceChange} />}
          label="Agua Potable"
        />
      </div>
      <div>
        <FormControlLabel 
        control={<Checkbox name="guardiania" onChange={handleServiceChange} />}
        label="Guardiania"
        />
        <FormControlLabel 
          control={<Checkbox name="electricidad" onChange={handleServiceChange} />}
          label="Electricidad"
        />
        <FormControlLabel 
          control={<Checkbox name="tvCable" onChange={handleServiceChange} />}
          label="TV Cable"
        />
      </div>
    </FormGroup>
  );
}

export default ServicesCheckBox;