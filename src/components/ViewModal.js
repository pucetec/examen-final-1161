import React from "react";
import { Col, Modal, Row, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useAppContext } from "../Context";

const ViewModal = () => {
  const {
    titulo,
    metrosCuadrados,
    precio,
    baños,
    antig,
    telefono,
    imagen1,
    imagen2,
    direccion,
    tipoPublicacion,
    descripcion,
    servicios,
    handleClose,
    show,
  } = useAppContext();
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {titulo} $ {precio}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <a href={imagen1} target="_blank" rel="noopener noreferrer">
              <Image src={imagen1} alt="Imagen 1" fluid />
            </a>
          </Col>
          <Col>
            <a href={imagen2} target="_blank" rel="noopener noreferrer">
              <Image src={imagen1} alt="Imagen 1" fluid />
            </a>
          </Col>
        </Row>
        <Row
          style={{
            fontWeight: "bold",
            fontSize: "1.2em",
            textDecoration: "underline",
          }}
        >
          Información Básica
        </Row>
        <Row>
          <Col>Tipo de publicación: {tipoPublicacion}</Col>
          <Col>Años de antigüedad: {antig}</Col>
        </Row>
        <Row>
          <Col>Baños: {baños}</Col>
          <Col>Metros de superficie: {metrosCuadrados}</Col>
        </Row>
        <Row
          style={{
            fontWeight: "bold",
            fontSize: "1.2em",
            textDecoration: "underline",
          }}
        >
          <Col>Contacto</Col>
          <Col>Servicios</Col>
        </Row>
        <Row>
          <Col>Telefono: {telefono}</Col>
          <Col>
            <ul>
              {servicios.map((servicio, index) => (
                <li key={index}>{servicio}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>Dirección: {direccion}</Col>
        </Row>
        <Row
          style={{
            fontWeight: "bold",
            fontSize: "1.2em",
            textDecoration: "underline",
          }}
        >
          Descripción
        </Row>
        <Row>{descripcion}</Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewModal;
