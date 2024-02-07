import React from "react";
import { useCamionManagementContext } from "../../context/CamionManagementContext";
import Typography from "../typography/Typography";
import ButtonMaterial from "../button/ButtonMaterial";
import { Box, Modal } from "@mui/material";


const ModalMaterial = () => {
  const { open, handleClose, style, setOpen } = useCamionManagementContext();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        //onClick={handleClickModal}
      >
        <Box sx={style}>
          <Typography type="h1" text="Reporte de camiones asignados" />
          <ButtonMaterial onClick={() => setOpen(false)} text="CERRAR" />
        </Box>
      </Modal>
    </div>
  );
}

export default ModalMaterial;


