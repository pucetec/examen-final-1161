import React from "react";
import Typography from "../../commons/typography/Typography";
import TextFieldMaterial from "../../commons/input/TextFieldMaterial";
import { useCamionManagementContext } from "../../context/CamionManagementContext";
import ButtonMaterial from "../../commons/button/ButtonMaterial";
import ModalMaterial from "../../commons/modal/ModalMaterial"; 

const Body = () => {
  const { setReceptionName1, setAddress1 } = useCamionManagementContext();
  return (
    <div>
      <div style={{ display: "flex"}}>
        <div>
          <center><Typography type="h3" text="Dirección 1" /></center>
            <div style={{ display: "flex"}}>
              <Typography type="p" text="Dirección" />
              <TextFieldMaterial onChange={(e) => setAddress1(e.target.value)} style={{ marginLeft: 20}}/>
            </div>
            <div style={{ display: "flex"}}>
              <Typography type="p" text="Teléfono" />
              <TextFieldMaterial style={{ marginLeft: 20}}/>
            </div>
            <div style={{ display: "flex"}}>
              <Typography type="p" text="Persona que recibe" />
              <TextFieldMaterial onChange={(e) => setReceptionName1(e.target.value)} style={{ marginLeft: 20}}/>
            </div>
          </div>
          <div style={{ marginLeft: 150}}>
            <center><Typography type="h3" text="Dirección 2" /></center>
              <div style={{ display: "flex"}}>
                <Typography type="p" text="Dirección" />
                <TextFieldMaterial style={{ marginLeft: 20}}/>
              </div>
              <div style={{ display: "flex"}}>
                <Typography type="p" text="Teléfono" />
                <TextFieldMaterial style={{ marginLeft: 20}}/>
              </div>
              <div style={{ display: "flex"}}>
                <Typography type="p" text="Persona que recibe" />
                <TextFieldMaterial style={{ marginLeft: 20}}/>
              </div>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: 100}}>
        <div>
          <center><Typography type="h3" text="Dirección 3" /></center>
            <div style={{ display: "flex"}}>
              <Typography type="p" text="Dirección" />
              <TextFieldMaterial style={{ marginLeft: 20}}/>
            </div>
            <div style={{ display: "flex"}}>
              <Typography type="p" text="Teléfono" />
              <TextFieldMaterial style={{ marginLeft: 20}}/>
            </div>
            <div style={{ display: "flex"}}>
              <Typography type="p" text="Persona que recibe" />
              <TextFieldMaterial style={{ marginLeft: 20}}/>
            </div>
          </div>
          <div style={{ marginLeft: 150}}>
            <center><Typography type="h3" text="Dirección 4" /></center>
              <div style={{ display: "flex"}}>
                <Typography type="p" text="Dirección" />
                <TextFieldMaterial style={{ marginLeft: 20}}/>
              </div>
              <div style={{ display: "flex"}}>
                <Typography type="p" text="Teléfono" />
                <TextFieldMaterial style={{ marginLeft: 20}}/>
              </div>
              <div style={{ display: "flex"}}>
                <Typography type="p" text="Persona que recibe" />
                <TextFieldMaterial style={{ marginLeft: 20}}/>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Body;