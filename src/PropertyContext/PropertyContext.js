import React, { createContext, useContext, useState } from "react";

const PropertyContext = createContext();

export const usePropertyContext = () => {
  return useContext(PropertyContext);
};

export const PropertyProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    squareMeters: "",
    price: "",
    bathrooms: "",
    years: "",
    phone: "",
    image1: "",
    image2: "",
    address: "",
    type: [],
    description: "",
    services: [],
  });

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleServiceChange = (e) => {
    const { checked, value } = e.target;
    let updatedServices = [...formData.services];
    if (checked) {
      updatedServices.push(value);
    } else {
      updatedServices = updatedServices.filter((service) => service !== value);
    }
    setFormData({
      ...formData,
      services: updatedServices,
    });
  };

  return (
    <PropertyContext.Provider
      value={{
        openModal,
        formData,
        handleOpenModal,
        handleCloseModal,
        handleInputChange,
        handleServiceChange,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
