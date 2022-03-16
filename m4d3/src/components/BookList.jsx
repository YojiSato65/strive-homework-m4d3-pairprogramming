import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

// const BookList = (props) => {
class BookList extends Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((book) =>
              book.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((book) => (
              <SingleBook title={book.title} image={book.img} key={book.asin} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
