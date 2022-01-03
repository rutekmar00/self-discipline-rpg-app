import React from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

class QuestS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleClose = (e) => {
    e.preventDefault();
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState.showModal = false;
      return newState;
    });
  };

  handleShow = (e) => {
    e.preventDefault();
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState.showModal = true;
      return newState;
    });
  };

  showStatus = (status) => {
    if (status === "Finished") {
      return <span className="color-ok">Finished</span>;
    } else if (status === "Failed") {
      return <span className="color-not-ok">Failed</span>;
    } else {
      return <span className="color-wait">Waiting</span>;
    }
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className="container">
        <div>
          <div>
            <Row className="m-1 p-1">
              <Col xs="1">♦</Col>
              <Col xs="7" className="text-left">
                <b>{this.props.questName}</b>{" "}
              </Col>
              <Col xs="2">{this.showStatus(this.props.questStatus)} </Col>
              <Col xs="2" className="p-0">
                <button
                  className="btn-info float-right"
                  onClick={this.handleShow}
                >
                  Details
                </button>{" "}
              </Col>
            </Row>
          </div>
        </div>
        <Modal isOpen={showModal}>
          <ModalHeader>{this.props.questName}</ModalHeader>
          <ModalBody>{this.props.questDescription}</ModalBody>
          <ModalFooter>
            <button variant="primary" onClick={this.handleClose}>
              Close
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default QuestS;
