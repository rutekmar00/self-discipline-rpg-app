import React from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Calendar from "react-calendar";

class QuestMG extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      showModal: false,
      pickModal: false,
    };
  }

  handleClose = (e) => {
    e.preventDefault();
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState.showModal = false;
      newState.pickModal = false;
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

  handlePick = (e) => {
    e.preventDefault();
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState.pickModal = true;
      return newState;
    });
  };

  onChange = () => {
    let quest = {
      questId: this.props.questId,
      questName: this.props.questName,
      questDescription: this.props.questDescription,
      questShortDescription: this.props.questShortDescription,
      duration: this.props.duration,
      dateAdded: new Date(new Date().setDate(date.getDate())).toISOString(),
      questDone: false,
    };
    this.props.handleAddQuest(quest);
    this.setState({ pickModal: false });
  };

  render() {
    const { showModal, pickModal } = this.state;
    return (
      <div className="container">
        <div>
          <div>
            <Row className="m-1 p-1">
              <Col xs="1">♦</Col>
              <Col xs="7" className="text-left">
                <b>{this.props.questName}</b>{" "}
              </Col>
              <Col xs="2" className="p-0">
                <button
                  className="btn-info float-right"
                  onClick={this.handleShow}
                >
                  Details
                </button>{" "}
              </Col>
              <Col xs="2">
                {this.props.current ? (
                  <button className="float-right btn-light disabled" disabled>
                    Start
                  </button>
                ) : (
                  <button
                    className="btn-success float-right"
                    onClick={this.handlePick}
                  >
                    Start
                  </button>
                )}
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
        <Modal isOpen={pickModal}>
          <ModalHeader>{this.props.questName}</ModalHeader>
          <ModalBody>
            <p>
              <b>Select start date:</b>
            </p>
            <Calendar
              className="m-auto "
              onChange={this.onChange}
              value={this.state.date}
              locale={"eng"}
              tileDisabled={({ date }) => {
                return date < new Date() - 24 * 60 * 60 * 1000;
              }}
            />
          </ModalBody>
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

export default QuestMG;
