import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastTitle: this.props.title,
      beastImg: this.props.img,
      beastInfo: this.props.info,
      votesNum: 0,

    };
  }
  voteForIt = () => {
    this.setState({
      votesNum: this.state.votesNum += 1,
    });
  }
  render() {

    return (

      <Card border="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.state.beastImg} onClick={this.voteForIt}/>
        <Card.Body>
          <Card.Title>{this.state.beastTitle}</Card.Title>
          <Card.Text>&#x2B50; {this.state.votesNum} votes</Card.Text>
          <Card.Text>{this.state.beastInfo}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
