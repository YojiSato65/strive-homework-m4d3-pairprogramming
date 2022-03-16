import {Container, Row} from 'react-bootstrap'
import SingleBook from './SingleBook';
import {Component} from 'react'

// const BookList = (props) => {
class BookList extends Component {
    state = {}
    render()
    {
        return (
            <Container>
                <Row>
                    {this.props.books.map(book => (
                        <SingleBook title={book.title} image={book.img} key={book.asin} />
                    ))}
                </Row>
            </Container>
        );
    }
}
  
  export default BookList