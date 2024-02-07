import React from "react";
import Typography from "../../commons/typography/Typography";
import Etiqueta from "../../commons/etiqueta/Etiqueta";
import TextFieldMaterial from "../../commons/input/TextFieldMaterial";
import { useCamionManagementContext } from "../../context/CamionManagementContext";
import ButtonMaterial from "../../commons/button/ButtonMaterial";
import ModalMaterial from "../../commons/modal/ModalMaterial";

const Head = () => {
  const { handleOpen, setConductorName } = useCamionManagementContext();
  return (
    <div>
      <center>
        <ButtonMaterial text="TEST MODAL" onClick={handleOpen}/>
        <ModalMaterial />
        <Typography type="h1" text="Asignación de entregas" />
      </center>
      <div style={{ display: "flex", margin: 50 }}>
        <Etiqueta text="CAMION 1" />
        <div style={{ alignItems: "center", marginLeft: 50}} >
          <div>
            <Typography type="p" text="Nombre conductor" />
            <TextFieldMaterial onChange={(e) => setConductorName(e.target.value)}/>
          </div>
          <div>
            <Typography type="p" text="Foto camión" />
            <TextFieldMaterial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;