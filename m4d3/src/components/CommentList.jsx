// import { Component } from 'react'
import SingleComment from './SingleComment'
import { ListGroup } from 'react-bootstrap'

const CommentList = (listComments) => {
  return (
    <ListGroup>
      {/* {listComments.map((comment) => (
        <SingleComment comment={comment} key={comment._id} />
      ))} */}
      {console.log(listComments)}
    </ListGroup>
  )
}

export default CommentList
