import {Card, Container, Row, Col} from 'react-bootstrap'
import { Component } from 'react';
// import SingleBook from './SingleBook'
import books from '../data/fantasy.json'

class BookList extends Component {

    state = {
 }

render(){
    return (
        <Container>
            <Row>
              {books.map(book => (
                <Col className='col-md-3' key={book.asin}>
                <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </Container>
    );
};
}
  
  export default BookList