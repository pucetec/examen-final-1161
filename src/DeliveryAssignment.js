import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const DeliveryAssignment = ({
  index,
  address,
  onChangeAddress,
  driver,
  onChangeDriver,
  onSelectAssignment,
}) => {
  const [localAddress, setLocalAddress] = useState(address);
  const [localDriver, setLocalDriver] = useState(driver);

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setLocalAddress((prevState) => ({ ...prevState, [name]: value }));
    onChangeAddress(index, { ...address, [name]: value });
  };

  const handleDriverChange = (event) => {
    const { name, value } = event.target;
    setLocalDriver((prevState) => ({ ...prevState, [name]: value }));
    onChangeDriver(index, { ...driver, [name]: value });
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <TextField
        label="Name"
        name="name"
        value={localAddress.name}
        onChange={handleAddressChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Address"
        name="address"
        value={localAddress.address}
        onChange={handleAddressChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        name="phone"
        value={localAddress.phone}
        onChange={handleAddressChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Driver Name"
        name="name"
        value={localDriver.name}
        onChange={handleDriverChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={onSelectAssignment}>
        Ver plan
      </Button>
    </div>
  );
};

export default DeliveryAssignment;