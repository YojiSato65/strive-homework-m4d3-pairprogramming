// import { Component } from 'react'
import { useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'

// class CommentArea extends Component
const CommentArea = ({ id }) => {
  // state = {
  //   comments: [],
  // }

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevProps.id !== this.props.id) {
  //     this.fetchComments()
  //   }
  // }

  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' + id,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjA3YTRlYTdiMTAwMTVkMDY3YWIiLCJpYXQiOjE2NDc1MjY1NDksImV4cCI6MTY0ODczNjE0OX0.FvdUkfSRtyuqJj9sV0tPpMoTCdSUUfQcsiaeure2R5w',
            },
          },
        )
        if (response.ok) {
          const data = await response.json()
          console.log(data)
          setComments(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      {comments.length > 0 && <CommentList listComments={comments} />}
      <AddComment id={id} />
    </>
  )
}

export default CommentArea
