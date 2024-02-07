import React, { useState, useContext, createContext } from "react";

// Creamos un contexto para almacenar y compartir los datos del formulario
const FormContext = createContext();

// Componente proveedor del formulario que encapsula el estado y la lógica del formulario
export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    firstName: "",
    image: null,
    direcciones: [
      { direccion: "", telefono: "", personaRecibe: "" },
      { direccion: "", telefono: "", personaRecibe: "" },
      { direccion: "", telefono: "", personaRecibe: "" },
      { direccion: "", telefono: "", personaRecibe: "" }
    ]
  });
  const updateFormData = (fieldName, value) => {
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
}

// Hook personalizado para acceder al contexto del formulario
export function useFormContext() {
  return useContext(FormContext);
}