import React, { useState } from 'react';
import './App.css';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import md5 from 'md5';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [direcciones, setDirecciones] = useState({
    direccion1: '',
    direccion2: '',
    direccion3: '',
    direccion4: '',
    telefono1: '',
    telefono2: '',
    telefono3: '',
    telefono4: '',
    personaRecibe1: '',
    personaRecibe2: '',
    personaRecibe3: '',
    personaRecibe4: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDirecciones(prevState => ({
      ...prevState,
      [name]: value
    }));
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
          <img src="/path-to-truck-photo.jpg" alt="Truck" />
        </div>
        <div className="form-fields">
          <div className="form-group">
            <label htmlFor="nombreConductor">Nombre del conductor:</label>
            <input type="text" id="nombreConductor" name="nombreConductor" />
          </div>
          <div className="truck-photo-input">
            <label htmlFor="fotoCamion">Foto del camión:</label>
            <input type="file" id="fotoCamion" name="fotoCamion" />
          </div>
          <div className="form-group">
            <h3>Dirección 1</h3>
            <label htmlFor="direccion1">Dirección:</label>
            <input type="text" id="direccion1" name="direccion1" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="telefono1">Teléfono:</label>
            <input type="text" id="telefono1" name="telefono1" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="personaRecibe1">Persona que recibe:</label>
            <input type="text" id="personaRecibe1" name="personaRecibe1" onChange={handleChange} />
          </div>
          {/* Dirección 2 */}
          <div className="form-group">
            <h3>Dirección 2</h3>
            <label htmlFor="direccion2">Dirección:</label>
            <input type="text" id="direccion2" name="direccion2" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="telefono2">Teléfono:</label>
            <input type="text" id="telefono2" name="telefono2" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="personaRecibe2">Persona que recibe:</label>
            <input type="text" id="personaRecibe2" name="personaRecibe2" onChange={handleChange} />
          </div>
          {/* Dirección 3 */}
          <div className="form-group">
            <h3>Dirección 3</h3>
            <label htmlFor="direccion3">Dirección:</label>
            <input type="text" id="direccion3" name="direccion3" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="telefono3">Teléfono:</label>
            <input type="text" id="telefono3" name="telefono3" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="personaRecibe3">Persona que recibe:</label>
            <input type="text" id="personaRecibe3" name="personaRecibe3" onChange={handleChange} />
          </div>
          {/* Dirección 4 */}
          <div className="form-group">
            <h3>Dirección 4</h3>
            <label htmlFor="direccion4">Dirección:</label>
            <input type="text" id="direccion4" name="direccion4" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="telefono4">Teléfono:</label>
            <input type="text" id="telefono4" name="telefono4" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="personaRecibe4">Persona que recibe:</label>
            <input type="text" id="personaRecibe4" name="personaRecibe4" onChange={handleChange} />
          </div>
          {/* Botón VER PLAN */}
          <div className="form-group">
            <button className="btn btn-primary btn-lg" style={{ backgroundColor: '#5bc0de' }} onClick={handleVerPlan}>VER PLAN</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Plan de entregas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Dirección 1: {direcciones.direccion1}</p>
          <p>Teléfono 1: {direcciones.telefono1}</p>
          <p>Persona que recibe 1: {direcciones.personaRecibe1}</p>
          <p>Dirección 2: {direcciones.direccion2}</p>
          <p>Teléfono 2: {direcciones.telefono2}</p>
          <p>Persona que recibe 2: {direcciones.personaRecibe2}</p>
          <p>Dirección 3: {direcciones.direccion3}</p>
          <p>Teléfono 3: {direcciones.telefono3}</p>
          <p>Persona que recibe 3: {direcciones.personaRecibe3}</p>
          <p>Dirección 4: {direcciones.direccion4}</p>
          <p>Teléfono 4: {direcciones.telefono4}</p>
          <p>Persona que recibe 4: {direcciones.personaRecibe4}</p>
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
