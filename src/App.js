import React from "react";
import { AppProvider } from "./context/Context";
import DeliveryForm from "./components/DeliveryForm/DeliveryForm";
import DeliveryModal from "./components/DeliveryModal/DeliveryModal";

const App = () => {
  return (
    <AppProvider>
      <div>
        <DeliveryForm />
        <DeliveryModal />
      </div>
    </AppProvider>
  );
};

export default App;
