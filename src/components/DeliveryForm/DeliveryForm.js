import React, { useState } from "react";
import { TextField, Button, Typography, Input } from "@mui/material";
import { useAppContext } from "../../context/Context";

const DeliveryForm = () => {
  const { dispatch } = useAppContext();
  const [formData, setFormData] = useState({
    driverName: "",
    truckPhoto: null,
    addresses: [
      { address: "", phone: "", recipient: "" },
      { address: "", phone: "", recipient: "" },
      { address: "", phone: "", recipient: "" },
      { address: "", phone: "", recipient: "" },
    ],
  });

  const handleInputChange = (index, field, value) => {
    const newAddresses = [...formData.addresses];
    newAddresses[index][field] = value;
    setFormData({ ...formData, addresses: newAddresses });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, truckPhoto: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const filteredAddresses = formData.addresses.filter(
      (address) =>
        address.address.trim() !== "" &&
        address.phone.trim() !== "" &&
        address.recipient.trim() !== ""
    );

    if (filteredAddresses.length > 0) {
      dispatch({
        type: "SUBMIT_DELIVERY",
        payload: { ...formData, addresses: filteredAddresses },
      });
    } else {
      console.error("Se debe ingresar al menos una dirección para continuar");
    }
  };

  return (
    <div>
      <Typography variant="h5">Asignación de Entregas</Typography>
      <br></br>
      <TextField
        label="Nombre del Conductor"
        value={formData.driverName}
        onChange={(e) =>
          setFormData({ ...formData, driverName: e.target.value })
        }
      />
      <label>
        <Input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: "none" }}
        />
        <Button component="span" variant="contained" color="primary">
          Subir Foto del Camión
        </Button>
      </label>

      {formData.addresses.map((address, index) => (
        <div key={index}>
          <Typography variant="subtitle1">Direccion {index + 1}</Typography>
          <br></br>
          <TextField
            label="Dirección"
            value={address.address}
            onChange={(e) =>
              handleInputChange(index, "address", e.target.value)
            }
          />
          <TextField
            label="Teléfono"
            value={address.phone}
            onChange={(e) => handleInputChange(index, "phone", e.target.value)}
          />
          <TextField
            label="Persona que Recibirá"
            value={address.recipient}
            onChange={(e) =>
              handleInputChange(index, "recipient", e.target.value)
            }
          />
        </div>
      ))}

      <Button onClick={handleSubmit} variant="contained" color="primary">
        Ver Plan
      </Button>
    </div>
  );
};

export default DeliveryForm;
