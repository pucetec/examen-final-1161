import React from "react";
import { Grid, Typography, TextField } from "@mui/material";

const Imagen = ({ imagen, setImagen }) => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h6">Imagen</Typography>
      </Grid>
      <Grid item>
        <img src={imagen} alt="Imagen" style={{ maxWidth: "100%" }} />
      </Grid>
      <Grid item>
        <TextField
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          fullWidth
          size="small"
        />
      </Grid>
    </Grid>
  );
};

export default Imagen;
