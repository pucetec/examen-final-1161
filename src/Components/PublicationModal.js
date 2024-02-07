import React from "react";
import { Modal, Box, Button, Grid } from "@mui/material";
import { useForm } from "../Context/FormContext";

const PublicationModal = ({ isOpen, handleClose }) => {
  const style = {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const { title, size, price, bathrooms, age, contactNumber, direction, type, description } = useForm();

  return (
    <div>
      <Modal open={isOpen}>
        <Box sx={style}>
          <h1>
            {title}: ${price}
          </h1>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ width: 200, paddingRight: 50 }}
              src="https://img10.naventcdn.com/avisos/resize/9/01/42/46/19/10/1200x1200/1397778577.jpg?isFirstImage=true"
              alt=""
            />
            <img style={{ width: 200 }} src="https://img10.naventcdn.com/avisos/resize/9/01/42/46/19/10/1200x1200/1397778578.jpg" alt="" />
          </Box>
          <Box>
            <h2 style={{ borderBottom: "solid", width: 250 }}>informacion basica</h2>
            <Box sx={{ display: "", width: 600, textAlign: "left" }}>
              <Box style={{ display: "flex" }}>
                <span style={{ paddingRight: 20, width: 200 }}>Publication Type: {type}</span>
                <span>building age: {age}</span>
              </Box>
              <Box style={{ display: "flex" }}>
                <span style={{ paddingRight: 20, width: 200 }}>bathrooms: {bathrooms}</span>
                <span>size (square meters): {size}</span>
              </Box>
            </Box>
          </Box>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default PublicationModal;
