import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.show}>
        <Modal.Header closeButton onClick={this.props.dontShowCard}>
          <Modal.Title>{this.props.obj.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Img variant="top" src={this.props.obj.image_url} alt={this.props.obj.title} />
          </Card>
          <Card.Body>
            <Card.Text>{this.props.obj.description}</Card.Text>
          </Card.Body>
        </Modal.Body>
      </Modal>
    );
  }

}
export default SelectedBeast;
