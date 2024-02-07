import React from "react";
import { TextField } from "@mui/material";

const TextFieldMaterial = ({ onChange, style }) => {
  return <TextField onChange={onChange} style={style} ></TextField>
};

export default TextFieldMaterial;