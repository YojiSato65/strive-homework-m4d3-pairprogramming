import { Component } from 'react'
import SingleComment from './SingleComment'

class CommentList extends Component {
  render() {
    return (
      <ul>
        {this.props.comments &&
          this.props.comments.map((comment) => (
            <SingleComment comment={comment} />
          ))}
      </ul>
    )
  }
}

export default CommentList
