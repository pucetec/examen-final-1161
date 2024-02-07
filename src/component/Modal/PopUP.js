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

const PopUpView = ({formData}) => {
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Informacion de la propiedad
            </Typography>
            <div>
              <h3>Titulo: {formData.titulo}</h3>
              <h3>Area: {formData.metrosCuadrados} m2</h3>
              <h3>Precio: $ {formData.precio}</h3>
            </div>
            <Button onClick={handleClose}>Cerrar</Button>
          </Box>
        </Modal>
      </div>
    );
  }

export default PopUpView;