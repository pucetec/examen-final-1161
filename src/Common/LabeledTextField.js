import { Box, TextField } from "@mui/material";

export const LabeledTextField = ({ label, inputId, onChange }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "20px" }}>
      <label htmlFor={inputId} style={{ paddingRight: "30px", width: "150px", textAlign: "right" }}>
        {label}
      </label>
      <TextField id={inputId} label={label} variant="outlined" onChange={onChange} />
    </Box>
  );
};
