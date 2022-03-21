import { Card, Col } from 'react-bootstrap'
import { Component } from 'react'
// import CommentArea from './CommentArea'

class SingleBook extends Component {
  // state = {
  //   selectedBook: false,
  // }

  render() {
    return (
      <Col className="col-md-3">
        <Card
          onClick={() => this.props.clickBook()}
          style={{
            border: this.props.value ? '2px solid green' : 'none',
          }}
        >
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
        </Card>
        {/* {this.state.selectedBook && <CommentArea id={this.props.id} />} */}
      </Col>
    )
  }
}

export default SingleBook
