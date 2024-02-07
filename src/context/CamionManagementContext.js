import React from "react";
import { createContext, useContext,useState } from "react";

const CamionManagementContext = createContext();

export const CamionManagementContextProvider = ({ children }) => {

  const [open, setOpen] = useState(false);

//----------------------------------------------------------------
//Style Modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

//-----------------------------------------------------------------
//Function Modal

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);


  return (

    <CamionManagementContext.Provider value={{ style, open, setOpen, handleOpen, handleClose }}>
      { children}
    </CamionManagementContext.Provider>
  );
};

export function useCamionManagementContext() {
  return useContext(CamionManagementContext);
}