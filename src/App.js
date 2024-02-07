import { Checkbox, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import Modal from "./Modal/Modal.js";
import "./Checkbox.css";
import "./App.css";
/// link para probar imagen1 https://i.pinimg.com/originals/28/dc/d3/28dcd3bd56f526807ff51e76b73e7163.jpg
/// link para probar imagen2 https://c8.alamy.com/compes/tdnkbn/casa-tipica-frente-con-falso-primer-piso-koszeg-hungria-tdnkbn.jpg

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    squareMeters: "",
    price: "",
    bathrooms: "",
    years: "",
    phone: "",
    image1: "",
    image2: "",
    address: "",
    type: "",
    description: "",
    services: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleServiceChange = (e) => {
    const { checked, value } = e.target;
    let updatedServices = [...formData.services];
    if (checked) {
      updatedServices.push(value);
    } else {
      updatedServices = updatedServices.filter((service) => service !== value);
    }
    setFormData({
      ...formData,
      services: updatedServices,
    });
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h3>Formulario de Propiedad</h3>
      <div>
        <label for="title">Titulo</label>
        <input name="title" id="title" onChange={handleInputChange} />
      </div>
      <br></br>
      <div>
        <label>Metros Cuadrados</label>
        <input name="squareMeters" onChange={handleInputChange} />
      </div>
      <br></br>
      <div>
        <label>Precio</label>
        <input name="price" onChange={handleInputChange} />
      </div>
      <br />
      <div>
        <label>Baños</label>
        <input name="bathrooms" onChange={handleInputChange} />
      </div>
      <br />
      <div>
        <label>Años de Antiguedad</label>
        <input name="years" onChange={handleInputChange} />
      </div>
      <br />
      <div>
        <label>Telefono de Contacto</label>
        <input name="phone" onChange={handleInputChange} />
      </div>
      <br />
      <div>
        <label>Imagen1</label>
        <input name="image1" onChange={handleInputChange} />
      </div>
      <br />
      <div>
        <label>Imagen2</label>
        <input name="image2" onChange={handleInputChange} />
      </div>
      <br />
      <div>
        <label>Direccion</label>
        <input name="address" onChange={handleInputChange} />
      </div>
      <br />
      <div>
        <label>Tipo de Publicacion</label>
        <Checkbox
          className="circle-checkbox"
          value="Arriendo"
          onChange={handleInputChange}
        />
        Arriendo
        <Checkbox
          className="circle-checkbox"
          value="Venta"
          onChange={handleInputChange}
        />
        Venta
      </div>
      <br />
      <div>
        <label>Descripcion: </label>
        <TextField name="description" onChange={handleInputChange} />
      </div>
      <br />
      <div>
        <label>Servicios</label>
        <Checkbox value="Internet" onChange={handleServiceChange} /> Internet
        <Checkbox value="Agua Potable" onChange={handleServiceChange} /> Agua
        Potable
        <Checkbox value="Electricidad" onChange={handleServiceChange} />
        Electricidad
        <Checkbox value="Telefono" onChange={handleServiceChange} /> Telefono
        <Checkbox value="Guardiania 24h" onChange={handleServiceChange} />
        Guardiania 24h
        <Checkbox value="TV Cable" onChange={handleServiceChange} /> TV Cable
      </div>
      <Button variant="contained" onClick={handleOpenModal}>
        Ver
      </Button>
      <Modal
        open={openModal}
        handleClose={handleCloseModal}
        propertyData={formData}
      />
    </div>
  );
}

export default App;
