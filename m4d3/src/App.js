
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import WarningSign from "./components/WarningSign.jsx"
// import MyBadge from "./components/MyBadge"
import BookList from "./components/BookList"
import fantasybooks from "./data/fantasy.json"
import { Container, Row, Col } from 'react-bootstrap'
import CommentArea from './components/CommentArea';
// import { Componentuse } from 'react';
import { useState } from 'react';


// class App extends Component
const App = () =>
{
  // state = {
  //   selectedBook: null,
  // }

  // clickBook = (id) =>
  // {
  //   this.setState({ selectedBook: id })
  // }

  const [selectedBook, setSelectedBook] = useState(null)

  const clickBook = (id) =>
  {
    setSelectedBook(id)
  }

  return (
    < Container className="my-5" >
      <Row>
        {/* <WarningSign message='Hello, new message!' /> */}
        {/* <MyBadge text='ex.2' color='primary' /> */}
        <Col md={9}>
          <BookList books={fantasybooks} value={selectedBook} clickBook={(id) => clickBook(id)} />
        </Col>
        <Col md={3}>
          {<CommentArea id={selectedBook} />}
        </Col>
      </Row>
    </Container >
  );
}

export default App;
