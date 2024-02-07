import React from "react";
import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [estate, setEstate] = useState({
    titulo: '',
    metros: '',
    precio: '',
    banios: '',
    antiguedad: '',
    telefono: '',
    direccion: '',
    tipoPublicacion: '',
    descripcion: '',
    servicios: [],
  });
  const [imageUrls, setImageUrls] = useState({
    imagen1: '',
    imagen2: '',
  });

  const handleInputChange = (name, value) => {
    setEstate((prevEstate) => ({
      ...prevEstate,
      [name]: value,
    }));
    console.log(estate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleCheckBoxChange = (name, value) => {
    setEstate((prevEstate) => {
      if (value) {
        return {
          ...prevEstate,
          servicios: [...prevEstate.servicios, name],
        };
      } else {
        return {
          ...prevEstate,
          servicios: prevEstate.servicios.filter((servicio) => servicio !== name),
        };
      }
    });
  
    console.log(estate);
  };

  const handleClose = () => setOpen(false);
  return (
    <FormContext.Provider value={{open, handleSubmit, handleClose, estate, setEstate, handleInputChange, handleCheckBoxChange, imageUrls, setImageUrls}}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext)