import { Card, Button, Col, Row} from "react-bootstrap";

const ItemCard = () => {
  return (
      <Col md={4} className="fw-lighter mt-3">
        <Card>
          <Card.Body>
         <Row>
            <Col sm={4} >
             <Card.Img className="w-100 rounded-circle" src="https://thumbs.dreamstime.com/b/avatar-del-gato-45383590.jpg" />
            </Col>
            <Col sm={8}>
            <Card.Title column lg={12} className="fw-lighter my-4">Mascota: </Card.Title>
            <Card.Text column lg={12} className="fw-lighter">Dueño: </Card.Text>
            </Col>
                </Row>
          </Card.Body>
          <hr />
            <Card.Body>
            <Card.Text className="fw-bolder">Cita</Card.Text>
            <Card.Text>Fecha: </Card.Text>
            <Card.Text>Hora: </Card.Text>
            <Card.Text>Síntomas: </Card.Text>
            <div className="d-flex justify-content-end">

            <Button variant="danger" className="">Borrar</Button>
            </div>
            </Card.Body>
            
        </Card>
      </Col>
    
  );
};

export default ItemCard;
