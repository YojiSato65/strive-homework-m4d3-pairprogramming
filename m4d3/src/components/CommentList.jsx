import { Component } from 'react'
import SingleComment from './SingleComment'
import { ListGroup } from 'react-bootstrap'

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.listComments.map((comment) => (
          <SingleComment comment={comment} key={comment._id} />
        ))}
      </ListGroup>
    )
  }
}

export default CommentList
