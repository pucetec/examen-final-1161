import { Container, Col, Form, Button, Row } from "react-bootstrap";
import { useAppContext } from "../Context";
import ViewModal from "./ViewModal";

const PisoForm = () => {
  const {
    titulo,
    setTitulo,
    metrosCuadrados,
    setMetrosCuadrados,
    precio,
    setPrecio,
    baños,
    setBaños,
    antig,
    setAntig,
    telefono,
    setTelefono,
    imagen1,
    setImagen1,
    imagen2,
    setImagen2,
    direccion,
    setDireccion,
    tipoPublicacion,
    setTipoPublicacion,
    descripcion,
    setDescripcion,
    servicios,
    setServicios,
    handleShow,
  } = useAppContext();

  const handleServicioChange = (servicio) => {
    const serviciosActualizados = [...servicios];

    if (serviciosActualizados.includes(servicio)) {
      const index = serviciosActualizados.indexOf(servicio);
      serviciosActualizados.splice(index, 1);
    } else {
      serviciosActualizados.push(servicio);
    }

    setServicios(serviciosActualizados);
  };
  return (
    <Container style={{ backgroundColor: "#d3d3d3", padding: "20px" }}>
      <Row style={{ marginBottom: "10px" }}>
        <h1>Formulario de Propiedad</h1>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col>Título</Col>
        <Col>
          <Form.Control
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col>Metros Cuadrados</Col>
        <Col>
          <Form.Control
            value={metrosCuadrados}
            onChange={(e) => setMetrosCuadrados(e.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col>Precio</Col>
        <Col>
          <Form.Control
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col>Baños</Col>
        <Col>
          <Form.Control
            value={baños}
            onChange={(e) => setBaños(e.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col>Años de Antigüedad</Col>
        <Col>
          <Form.Control
            value={antig}
            onChange={(e) => setAntig(e.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col>Teléfono de contacto</Col>
        <Col>
          <Form.Control
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col>Imagen 1</Col>
        <Col>
          <Form.Control
            value={imagen1}
            onChange={(e) => setImagen1(e.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col>Imagen 2</Col>
        <Col>
          <Form.Control
            value={imagen2}
            onChange={(e) => setImagen2(e.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col>Dirección</Col>
        <Col>
          <Form.Control
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col>Tipo de publicación</Col>
        <Col>
          <Form>
            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Venta"
                type="radio"
                name="TipoPublicacion"
                checked={tipoPublicacion === "Venta"}
                onChange={() => setTipoPublicacion("Venta")}
                id={`inline-radio-venta`}
              />
              <Form.Check
                inline
                label="Arriendo"
                type="radio"
                name="TipoPublicacion"
                checked={tipoPublicacion === "Arriendo"}
                onChange={() => setTipoPublicacion("Arriendo")}
                id={`inline-radio-arriendo`}
              />
            </div>
          </Form>
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col>Descripción</Col>
        <Col>
          <Form.Control
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col>Servicios</Col>
        <Col>
          <Form>
            <div key={`inline-checkbox`} className="mb-3">
              {[
                "Internet",
                "Teléfono",
                "Agua Potable",
                "Guardianía 24H",
                "Electricidad",
                "TV Cable",
              ].map((servicio) => (
                <Form.Check
                  key={`inline-checkbox-${servicio}`}
                  inline
                  label={servicio}
                  name="Servicio"
                  type="checkbox"
                  checked={servicios.includes(servicio)}
                  onChange={() => handleServicioChange(servicio)}
                  id={`inline-checkbox-${servicio}`}
                />
              ))}
            </div>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={handleShow}>Ver</Button>
        </Col>
      </Row>
      <ViewModal />
    </Container>
  );
};

export default PisoForm;
