import React from "react";
import './Form.css';
import MatTextField from "../../common/MatTextField/MatTextField";
import MatRadio from "../../common/MatRadio/MatRadio";
import MatCheckBox from "../../common/MatCheckBox/MatCheckBox";
import MatButton from "../../common/MatButton/MatButton";
import { useForm } from "../../context/FormContext/FormContext";

const Form = () => {
  const { handleSubmit, handleInputChange, handleCheckBoxChange, setImageUrls, imageUrls } = useForm();

  return (
    <div className="container">
    <div className="row">
      <label className="label">Titulo</label>
      <MatTextField label="Titulo" variant="outlined" onChange={(e) => handleInputChange("titulo", e.target.value)}/>
    </div>
    <div className="row">
      <label className="label">Metros Cuadrados</label>
      <MatTextField label="m2" variant="outlined" width={"80px"} onChange={(e) => handleInputChange("metros", e.target.value)} />
    </div>
    <div className="row">
      <label className="label">Precio</label>
      <MatTextField label="Precio" variant="outlined" width={"180px"} onChange={(e) => handleInputChange("precio", e.target.value)} />
    </div>
    <div className="row">
      <label className="label">Baños</label>
      <MatTextField label="Baños" variant="outlined" width={"80px"} onChange={(e) => handleInputChange("banios", e.target.value)} />
    </div>
    <div className="row">
      <label className="label">Años de antiguedad</label>
      <MatTextField label="Años" variant="outlined" width={"80px"} onChange={(e) => handleInputChange("antiguedad", e.target.value)} />
    </div>
    <div className="row">
      <label className="label">Telefono de contacto</label>
      <MatTextField label="Telefono" variant="outlined" width={"180px"} onChange={(e) => handleInputChange("telefono", e.target.value)} />
    </div>
    <div className="row">
      <label className="label">Imagen 1</label>
      <MatTextField label="imagen1" variant="outlined" width={"300px"} onChange={(event) => setImageUrls({ ...imageUrls, imagen1: event.target.value })}/>
    </div>
    <div className="row">
      <label className="label">Imagen 2</label>
      <MatTextField label="imagen2" variant="outlined" width={"300px"} onChange={(event) => setImageUrls({ ...imageUrls, imagen2: event.target.value })}/>
    </div>
    <div className="row">
      <label className="label">Direccion</label>
      <MatTextField label="Direccion" variant="outlined" width={"300px"} onChange={(e) => handleInputChange("direccion", e.target.value)} />
    </div>
    <div className="row">
      <label className="label">Tipo de publicacion</label>
      <MatRadio onChange={(value) => handleInputChange("tipoPublicacion", value)}/>
    </div>
    <div className="row">
      <label className="label">Descripcion</label>
      <MatTextField label="Descripcion" variant="outlined" width={"300px"} height={"100px"} onChange={(e) => handleInputChange("descripcion", e.target.value)}/>
    </div>
    <div className="row">
      <label className="label">Servicios</label>
      <MatCheckBox onChange={handleCheckBoxChange}/>
    </div>
    <div className="button">
      <MatButton text="Ver" variant={"contained"} onClick={handleSubmit}/>
    </div>
  </div>
  );
};

export default Form;