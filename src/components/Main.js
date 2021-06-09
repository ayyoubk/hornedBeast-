import React from 'react';
import Form from 'react-bootstrap/Form';
import HornedBeast from './HornedBeasts';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elementData: this.props.data,
      showing: this.props.showing
    };
  }
  renderOption = (event) => {

    let hornedBeastFilterarr = [];
    const hornsNum = event.target.value;
    console.log(hornsNum);
    if (hornsNum === 'All') {
      this.setState({
        elementData: this.props.data,
      });
      console.log(this.state.elementData);

    } else {
      this.props.data.forEach((item) => {
        if (item.horns === parseInt(hornsNum)) {
          hornedBeastFilterarr.push(item);
        }
      });
      this.setState({
        elementData: hornedBeastFilterarr,
      });
      console.log(this.state.elementData);
    }

  }

  render() {
    return (
      <div>
        <Form >
          <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Label>choose horns number</Form.Label>
            <Form.Control onChange={this.renderOption} name="select" as="select" size="sm">
              <option value='All'>All</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='100'>100</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <div>
          {
            this.state.elementData.map(element => {
              return (
                <HornedBeast
                  title={element.title}
                  image_url={element.image_url}
                  description={element.description}
                  showing={this.props.showing}
                />
              );
            })
          }
        </div>


      </div>
    );
  }
}

export default Main;
{/* <HornedForm handelForm={this.renderOption}/>
<Gallary beastToShow={this.state.elementData} showing={this.state.showing} /> */}
