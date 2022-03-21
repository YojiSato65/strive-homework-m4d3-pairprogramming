import { Container, Row, Col, Form } from 'react-bootstrap'
import SingleBook from './SingleBook'
import { Component } from 'react'

class BookList extends Component {
  state = {
    searchQuery: '',
  }

  render() {
    return (
      <Container>
        <Row className="mb-3">
          <Col>
            <Form>
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((book) =>
              book.title
                .toLowerCase()
                .includes(this.state.searchQuery.toLowerCase()),
            )
            .map((book) => (
              <SingleBook
                title={book.title}
                image={book.img}
                key={book.asin}
                id={book.asin}
              />
            ))}
        </Row>
      </Container>
    )
  }
}

export default BookList
