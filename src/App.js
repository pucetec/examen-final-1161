import React from "react";
import { FormProvider } from "./Context/FormContext";
import { Form } from "./Components/Form/Form";
import { Modal } from "./Components/Modal/Modal";

// Componente principal que integra el formulario y el modal
function App() {
  return (
    <>
      <FormProvider>
        <div className="App container max-vh-100 my-4">
          <Form camion={"Camion 1"} idModal={"#idModal1"} />
          <Modal camion={"Camion 1"} idModal={"idModal1"} />
        </div>
      </FormProvider>
      <FormProvider>
        <div className="App container max-vh-100 my-4">
          <Form camion={"Camion 2"} idModal={"#idModal4"} />
          <Modal camion={"Camion 2"} idModal={"idModal4"}/>
        </div>
      </FormProvider>
    </>
  );
}

export default App;