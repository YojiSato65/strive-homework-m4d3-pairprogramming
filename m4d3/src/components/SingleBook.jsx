import { Card } from "react-bootstrap";


const SingleBook = (props) => {


  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      
      </Card.Body>
    </Card>
  );
};

export default SingleBook