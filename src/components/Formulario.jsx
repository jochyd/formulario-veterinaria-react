import { useState } from "react";
import { Container, Form, Button, Col, Row} from "react-bootstrap";
import './formulario.css';
import ListaVeterinaria from "./ListaVeterinaria";

const Formulario = () => {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombreDueno, setNombreDueno] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [listaCita, setListaCita] = useState([]);
  

  const handleChange = (e)=>{
    e.preventDefault();
    setListaCita({nombreMascota, nombreDueno, fecha, hora, sintomas});
    console.log(listaCita);
    alert('La cita fue concretada');
  }

  return (
    <>
    <Container className='background'>
     <h2 className="fw-lighter text-center py-3">Llenar el Formulario para crear una Cita</h2>
      <Form className="my-3" onSubmit={handleChange}>
      <Row >
      <Col xs={12}>
      <Form.Group as={Row} className="mb-3" controlId="formNombreMascota">
        <Form.Label column sm={2} >Nombre de Mascota</Form.Label>
        <Col sm={10}>
        <Form.Control type="text" placeholder="Ingresa el Nombre de tu Mascota" className="fw-lighter" value={nombreMascota} name={nombreMascota} onChange={e=> setNombreMascota(e.target.value)}/>
        </Col>
      </Form.Group>
      </Col>
      <Col xs={12}>
      <Form.Group as={Row} className="mb-3" controlId="formNombreDueno">
        <Form.Label column sm={2}>Nombre del Dueño</Form.Label>
        <Col sm={10}>
        <Form.Control type="text" placeholder="Ingresa el Nombre del Dueño" className="fw-lighter" value={nombreDueno} name={nombreDueno} onChange={e=> setNombreDueno(e.target.value)} />
        </Col>
      </Form.Group>
      </Col>
      <Col md={6}>
      <Form.Group as={Row} className="mb-3 text-center" controlId="formFecha">
        <Form.Label className="d-flex justify-content-start" column sm={4}>Fecha</Form.Label>
        <Col md={8}>
        <Form.Control type="date" className="fw-lighter" value={fecha} name={fecha} onChange={e=> setFecha(e.target.value)}/>
        </Col>
      </Form.Group>
      </Col>
      <Col md={6}>
      <Form.Group as={Row} className="mb-3 text-center" controlId="formHora">
        <Form.Label className="d-flex justify-content-start" column sm={4}>Hora</Form.Label>
        <Col md={8}>
        <Form.Control type="time" className="fw-lighter" value={hora} name={hora} onChange={e=> setHora(e.target.value)}/>
        </Col>
      </Form.Group>
      </Col>
      <Col xs={12}>
      <Form.Group as={Row} className="mb-3" controlId="formSintoma">
        <Form.Label column sm={2}>Síntomas</Form.Label>
        <Col sm={10}>
        <Form.Control type="text" placeholder="Ingresa el síntoma" className="fw-lighter" value={sintomas} name={sintomas} onChange={e=> setSintomas(e.target.value)} />
        </Col>
      </Form.Group>
      </Col>
      <Button xs={12} variant="primary" type="submit" className="fw-lighter py-2">
      Ingresar Cita
      </Button>
      </Row>
    </Form>
    </Container>
    <ListaVeterinaria></ListaVeterinaria>

    </>
  );
};

export default Formulario;