import React, { useState } from "react";
import DeliveryAssignment from "./DeliveryAssignment";
import { Assignment, Address, Driver } from "./types/Assignment";
import { Typography } from "@mui/material";

const DeliveryPlanner = () => {
  const [assignments, setAssignments] = useState([
    new Assignment(new Address("", "", ""), new Driver("", "")),
    new Assignment(new Address("", "", ""), new Driver("", "")),
    new Assignment(new Address("", "", ""), new Driver("", "")),
    new Assignment(new Address("", "", ""), new Driver("", "")),
  ]);

  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const handleAddressChange = (index, updatedAddress) => {
    setAssignments((prevState) =>
      prevState.map((assignment, i) =>
        i === index ? { ...assignment, address: updatedAddress } : assignment
      )
    );
  };

  const handleDriverChange = (index, updatedDriver) => {
    setAssignments((prevState) =>
      prevState.map((assignment, i) =>
        i === index ? { ...assignment, driver: updatedDriver } : assignment
      )
    );
  };

  const onSelectAssignment = (index) => {
    setSelectedAssignment(assignments[index]);
  };

  const handleSaveAssignment = (index, address, driver) => {
    setAssignments((prevState) =>
      prevState.map((assignment, i) =>
        i === index ? { ...assignment, address, driver } : assignment
      )
    );
  };

  return (
    <div>
      {assignments.map((assignment, index) => (
        <DeliveryAssignment
          key={index}
          index={index}
          address={assignment.address}
          onChangeAddress={(updatedAddress) =>
            handleAddressChange(index, updatedAddress)
          }
          driver={assignment.driver}
          onChangeDriver={(updatedDriver) =>
            handleDriverChange(index, updatedDriver)
          }
          onSelectAssignment={() => onSelectAssignment(index)}
          onSaveAssignment={() => handleSaveAssignment(index, assignment.address, assignment.driver)}
        />
      ))}
      {selectedAssignment && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: 16,
              borderRadius: 8,
              maxWidth: 600,
              position: "relative",
              overflow: "auto",
            }}
          >
            <Typography variant="h6">Reporte de camión asignado</Typography>
            <Typography variant="body1">
              Address: {selectedAssignment.address.name}, {selectedAssignment.address.address}, {selectedAssignment.address.phone}
            </Typography>
            <Typography variant="body1">
              Driver: {selectedAssignment.driver.name}
            </Typography>
            <img src="https://pbs.twimg.com/media/CRNHa6RWwAA7_jN.jpg" alt="camion" width="200" height="200" />            <button
              style={{
                background: "#007bff",
                color: "#fff",
                border: "none",
                padding: "8px 16px",
                borderRadius: 4,
                cursor: "pointer",
                marginTop: 16,
              }}
              onClick={() => setSelectedAssignment(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryPlanner;