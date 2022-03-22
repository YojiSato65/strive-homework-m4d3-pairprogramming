import { Container, Row, Col, Form } from 'react-bootstrap'
import SingleBook from './SingleBook'
// import { Component } from 'react'
import { useState } from 'react'

// class BookList extends Component
const BookList = ({ books, clickBook, value }) => {
  // state = {
  //   searchQuery: '',
  // }

  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <Form>
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form>
        </Col>
      </Row>
      <Row>
        {books
          .filter((book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()),
          )
          .map((book) => (
            <SingleBook
              title={book.title}
              image={book.img}
              key={book.asin}
              id={book.asin}
              clickBook={(data) => clickBook(data)}
            />
          ))}
      </Row>
    </Container>
  )
}

export default BookList
