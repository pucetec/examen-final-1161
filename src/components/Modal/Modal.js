import React from 'react';

const Modal = ({ titulo, imagen1, imagen2, tipoPublicacion, banos, antiguedad, metrosCuadrados, telefono, direccion, servicios, descripcion }) => {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>{titulo}</h2>
        <img src={imagen1} alt="Imagen 1" />
        <img src={imagen2} alt="Imagen 2" />
      </div>
      <div className="modal-body">
        <h3>Información Básica</h3>
        <p>Tipo de Publicación: {tipoPublicacion}</p>
        <p>Baños: {banos}</p>
        <p>Año de Antigüedad: {antiguedad}</p>
        <p>Metros Cuadrados: {metrosCuadrados}</p>

        <div className="contact-info">
          <div className="left">
            <h3>Contacto</h3>
            <p>Teléfono: {telefono}</p>
            <p>Dirección: {direccion}</p>
          </div>
          <div className="right">
            <h3>Servicios</h3>
            <ul>
              {Object.entries(servicios).map(([servicio, seleccionado]) => (
                <li key={servicio}>{seleccionado && servicio}</li>
              ))}
            </ul>
          </div>
        </div>

        <h3>Descripción</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default Modal;