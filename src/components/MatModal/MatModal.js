import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from '../../context/FormContext/FormContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

  '& h2': {
    color: '#333',
    textAlign: 'center',
  },

  '& hr': {
    border: '0',
    borderBottom: '1px solid #ddd',
  },

  '& h3': {
    color: '#555',
    marginTop: '10px',
  },

  '& p': {
    margin: '5px 0',
    color: '#777',
  },

  '& li': {
    margin: '5px 0',
    color: '#777',
  },
  
  '& .closeButton': {
    position: 'absolute',
    top: '8px',
    right: '8px',
  },
};

const MatModal = () => {
  const { open, handleClose, estate, imageUrls} = useForm();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <IconButton
            className="closeButton"
            onClick={handleClose}
            aria-label="close"
            color="inherit"
          >
            <CloseIcon />
          </IconButton>
          <h2>{estate.titulo}: ${estate.precio}</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {Object.values(imageUrls).map((url, index) => (
            url && <img key={index} src={url} alt={`Imagen ${index + 1}`} width={"160px"} height={"160px"}/>
          ))}
          </div>
          <div>
            <h3>Informacion Basica</h3>
            <hr />
            <p> Tipo de publicaion: {estate.tipoPublicacion}</p>
            <p> Años de antiguedad: {estate.antiguedad}</p>
            <p> Baños : {estate.banios} </p>
            <p> Metros de superficie: {estate.metros}m2</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h3>Contacto</h3>
              <hr />
              <p> Telefono: {estate.telefono}</p>
              <p> Direccion: {estate.direccion}</p>
            </div>
            <div>
              <h3>Servicios</h3>
              <hr />
              {estate.servicios.map((servicio) => (
                <li key={servicio}>{servicio}</li>
              ))}
            </div>
          </div>
          <div>
            <h3>Descripcion</h3>
            <hr />
            <p>{estate.descripcion}</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default MatModal;