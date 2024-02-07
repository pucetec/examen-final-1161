import React, { useState } from 'react';
import './App.css';
import { Modal, Button } from 'react-bootstrap';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [direcciones, setDirecciones] = useState({
    direccion1: '',
    direccion2: '',
    direccion3: '',
    direccion4: '',
  });
  const [nombreConductor, setNombreConductor] = useState('');
  const [fotoCamionUrl, setFotoCamionUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'nombreConductor') {
      setNombreConductor(value);
    } else if (name === 'fotoCamion') {
      setFotoCamionUrl(value);
    } else {
      setDirecciones(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleVerPlan = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1>Asignación de entregas</h1>
      <div className="form-container">
        <div className="truck-photo">
          {fotoCamionUrl && <img src={fotoCamionUrl} alt="Truck" />}
        </div>
        <div className="form-fields">
          <div className="form-group">
            <label htmlFor="nombreConductor">Nombre del conductor:</label>
            <input type="text" id="nombreConductor" name="nombreConductor" onChange={handleChange} style={{ width: '180px', marginBottom: '10px' }} />
          </div>
          <div className="truck-photo-input">
            <label htmlFor="fotoCamion">Foto del camión (URL):</label>
            <input type="text" id="fotoCamion" name="fotoCamion" onChange={handleChange} style={{ width: '300px', marginBottom: '10px' }} />
          </div>
          <div className="form-group">
            <h3>Dirección 1</h3>
            <label htmlFor="direccion1">Dirección:</label>
            <input type="text" id="direccion1" name="direccion1" onChange={handleChange} style={{ width: '300px', marginBottom: '10px' }} />
          </div>
          <div className="form-group">
            <h3>Dirección 2</h3>
            <label htmlFor="direccion2">Dirección:</label>
            <input type="text" id="direccion2" name="direccion2" onChange={handleChange} style={{ width: '300px', marginBottom: '10px' }} />
          </div>
          <div className="form-group">
            <h3>Dirección 3</h3>
            <label htmlFor="direccion3">Dirección:</label>
            <input type="text" id="direccion3" name="direccion3" onChange={handleChange} style={{ width: '300px', marginBottom: '10px' }} />
          </div>
          <div className="form-group">
            <h3>Dirección 4</h3>
            <label htmlFor="direccion4">Dirección:</label>
            <input type="text" id="direccion4" name="direccion4" onChange={handleChange} style={{ width: '300px', marginBottom: '10px' }} />
          </div>
          
          <div className="form-group">
            <button className="btn btn-primary btn-lg" style={{ backgroundColor: '#5bc0de' }} onClick={handleVerPlan}>VER PLAN</button>
          </div>
        </div>
      </div>

      
      <Modal show={showModal} onHide={handleCloseModal} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Plan de entregas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Nombre del conductor: {nombreConductor}</p>
          <p>Foto del camión:</p>
          {fotoCamionUrl && <img src={fotoCamionUrl} alt="Truck" />}
          <p>Dirección 1: {direcciones.direccion1}</p>
          <p>Dirección 2: {direcciones.direccion2}</p>
          <p>Dirección 3: {direcciones.direccion3}</p>
          <p>Dirección 4: {direcciones.direccion4}</p>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
