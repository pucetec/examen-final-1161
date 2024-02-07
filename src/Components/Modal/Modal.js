import React from "react";
import { useFormContext } from "../../Context/FormContext";;

// Componente del modal
export function Modal({ camion, idModal }) {
  const { formData } = useFormContext();

  // Filtrar las direcciones que tienen los tres campos vacíos
  const direccionesFiltradas = formData.direcciones.filter(direccion => (
    direccion.direccion !== "" || direccion.telefono !== "" || direccion.personaRecibe !== ""
  ));

  return (
    <div className="modal fade" id={idModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content p-4">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Reporte de Camiones Asignados
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h2 className="alert alert-primary mb-0">
              {camion}
            </h2>
            {formData.image && (
              <img src={URL.createObjectURL(formData.image)} className="my-5" alt="Imagen del camión" style={{ maxWidth: "100%", maxHeight: "300px" }} />
            )}
            <h4 className="mt-4">Datos del conductor:</h4>
            <p>Nombre: {formData.firstName}</p>
            <hr />
            {/* Mostrar detalles de las direcciones */}
            <h4 className="my-4 fw-bold">Direcciones:</h4>
            <div className="row row-cols-2">
              {direccionesFiltradas.map((direccion, index) => (
                <ul key={index}>
                  <h5 className="fw-bold mb-2">Entrega {index + 1}: {direccion.personaRecibe}</h5>
                  <li>
                    <p><strong>Dirección:</strong> {direccion.direccion}</p>
                  </li>
                  <li>
                    <p><strong>Teléfono:</strong> {direccion.telefono}</p>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}