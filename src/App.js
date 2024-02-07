import React, { useState } from 'react';
import './App.css';
import VerPropiedad from './propiedades/VerPropiedad';

function App() {
  const [tipoPublicacion, setTipoPublicacion] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [servicios, setServicios] = useState({
    INTERNET: false,
    AGUAPOTABLE: false,
    GUARDIA: false,
    ELECTRICIDAD: false,
    TVCABLE: false,
  });
  const [datos, setDatos] = useState(null);
  const [mostrarPropiedad, setMostrarPropiedad] = useState(false);

  const handleServiciosChange = (servicio) => {
    setServicios({
      ...servicios,
      [servicio]: !servicios[servicio]
    });
  };

  const handleGuardarDatos = () => {
    const datosGuardados = {
      titulo: document.getElementById('titulo').value,
      metrosCuadrados: document.getElementById('metrosCuadrados').value,
      precio: document.getElementById('precio').value,
      baños: document.getElementById('baños').value,
      antiguedad: document.getElementById('antiguedad').value,
      telefono: document.getElementById('telefono').value,
      imagen1: document.getElementById('imagen1').value,
      imagen2: document.getElementById('imagen2').value,
      direccion: document.getElementById('direccion').value,
      tipoPublicacion,
      descripcion,
      servicios,
    };
    setDatos(datosGuardados);
    setMostrarPropiedad(true);
  };

  const handleVolverAlFormulario = () => {
    setDatos(null);
    setMostrarPropiedad(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Formulario de Propiedad</h1>
      {!mostrarPropiedad ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
          <div style={{ marginBottom: '30px' }}>
            <label>TITULO:</label>
            <input id="titulo" type="text" />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label>METROS CUADRADOS:</label>
            <input id="metrosCuadrados" type="text" />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label>PRECIO</label>
            <input id="precio" type="text" />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label>BAÑOS:</label>
            <input id="baños" type="text" />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label>AÑOS DE ANTIGUEDAD:</label>
            <input id="antiguedad" type="text" />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label>TELEFONO DE CONTACTO:</label>
            <input id="telefono" type="text" />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label>Imagen 1:</label>
            <input id="imagen1" type="text" />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label>Imagen 2:</label>
            <input id="imagen2" type="text" />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label>Direccion:</label>
            <input id="direccion" type="text" />
          </div>
          <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '10px' }}>Tipo de publicacion:</label>
            <button style={{ marginRight: '10px', background: tipoPublicacion === 'venta' ? 'lightblue' : 'white' }} onClick={() => setTipoPublicacion('venta')}>Venta</button>
            <button style={{ background: tipoPublicacion === 'arriendo' ? 'lightblue' : 'white' }} onClick={() => setTipoPublicacion('arriendo')}>Arriendo</button>
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label>Descripción:</label>
            <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label>Servicios:</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '10px' }}>
              <label><input type="checkbox" checked={servicios.INTERNET} onChange={() => handleServiciosChange('INTERNET')} />INTERNET</label>
              <label><input type="checkbox" checked={servicios.TELEFONO} onChange={() => handleServiciosChange('TELEFONO')} />TELEFONO</label>
              <label><input type="checkbox" checked={servicios.AGUAPOTABLE} onChange={() => handleServiciosChange('AGUAPOTABLE')} />AGUA POTABLE</label>
              <label><input type="checkbox" checked={servicios.GUARDIA} onChange={() => handleServiciosChange('GUARDIA')} />GUARDIA 24/7</label>
              <label><input type="checkbox" checked={servicios.ELECTRICIDAD} onChange={() => handleServiciosChange('ELECTRICIDAD')} />ELECTRICIDAD</label>
              <label><input type="checkbox" checked={servicios.TVCABLE} onChange={() => handleServiciosChange('TVCABLE')} />TV CABLE</label>
            </div>
          </div>
          <button onClick={handleGuardarDatos}>Guardar y Ver Propiedad</button>
        </div>
      ) : (
        <div>
          <VerPropiedad datos={datos} />
          <button onClick={handleVolverAlFormulario}>Volver al Formulario</button>
        </div>
      )}
    </div>
  );
}

export default App;
