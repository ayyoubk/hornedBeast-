import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickingCounter: 0
    };
  }
  increaseFavorites = () => {
    this.setState(
      {
        clickingCounter: this.state.clickingCounter + 1
      }
    );
  }

  showing = () => {
    this.props.showing({
      title: this.props.title,
      description: this.props.description,
      image_url: this.props.image_url
    });
  }

  render() {
    return (

      <div class='cards'>
        <Card style={{ width: '18rem' }} class='card' onClick={this.showing}>
          <Card.Img onClick={this.increaseFavorites} variant="top" src={this.props.image_url} />
          <Card.Body>
            <Card.Text>
              {this.props.title}
            </Card.Text>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text> &#x2B50; {this.state.clickingCounter}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeast;
