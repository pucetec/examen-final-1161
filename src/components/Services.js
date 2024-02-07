import React from "react";
import {
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

const Servicios = ({ servicios, setServicios }) => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Servicios</Typography>
        <FormGroup>
          <Grid container spacing={2} justifyContent="center">
            {Object.entries(servicios).map(([servicio, valor]) => (
              <Grid item xs={12} key={servicio}>
                <FormControlLabel
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
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </Grid>
    </Grid>
  );
};

export default Servicios;
