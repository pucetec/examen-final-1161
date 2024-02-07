import React from "react";
import { useFormContext } from "../../Context/FormContext";

// Componente del formulario
export function Form({camion, idModal}) {
  const { formData, updateFormData } = useFormContext();

  const handleImageChange = e => {
    const file = e.target.files[0];
    updateFormData('image', file);
  };

  const handleDireccionChange = (e, index) => {
    const { name, value } = e.target;
    const updatedDirecciones = [...formData.direcciones];
    updatedDirecciones[index] = {
      ...updatedDirecciones[index],
      [name]: value
    };
    updateFormData('direcciones', updatedDirecciones);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  return (
    <div className="">
      <h1 className="text-center mb-5">
        Asignación de entregas
      </h1>
      <div className="d-flex justify-content-between">
        <h2 className="alert alert-primary mb-0">
          {camion}
        </h2>
        <div className="d-flex flex-column gap-2">
          <div className="input-group gap-2">
            <label className="my-auto">Nombre del conductor</label>
            <input className="form-control" type="text" name="firstName" placeholder="Nombre" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="input-group gap-2">
            <label className="my-auto">Subir foto del camion</label>
            <input className="form-control" type="file" name="image" onChange={handleImageChange} />
          </div>
        </div>
      </div>
      <div className="row row-cols-2">
        {formData.direcciones.map((direccion, index) => (
          <div className="d-flex flex-column my-4 gap-4" key={index}>
            <h4>Dirección {index + 1}</h4>
            <div className="input-group gap-2">
              <label className="my-auto">Dirección</label>
              <input className="form-control" type="text" name="direccion" placeholder="Direccion" value={direccion.direccion} onChange={(e) => handleDireccionChange(e, index)} />
            </div>
            <div className="input-group gap-2">
              <label className="my-auto">Teléfono</label>
              <input className="form-control" type="text" name="telefono" placeholder="Teléfono" value={direccion.telefono} onChange={(e) => handleDireccionChange(e, index)} />
            </div>
            <div className="input-group gap-2">
              <label className="my-auto">Persona que recibe</label>
              <input className="form-control" type="text" name="personaRecibe" placeholder="Persona que recibe" value={direccion.personaRecibe} onChange={(e) => handleDireccionChange(e, index)} />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target={idModal}>
          Mostrar en modal
        </button>
      </div>
    </div>
  );
}