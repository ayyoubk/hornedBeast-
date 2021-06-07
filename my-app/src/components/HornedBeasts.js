import React from 'react';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastTitle: this.props.title,
      beastImg: this.props.img,
      beastInfo: this.props.info,
      votesNum :0,

    };
  }
  voteForIt = () => {
    this.setState({
      votesNum : this.state.votesNum +=1,
    });
  }
  render() {

    return (

      <div class='beast'>
        <h2>{this.state.beastTitle}</h2>
        <p>&#x2B50; {this.state.votesNum} votes</p>
        <img src={this.state.beastImg} alt="" width='250px' height='250px' onClick={this.voteForIt} />
        <p>{this.state.beastInfo}</p>
      </div>

    );
  }
}

export default HornedBeast;
