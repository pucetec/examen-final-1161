import React from "react";
import { Grid, Typography, TextField } from "@mui/material";

const Direccion = ({ direccion, setDireccion }) => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h6">Dirección</Typography>
      </Grid>
      <Grid item>
        <TextField
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          fullWidth
          size="small"
        />
      </Grid>
    </Grid>
  );
};

export default Direccion;
