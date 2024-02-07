import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [titulo, setTitulo] = useState("");
  const [metrosCuadrados, setMetrosCuadrados] = useState("");
  const [precio, setPrecio] = useState("");
  const [baños, setBaños] = useState("");
  const [antig, setAntig] = useState("");
  const [telefono, setTelefono] = useState("");
  const [imagen1, setImagen1] = useState("");
  const [imagen2, setImagen2] = useState("");
  const [direccion, setDireccion] = useState("");
  const [tipoPublicacion, setTipoPublicacion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [servicios, setServicios] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <AppContext.Provider
      value={{
        titulo,
        setTitulo,
        metrosCuadrados,
        setMetrosCuadrados,
        precio,
        setPrecio,
        baños,
        setBaños,
        antig,
        setAntig,
        telefono,
        setTelefono,
        imagen1,
        setImagen1,
        imagen2,
        setImagen2,
        direccion,
        setDireccion,
        tipoPublicacion,
        setTipoPublicacion,
        descripcion,
        setDescripcion,
        servicios,
        setServicios,
        show,
        handleClose,
        handleShow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
