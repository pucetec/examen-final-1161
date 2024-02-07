import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Modal,
  TextField,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

import Titulo from "./components/Titulo";

const Formulario = () => {
  const [open, setOpen] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [metrosCuadrados, setMetrosCuadrados] = useState("");
  const [tipoPublicacion, setTipoPublicacion] = useState("");
  const [precio, setPrecio] = useState("");
  const [baño, setBaño] = useState("");
  const [añoDeAntiguedad, setAñoDeAntiguedad] = useState("");
  const [TelefonoContacto, setTelefonoContacto] = useState("");
  const [imagen1, setImagen1] = useState("");
  const [imagen2, setImagen2] = useState("");
  const [dirrecion, setDirrecion] = useState("");
  const [servicios, setServicios] = useState({
    internet: false,
    aguaPotable: false,
    electricidad: false,
    telefono: false,
    guardinania24horas: false,
    tvCable: false,
  });

  const modalStyle = {
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    padding: "16px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpen();
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        border: "1px solid #ccc",
        width: "fit-content",
        margin: "auto",
      }}
    >
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Formulario de Propiedad
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center">
          <Titulo titulo={titulo} setTitulo={setTitulo} />
          <Grid item xs={6}>
            <Typography variant="h6">Metros Cuadrados</Typography>
            <TextField
              value={metrosCuadrados}
              onChange={(e) => setMetrosCuadrados(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Tipo de Publicación</Typography>
            <Select
              value={tipoPublicacion}
              onChange={(e) => setTipoPublicacion(e.target.value)}
              fullWidth
              size="small"
            >
              <MenuItem value="arriendo">Arriendo</MenuItem>
              <MenuItem value="venta">Venta</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Precio</Typography>
            <TextField
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Baño</Typography>
            <TextField
              value={baño}
              onChange={(e) => setBaño(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Años de Antigüedad</Typography>
            <TextField
              value={añoDeAntiguedad}
              onChange={(e) => setAñoDeAntiguedad(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Teléfono de Contacto</Typography>
            <TextField
              value={TelefonoContacto}
              onChange={(e) => setTelefonoContacto(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Imagen</Typography>
            <TextField
              value={imagen1}
              onChange={(e) => setImagen1(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Imagen 2</Typography>
            <TextField
              value={imagen2}
              onChange={(e) => setImagen2(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Dirección</Typography>
            <TextField
              value={dirrecion}
              onChange={(e) => setDirrecion(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Servicios</Typography>
            <FormGroup>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ marginRight: "20px" }}>
                  {Object.entries(servicios)
                    .slice(0, 3)
                    .map(([servicio, valor]) => (
                      <FormControlLabel
                        key={servicio}
                        control={
                          <Checkbox
                            checked={valor}
                            onChange={(e) =>
                              setServicios({
                                ...servicios,
                                [servicio]: e.target.checked,
                              })
                            }
                          />
                        }
                        label={servicio}
                      />
                    ))}
                </div>
                <div>
                  {Object.entries(servicios)
                    .slice(3, 6)
                    .map(([servicio, valor]) => (
                      <FormControlLabel
                        key={servicio}
                        control={
                          <Checkbox
                            checked={valor}
                            onChange={(e) =>
                              setServicios({
                                ...servicios,
                                [servicio]: e.target.checked,
                              })
                            }
                          />
                        }
                        label={servicio}
                      />
                    ))}
                </div>
              </div>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Ver
            </Button>
          </Grid>
        </Grid>
      </form>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle}>
          <Typography variant="h6">Información de Propiedad</Typography>
          <Typography>Título: {titulo}</Typography>
          <Typography>Metros Cuadrados: {metrosCuadrados}</Typography>
          <Typography>Tipo de Publicación: {tipoPublicacion}</Typography>
          <Typography>Precio: {precio}</Typography>
          <Typography>Baño: {baño}</Typography>
          <Typography>Años de Antigüedad: {añoDeAntiguedad}</Typography>
          <Typography>Teléfono de Contacto: {TelefonoContacto}</Typography>
          <Typography>Imagen: {imagen1}</Typography>
          <Typography>Imagen 2: {imagen2}</Typography>
          <Typography>Dirección: {dirrecion}</Typography>
          <Typography>Servicios:</Typography>
          <ul>
            {Object.entries(servicios).map(
              ([servicio, valor]) => valor && <li key={servicio}>{servicio}</li>
            )}
          </ul>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Formulario;
