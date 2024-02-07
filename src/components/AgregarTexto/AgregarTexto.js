import React, { useState } from 'react';

const AgregarTexto = () => {
  const [titulo, setTitulo] = useState('');
  const [metrosCuadrados, setMetrosCuadrados] = useState('');
  const [precio, setPrecio] = useState('');
  const [banos, setBanos] = useState('');
  const [antiguedad, setAntiguedad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [imagen1, setImagen1] = useState('');
  const [imagen2, setImagen2] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tipoPublicacion, setTipoPublicacion] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [servicios, setServicios] = useState({
    internet: false,
    telefono: false,
    aguaPotable: false,
    guardiania24h: false,
    electricidad: false,
    tvEnCable: false,
  });

  
  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleMetrosCuadradosChange = (event) => {
    setMetrosCuadrados(event.target.value);
  };

  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };

  const handleBanosChange = (event) => {
    setBanos(event.target.value);
  };

  const handleAntiguedadChange = (event) => {
    setAntiguedad(event.target.value);
  };

  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };

  const handleImagen1Change = (event) => {
    setImagen1(event.target.value);
  };

  const handleImagen2Change = (event) => {
    setImagen2(event.target.value);
  };

  const handleDireccionChange = (event) => {
    setDireccion(event.target.value);
  };

  const handleTipoPublicacionChange = (event) => {
    setTipoPublicacion(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleServiciosChange = (nombreServicio) => {
    setServicios((prevServicios) => ({
      ...prevServicios,
      [nombreServicio]: !prevServicios[nombreServicio],
    }));
  };

  return (
    <div className="AgregarTexto">
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ marginRight: '0.5rem' }}>Título</h2>
        <input
          type="text"
          value={titulo}
          onChange={handleTituloChange}
          placeholder="Ingrese la informacion "
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ marginRight: '0.5rem' }}>Metros cuadrados</h2>
        <input
          type="text"
          value={metrosCuadrados}
          onChange={handleMetrosCuadradosChange}
          placeholder="Ingrese los metros cuadrados"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ marginRight: '0.5rem' }}>Precio</h2>
        <input
          type="text"
          value={precio}
          onChange={handlePrecioChange}
          placeholder="Ingrese el precio "
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ marginRight: '0.5rem' }}>Baños</h2>
        <input
          type="text"
          value={banos}
          onChange={handleBanosChange}
          placeholder="Ingrese la cantidad de baños"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ marginRight: '0.5rem' }}>Años de Antigüedad</h2>
        <input
          type="text"
          value={antiguedad}
          onChange={handleAntiguedadChange}
          placeholder="Ingrese los años de antigüedad "
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ marginRight: '0.5rem' }}>Teléfono de Contacto</h2>
        <input
          type="text"
          value={telefono}
          onChange={handleTelefonoChange}
          placeholder="Ingrese el teléfono de contacto "
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ marginRight: '0.5rem' }}>Imagen 1</h2>
        <input
          type="text"
          value={imagen1}
          onChange={handleImagen1Change}
          placeholder="Ingrese la URL de la imagen 1 "
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ marginRight: '0.5rem' }}>Imagen 2</h2>
        <input
          type="text"
          value={imagen2}
          onChange={handleImagen2Change}
          placeholder="Ingrese la URL de la imagen 2"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2 style={{ marginRight: '0.5rem' }}>Dirección</h2>
        <input
          type="text"
          value={direccion}
          onChange={handleDireccionChange}
          placeholder="Ingrese la dirección "
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ marginRight: '0.5rem' }}>Tipo de Publicación</h2>
        <div>
          <label>
            <input
              type="radio"
              value="Arriendo"
              checked={tipoPublicacion === 'Arriendo'}
              onChange={handleTipoPublicacionChange}
            />
            Arriendo
          </label>
          <label>
            <input
              type="radio"
              value="Venta"
              checked={tipoPublicacion === 'Venta'}
              onChange={handleTipoPublicacionChange}
            />
            Venta
          </label>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ marginRight: '0.5rem' }}>Descripción</h2>
        <textarea
          value={descripcion}
          onChange={handleDescripcionChange}
          placeholder="Ingrese la descripción "
          rows={5} // Número de filas
          cols={50} // Número de columnas
          style={{ resize: 'none' }} // Evita que el usuario pueda cambiar el tamaño
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ marginRight: '0.5rem' }}>Servicios</h2>
        <div>
          <label>
            <input
              type="checkbox"
              checked={servicios.internet}
              onChange={() => handleServiciosChange('internet')}
            />
            Internet
          </label>
          <label>
            <input
              type="checkbox"
              checked={servicios.telefono}
              onChange={() => handleServiciosChange('telefono')}
            />
            Teléfono
          </label>
          <label>
            <input
              type="checkbox"
              checked={servicios.aguaPotable}
              onChange={() => handleServiciosChange('aguaPotable')}
            />
            Agua Potable
          </label>
          <label>
            <input
              type="checkbox"
              checked={servicios.guardiania24h}
              onChange={() => handleServiciosChange('guardiania24h')}
            />
            Guardiania 24h
          </label>
          <label>
            <input
              type="checkbox"
              checked={servicios.electricidad}
              onChange={() => handleServiciosChange('electricidad')}
            />
            Electricidad
          </label>
          <label>
            <input
              type="checkbox"
              checked={servicios.tvEnCable}
              onChange={() => handleServiciosChange('tvEnCable')}
            />
            TV en Cable
          </label>
        </div>
      
      </div>
      
    </div>
  );
};

export default AgregarTexto;  