import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast ';
import data from './data.json';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: data,
      show: false,
      obj: {}
    };
  }

  HornedCardShowing = (event) => {
    this.setState({
      show: true,
      obj: event
    });
    console.log(event);
  }
  dontShowCard = () => {
    this.setState({
      show: false,
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Main data={this.state.element} showing={this.HornedCardShowing} />
        <SelectedBeast show={this.state.show} dontShowCard={this.dontShowCard} obj={this.state.obj} />
        <Footer />
      </div>
    );
  }
}

export default App;
