function VerPropiedad(props) {
  const { datos } = props;

  return (
    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', marginRight: '50px' }}>
        <h1>{datos.titulo}</h1>
        <div style={{ textAlign: 'center' }}>
          <h3>Información básica:</h3>
          <p>Tipo de publicación: {datos.tipoPublicacion}</p>
          <p>Baños: {datos.baños}</p>
          <p>Años de antigüedad: {datos.antiguedad}</p>
          <p>Metros cuadrados: {datos.metrosCuadrados}</p>
          <h3>Contacto:</h3>
          <p>Teléfono: {datos.telefono}</p>
          <p>Dirección: {datos.direccion}</p>
        </div>
        <h3>Descripción:</h3>
        <p>{datos.descripcion}</p>
      </div>
      <div>
        <h3>Servicios:</h3>
        <ul>
          {Object.entries(datos.servicios).map(([servicio, disponible]) => (
            <li key={servicio}>
              {servicio}: {disponible ? 'Sí' : 'No'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VerPropiedad;
