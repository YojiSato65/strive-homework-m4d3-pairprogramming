import { Card, Col } from 'react-bootstrap'

const SingleBook = (props) => {
  return (
    <Col className="col-md-3">
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleBook
