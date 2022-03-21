
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import WarningSign from "./components/WarningSign.jsx"
// import MyBadge from "./components/MyBadge"
import BookList from "./components/BookList"
import fantasybooks from "./data/fantasy.json"
import { Container, Row, Col } from 'react-bootstrap'
import CommentArea from './components/CommentArea';
import { Component } from 'react';


class App extends Component
{
  state = {
    selectedBook: false
  }

  clickBook = () =>
  {
    this.setState({ selectedBook: !this.state.selectedBook })
  }

  render()
  {
    return (
      < Container className="my-5" >
        <Row>
          {/* <WarningSign message='Hello, new message!' /> */}
          {/* <MyBadge text='ex.2' color='primary' /> */}
          <Col md={9}>
            <BookList books={fantasybooks} value={this.state.selectedBook} clickBook={this.clickBook} />
          </Col>
          <Col md={3}>
            {<CommentArea id={fantasybooks.asin} />}
          </Col>
        </Row>
      </Container >
    );
  }
}

export default App;
