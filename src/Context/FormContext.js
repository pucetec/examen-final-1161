import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [direction, setDirection] = useState("");
  const [type, setType] = useState("Sell");
  const [description, setDescription] = useState("");

  return (
    <FormContext.Provider
      value={{
        title,
        size,
        price,
        bathrooms,
        age,
        contactNumber,
        direction,
        type,
        description,
        setTitle,
        setSize,
        setPrice,
        setBathrooms,
        setAge,
        setContactNumber,
        setDirection,
        setType,
        setDescription,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export function useForm() {
  return useContext(FormContext);
}
