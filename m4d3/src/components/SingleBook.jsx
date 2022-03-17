import { Card } from "react-bootstrap";
import React from 'react'
import CommentArea from './CommentArea'


class SingleBook extends React.Component {

    state = {
        selected:false
        
    }

render (){
    return (
        <Card  onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? '5px solid blue' : 'none' }}
        >
          <CommentArea onClick={(e) => this.setState({selectedComment: !this.state.selectedComment})}/>
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
        </Card>
      );
}


};

export default SingleBook