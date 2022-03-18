import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class AddComment extends Component {
  state = {
    comment: {
      comment: '',
      rate: 1,
      elementId: this.props.id,
    },
  }

  addComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
          body: JSON.stringify(this.state.comment),
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjA3YTRlYTdiMTAwMTVkMDY3YWIiLCJpYXQiOjE2NDc1MjY1NDksImV4cCI6MTY0ODczNjE0OX0.FvdUkfSRtyuqJj9sV0tPpMoTCdSUUfQcsiaeure2R5w',
          },
        },
      )
      if (response.ok) {
        alert('new comment added')
      } else {
        alert('there was an error')
      }
    } catch (error) {
      alert(error)
    }
  }

  render() {
    return (
      <Form onSubmit={this.addComment}>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="write here"
            value={this.state.comment.comment}
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  comment: e.target.value,
                },
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={this.state.comment.rate}
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  rate: e.target.value,
                },
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Add
        </Button>
      </Form>
    )
  }
}

export default AddComment
