import React from "react";
import { Grid, Typography, TextField } from "@mui/material";

const Titulo = ({ titulo, setTitulo }) => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h6">Título</Typography>
      </Grid>
      <Grid item>
        <TextField
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          fullWidth
          size="small"
        />
      </Grid>
    </Grid>
  );
};

export default Titulo;
