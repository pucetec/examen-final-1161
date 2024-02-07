import "./App.css";
import { LabeledTextField } from "./Common/LabeledTextField";
import PublicationModal from "./Components/PublicationModal";
import { Button, Box, TextField, FormControlLabel, FormGroup, RadioGroup, Radio, Checkbox } from "@mui/material";
import { useState } from "react";
import { useForm } from "./Context/FormContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const { setTitle, setSize, setPrice, setBathrooms, setAge, setContactNumber, setDirection, setType, setDescription } = useForm();

  return (
    <div className="App">
      <h1>property Form</h1>
      <LabeledTextField onChange={(event) => setTitle(event.target.value)} inputId="text_field_title" label="Title"></LabeledTextField>
      <LabeledTextField onChange={(event) => setSize(event.target.value)} inputId="text_field_square_meters" label="Square Meters"></LabeledTextField>
      <LabeledTextField onChange={(event) => setPrice(event.target.value)} inputId="text_field_price" label="Price"></LabeledTextField>
      <LabeledTextField onChange={(event) => setBathrooms(event.target.value)} inputId="text_field_bathrooms" label="Bathrooms"></LabeledTextField>
      <LabeledTextField onChange={(event) => setAge(event.target.value)} inputId="text_field_age" label="Building Age"></LabeledTextField>
      <LabeledTextField
        onChange={(event) => setContactNumber(event.target.value)}
        inputId="text_field_contact_number"
        label="Contact Number"
      ></LabeledTextField>
      <LabeledTextField inputId="text_field_image_1" label="Image 1"></LabeledTextField>
      <LabeledTextField inputId="text_field_image_2" label="Image 2"></LabeledTextField>
      <LabeledTextField onChange={(event) => setDirection(event.target.value)} inputId="text_field_direction" label="Direction"></LabeledTextField>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "20px" }}>
        <label htmlFor="radio_buttons_Type" style={{ paddingRight: "30px", width: "150px", textAlign: "right" }}>
          Publication Type
        </label>
        <RadioGroup
          onChange={(event) => setType(event.target.value)}
          aria-labelledby="radio_buttons_publication_type"
          defaultValue="sell"
          name="radio-buttons-group"
          row
          sx={{ width: "245px" }}
        >
          <FormControlLabel value="sell" control={<Radio />} label="Sell" />
          <FormControlLabel value="rent" control={<Radio />} label="Rent" />
        </RadioGroup>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "20px" }}>
        <label htmlFor="text_area_description" style={{ paddingRight: "30px", width: "150px", textAlign: "right" }}>
          Description
        </label>
        <TextField
          onChange={(event) => setDescription(event.target.value)}
          id="text_area_description"
          label="Description"
          variant="outlined"
          multiline
          rows={5}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "20px" }}>
        <label htmlFor="text_area_description" style={{ paddingRight: "30px", width: "150px", textAlign: "right" }}>
          Servicios
        </label>
        <Box sx={{ width: "245px" }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Drinking Water" />
            <FormControlLabel control={<Checkbox />} label="Internet" />
            <FormControlLabel control={<Checkbox />} label="Electricity" />
            <FormControlLabel control={<Checkbox />} label="Phone" />
            <FormControlLabel control={<Checkbox />} label="Guardianship 24h" />
            <FormControlLabel control={<Checkbox />} label="Cable TV" />
          </FormGroup>
        </Box>
      </Box>
      <Button variant="contained" onClick={openModal}>
        Open
      </Button>
      <PublicationModal isOpen={isOpen} handleClose={closeModal} />
    </div>
  );
}

export default App;
