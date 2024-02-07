import { createContext, useContext, useState } from 'react';

const InfoContext = createContext();

export const InfoContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    metrosCuadrados: '',
    precio: '',
    baños: '',
    antiguedad: '',
    telefonoContacto: '',
    imagen1: '',
    imagen2: '',
    direccion: '',
    descripcion: ''
  });
  const [selectOption, setSelectOption] = useState('venta');
  const [selectedServices, setSelectedServices] = useState({
    internet: false,
    telefono: false,
    aguaPotable: false,
    guardiania: false,
    electricidad: false,
    tvCable: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e, imageName) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prevState => ({
        ...prevState,
        [imageName]: reader.result
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <InfoContext.Provider value={{ formData, selectOption, setSelectOption, selectedServices, setSelectedServices, handleInputChange, handleImageChange }}>
      {children}
    </InfoContext.Provider>
  );
};

export const useInfoContext = () => {
  return useContext(InfoContext);
};