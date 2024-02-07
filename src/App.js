import React from "react";
import { CamionManagementContextProvider } from "./context/CamionManagementContext";
import Head from "./componentes/head/Head";
import Body from "./componentes/body/Body";



const App = ({ onClick }) => {
  return (
    <CamionManagementContextProvider>
      <div >
        <Head />
        <Body />
        
        
      </div>
    </CamionManagementContextProvider>
  );
}

export default App;
