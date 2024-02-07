import React from "react";
import { useCamionManagementContext } from "../../context/CamionManagementContext";
import Typography from "../typography/Typography";
import ButtonMaterial from "../button/ButtonMaterial";
import { Box, Modal } from "@mui/material";
import TextFieldMaterial from "../input/TextFieldMaterial";

const ModalMaterial = () => {
  const { open, handleClose, style, setOpen, conductorName, receptionName1, address1 } = useCamionManagementContext();

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
          <div>
            <div>
              
              <div style={{ display: "flex"}}>
                <Typography type="p" text="Nombre: " />
                <div style={{ margin: "auto"}}>
                  {conductorName}
                </div>
              </div>
            </div>
            <div style={{ display: "flex"}}>
              <Typography type="h3" text="Entrega 1: " />
              <div style={{ margin: "auto"}}>
                {receptionName1}
              </div>
              <Typography type="p" text="Dirección: " />
              <div style={{ margin: "auto"}}>
                {address1}
              </div>
            </div>
          </div>
          <ButtonMaterial onClick={() => setOpen(false)} text="CERRAR" />
        </Box>
      </Modal>
    </div>
  );
}

export default ModalMaterial;


