import { Card, Col } from 'react-bootstrap'
import { Component } from 'react'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    selectedBook: false,
  }

  render() {
    return (
      <Col className="col-md-3">
        <Card
          onClick={() =>
            this.setState({ selectedBook: !this.state.selectedBook })
          }
          style={{
            border: this.state.selectedBook ? '2px solid green' : 'none',
          }}
        >
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            {this.state.selectedBook && <CommentArea />}
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook
