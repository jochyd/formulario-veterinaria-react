import { Container, ListGroup, Row } from "react-bootstrap";
import ItemCard from "./ItemCard";

const ListaVeterinaria = () => {
  return (
    <Container>
      <h2 className="display-4 fw-lighter text-center">Lista de Citas</h2>
      <ListGroup>
        <Row>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
        </Row>
      </ListGroup>
    </Container>
  );
};

export default ListaVeterinaria;
