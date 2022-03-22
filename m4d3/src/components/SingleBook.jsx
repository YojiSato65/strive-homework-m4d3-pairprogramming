import { useState } from 'react'
import { Card, Col } from 'react-bootstrap'
// import { Component } from 'react'
// import CommentArea from './CommentArea'

// class SingleBook extends Component
const SingleBook = ({ clickBook, id, title, image }) => {
  // state = {
  //   selectedBook: false,
  // }

  const [selected, setSelected] = useState(false)

  return (
    <Col className="col-md-3">
      <Card
        onClick={() => {
          clickBook(id)
          setSelected((prevState) => !prevState)
        }}
        style={{
          // border: this.props.value ? '2px solid green' : 'none',
          border: selected ? '2px solid black' : 'none',
        }}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {this.state.selectedBook && <CommentArea id={this.props.id} />} */}
    </Col>
  )
}

export default SingleBook
