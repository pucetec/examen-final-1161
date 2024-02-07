import React from "react";
import { createContext, useContext,useState } from "react";

const CamionManagementContext = createContext();

export const CamionManagementContextProvider = ({ children }) => {

  const [open, setOpen] = useState(false);
  const [conductorName, setConductorName] = useState("");
  const [receptionName1, setReceptionName1] = useState("")
  const [address1, setAddress1] = useState("");

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


  const handleOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => setOpen(false);



  return (

    <CamionManagementContext.Provider value={{ style,
                                               open,
                                               setOpen, 
                                               handleOpen, 
                                               handleClose, 
                                               setConductorName,
                                               conductorName,
                                               setReceptionName1,
                                               receptionName1,
                                               setAddress1,
                                               address1 }}>
      { children}
    </CamionManagementContext.Provider>
  );
};

export function useCamionManagementContext() {
  return useContext(CamionManagementContext);
}