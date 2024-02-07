import React from "react";
import { Button } from "@mui/material";

const ButtonMaterial = ({ text, onClick }) => {
  return <Button variant="contained" text={text} onClick={onClick}>{text}</Button>
};

export default ButtonMaterial;