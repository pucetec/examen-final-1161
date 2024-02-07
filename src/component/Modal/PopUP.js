import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import NormalButton from '../../common/Buttons/NormalButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxWidth: '90%',
  maxHeight: '80vh',
  overflowY: 'auto', 
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PopUpView = ({formData, selectOption, selectedServices}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
  
    return (
      <div style={{ display: 'inline-block', marginRight: '5px' }}>
        <NormalButton text={"Ver"} onclick={handleOpen}></NormalButton>
        <Modal
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2>Informacion de la propiedad</h2>
            <img src={formData.imagen1} alt="Imagen 1" />
            <img src={formData.imagen2} alt="Imagen 2" />
            <div>
              <Typography>{formData.titulo}: ${formData.precio}</Typography>
              <h4>Informacion Basica</h4>
              <Typography>Area: {formData.metrosCuadrados} m2</Typography>
              <Typography>Baños: {formData.baños}</Typography>
              <Typography>Años de antiguedad: {formData.antiguedad}</Typography>
              <Typography>Tipo de publicacion: {selectOption}</Typography>
              <h4>Contacto</h4>
              <Typography>Telefono: {formData.telefonoContacto}</Typography>
              <Typography>Direccion: {formData.direccion}</Typography>
              <h4>Descripcion</h4>
              <Typography>Descripcion: {formData.descripcion}</Typography>
              <br></br>
              <h4>Servicios</h4>
              <ul>
                {Object.entries(selectedServices).map(([service, checked]) => (
                  checked && <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <Button onClick={handleClose}>Cerrar</Button>
          </Box>
        </Modal>
      </div>
    );
  }

export default PopUpView;