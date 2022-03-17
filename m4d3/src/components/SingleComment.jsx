import { Component } from 'react'

class SingleComment extends Component {
  render() {
    return (
      <ul>
        {this.props.books.map((comment) => (
          <SingleComment />
        ))}
      </ul>
    )
  }
}

export default SingleComment
