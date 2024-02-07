import React from "react";
import { Modal, Typography, Button } from "@mui/material";
import { useAppContext } from "../../context/Context";

const DeliveryModal = () => {
  const { state, dispatch } = useAppContext();

  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const { formData } = state;

  return (
    <Modal open={state.modalOpen} onClose={handleClose}>
      <div
        style={{
          width: 400,
          padding: 16,
          backgroundColor: "white",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="h5">Informacion del Camión</Typography>
        {formData && (
          <div>
            <Typography variant="subtitle1">
              Nombre del Conductor: {formData.driverName}
            </Typography>

            {formData.truckPhoto && (
              <img
                src={formData.truckPhoto}
                alt="Foto del Camión"
                style={{ maxWidth: "100%", maxHeight: 200, marginTop: 16 }}
              />
            )}

            <Typography variant="h6">Direcciones:</Typography>
            {formData.addresses.map((address, index) => (
              <div key={index}>
                <Typography variant="subtitle2">
                  Dirección {index + 1}:
                </Typography>
                <Typography variant="body2">
                  Dirección: {address.address}
                </Typography>
                <Typography variant="body2">
                  Teléfono: {address.phone}
                </Typography>
                <Typography variant="body2">
                  Persona que recibirá: {address.recipient}
                </Typography>
              </div>
            ))}
          </div>
        )}
        <Button onClick={handleClose}>Cerrar</Button>
      </div>
    </Modal>
  );
};

export default DeliveryModal;
