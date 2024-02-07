import React from "react";
import { Modal, Button } from "@mui/material";

function PropertyModal({ open, handleClose, propertyData }) {
  const {
    title,
    image1,
    image2,
    type,
    years,
    bathrooms,
    squareMeters,
    phone,
    address,
    services,
    description,
  } = propertyData;

  return (
    <Modal open={open} onClose={handleClose}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <h2>{title}</h2>
        <div>
          <img
            src={image1}
            alt="Imagen 1"
            style={{ width: "100px", marginRight: "10px" }}
          />
          <img src={image2} alt="Imagen 2" style={{ width: "100px" }} />
        </div>
        <h3>Información Básica</h3>
        <p>Tipo de Publicación: {type}</p>
        <p>Años de Antigüedad: {years}</p>
        <p>Baños: {bathrooms}</p>
        <p>Metros Cuadrados: {squareMeters}</p>
        <h3>Contacto</h3>
        <p>Teléfono: {phone}</p>
        <p>Dirección: {address}</p>
        <h3>Servicios</h3>
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <h3>Descripción</h3>
        <p>{description}</p>
        <Button variant="contained" onClick={handleClose}>
          Cerrar
        </Button>
      </div>
    </Modal>
  );
}

export default PropertyModal;
