import React from "react";
import ButtonMaterial from "./commons/button/ButtonMaterial";
import Typography from "./commons/typography/Typography";
import TextFieldMaterial from "./commons/input/TextFieldMaterial";
import Etiqueta from "./commons/etiqueta/Etiqueta";
import { CamionManagementContextProvider } from "./context/CamionManagementContext";
import Head from "./componentes/Head";



const App = ({ onClick }) => {
  return (
    <CamionManagementContextProvider>
      <div >
        <Head />
        
        
      </div>
    </CamionManagementContextProvider>
  );
}

export default App;
