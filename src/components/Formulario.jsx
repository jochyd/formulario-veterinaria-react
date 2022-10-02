import { useEffect, useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import "./formulario.css";
import ListaVeterinaria from "./ListaVeterinaria";

const Formulario = () => {
  const guardarLocalStorage =
  JSON.parse(localStorage.getItem("listaCitakey")) || [];
  
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDueno, setNombreDueno] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [listaCita, setListaCita] = useState(guardarLocalStorage);
  
  useEffect(() => {
    localStorage.setItem("listaCitakey", JSON.stringify(listaCita));
  }, [listaCita]);
  
  const agregarCita = (e) => {
    e.preventDefault();
    let objetoArreglo = { nombreMascota, nombreDueno, fecha, hora, sintomas };
    setListaCita([...listaCita, objetoArreglo]);
    setNombreMascota("");
    setNombreDueno("");
    setFecha("");
    setHora("");
    setSintomas("");
  };
  

  const borrarCita = (cita) =>{
    let citaModificada = listaCita.filter ((item) => item !== cita);
    setListaCita(citaModificada);
  }

  return (
    <>
      <Container className="background">
        <h2 className="fw-lighter text-center py-3">
          Llenar el Formulario para crear una Cita
        </h2>
        <Form className="my-3" onSubmit={agregarCita}>
          <Row>
            <Col xs={12}>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formNombreMascota"
              >
                <Form.Label column="true" sm={2}>
                  Nombre de Mascota
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa el Nombre de tu Mascota"
                    className="fw-lighter"
                    onChange={(e) => {setNombreMascota(e.target.value)}}
                    value={nombreMascota}
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group as={Row} className="mb-3" controlId="formNombreDueno">
                <Form.Label column="true" sm={2}>
                  Nombre del Dueño
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa el Nombre del Dueño"
                    className="fw-lighter"
                    onChange={(e) => {setNombreDueno(e.target.value)}}
                    value={nombreDueno}
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group
                as={Row}
                className="mb-3 text-center"
                controlId="formFecha"
              >
                <Form.Label
                  className="d-flex justify-content-start"
                  column="true"
                  sm={4}
                >
                  Fecha
                </Form.Label>
                <Col md={8}>
                  <Form.Control
                    type="date"
                    className="fw-lighter"
                    onChange={(e) => {setFecha(e.target.value)}}
                    value={fecha}
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group
                as={Row}
                className="mb-3 text-center"
                controlId="formHora"
              >
                <Form.Label
                  className="d-flex justify-content-start"
                  column="true"
                  sm={4}
                >
                  Hora
                </Form.Label>
                <Col md={8}>
                  <Form.Control
                    type="time"
                    className="fw-lighter"
                    onChange={(e) => {setHora(e.target.value)}}
                    value={hora}
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group as={Row} className="mb-3" controlId="formSintoma">
                <Form.Label column="true" sm={2}>
                  Síntomas
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa el síntoma"
                    className="fw-lighter"
                    onChange={(e) => {setSintomas(e.target.value)}}
                    value={sintomas}
                  />
                </Col>
              </Form.Group>
            </Col>
            <Button
              xs={12}
              variant="success"
              type="submit"
              className="fw-lighter py-2"
            >
              Ingresar Cita
            </Button>
          </Row>
        </Form>
      </Container>
      <ListaVeterinaria listaCita={listaCita} borrarCita={borrarCita}></ListaVeterinaria>
    </>
  );
};

export default Formulario;
