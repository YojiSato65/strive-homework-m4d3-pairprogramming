import {Container, Row} from 'react-bootstrap'
// import { Component } from 'react';
// import books from '../data/fantasy.json'
import SingleBook from './SingleBook';

const BookList = (props) => {

    return (
        <Container>
            <Row>
              {books.map(book => (
                <SingleBook />
            ))}
            </Row>
        </Container>
    );
}
  
  export default BookList