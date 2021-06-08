import React from 'react';
import HornedBeast from './HornedBeasts';
import CardGroup from 'react-bootstrap/CardGroup';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elementData: this.props.data
    };
  }

  render() {
    let arraElment = this.state.elementData.map(element => {
      return (
        <HornedBeast
          title={element.title}
          image_url={element.image_url}
          description={element.description}
          showing={this.props.showing}
        />
      );
    });
    return (<CardGroup id='group'>{arraElment}</CardGroup>);

  }
}

export default Main;
