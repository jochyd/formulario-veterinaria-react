import { Container, ListGroup, Row } from "react-bootstrap";
import ItemCard from "./ItemCard";

const ListaVeterinaria = ({listaCita, borrarCita}) => {

  return (
    
    <Container>
      <h2 className="display-4 fw-lighter text-center">Lista de Citas</h2>
      <ListGroup>
        <Row>
          {
            listaCita.map((cita, posicion) => (<ItemCard key={posicion} cita={cita} borrarCita={borrarCita}></ItemCard>))
          }  
        </Row>
      </ListGroup>
    </Container>
  );
};

export default ListaVeterinaria;
