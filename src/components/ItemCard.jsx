import { Card, Button, Col, Row} from "react-bootstrap";

const ItemCard = ({cita, borrarCita}) => {
  return (
      <Col md={4} className="fw-lighter mt-3">
        <Card>
          <Card.Body>
         <Row>
            <Col sm={4} >
             <Card.Img className="w-100 rounded-circle" src="https://thumbs.dreamstime.com/b/avatar-del-gato-45383590.jpg" />
            </Col>
            <Col sm={8}>
            <Card.Title column='true' lg={12} className="fw-lighter my-4">Mascota: {cita.nombreMascota} </Card.Title>
            <Card.Text column='true' lg={12} className="fw-lighter">Dueño: {cita.NombreDueno}</Card.Text>
            </Col>
                </Row>
          </Card.Body>
          <hr />
            <Card.Body>
            <Card.Text className="fw-bolder">Cita</Card.Text>
            <Card.Text>Fecha:{cita.fecha} </Card.Text>
            <Card.Text>Hora: {cita.hora} </Card.Text>
            <Card.Text>Síntomas: {cita.sintomas} </Card.Text>
            <div className="d-flex justify-content-end">

            <Button variant="danger" className="" onClick={()=>borrarCita(cita)}>Borrar</Button>
            </div>
            </Card.Body>
            
        </Card>
      </Col>
    
  );
};

export default ItemCard;
