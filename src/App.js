import './App.css';
import SelectButton from './common/Buttons/RadioButton';
import ServicesCheckBox from './component/Service/CheckBox';
import PopUpView from './component/Modal/PopUP';
import { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    metrosCuadrados: '',
    precio: '',
    banos: '',
    antiguedad: '',
    anoAntiguedad: '',
    telefonoContacto: '',
    imagen1: '',
    imagen2: '',
    direccion: '',
    tipoPublicacion: '',
    descripcion: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div style={{ paddingLeft: '20px' }}>
      <h1>Formulario de Propiedad</h1>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Titulo: </h3>
        <input name="titulo" value={formData.titulo} onChange={handleInputChange}></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Metros<br></br>cuadrados: </h3>
        <input name="metrosCuadrados" value={formData.metrosCuadrados} onChange={handleInputChange}></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Precio: </h3>
        <input name="precio" value={formData.precio} onChange={handleInputChange}></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Baños: </h3>
        <input></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Antiguedad: </h3>
        <input></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Año de<br></br>Antiguedad: </h3>
        <input></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Telefono<br></br>de contacto: </h3>
        <input></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Imagen 1: </h3>
        <input></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Imagen 2: </h3>
        <input></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Direccion: </h3>
        <input></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Tipo de<br></br>Publicacion: </h3>
        <SelectButton/>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Descripcion: </h3>
        <input></input>
      </div>
      <br></br>
      <ServicesCheckBox></ServicesCheckBox>
      <br></br>
      <PopUpView formData={formData}></PopUpView>
    </div>
  );
}

export default App;
