import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'

class CommentArea extends Component {
  state = {
    comments: [],
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.id !== this.props.id) {
      this.fetchComments()
    }
  }

  fetchComments = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + this.props.id,
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
        this.setState({ comments: data })
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <>
        <CommentList listComments={this.state.comments} />
        <AddComment id={this.props.id} />
      </>
    )
  }
}

export default CommentArea
