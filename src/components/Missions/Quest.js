import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Quest extends React.Component {
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

  render() {
    const { showModal } = this.state;
    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-7 ml-sm-auto">
            <h1>{this.props.questName}</h1>
            <hr></hr>
            <p>{this.props.questShortDescription}</p>
          </div>
          <div role="main" className="col jumbotron p-2">
            <h5>
              Status:{" "}
              {this.props.questStatus === "Finished" ? (
                <span className="color-ok">Finished</span>
              ) : this.props.questStatus === "Failed" ? (
                <span className="color-not-ok">Failed</span>
              ) : (
                <span className="color-wait">Waiting</span>
              )}
            </h5>
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <button className="btn" onClick={this.handleShow}>
                    Details <span className="sr-only"></span>
                  </button>
                </li>
                <li className="nav-item">
                  {!this.props.questDone ? (
                    <button
                      className="btn "
                      onClick={() => {
                        console.log("End quest");
                      }}
                      disabled={
                        this.props.questStatus === "Failed" ||
                        this.props.questStatus === "Future"
                      }
                    >
                      Finish <span className="sr-only"></span>
                    </button>
                  ) : (
                    <span />
                  )}
                </li>
              </ul>
            </div>
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

export default Quest;
