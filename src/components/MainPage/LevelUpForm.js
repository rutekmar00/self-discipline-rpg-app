import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class LevelUpStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strength: this.props.strength,
      vitality: this.props.vitality,
      agility: this.props.agility,
      intelligence: this.props.intelligence,
      charisma: this.props.charisma,
      responsibility: this.props.responsibility,
      manageablePoints: 5,
      showModal: false,
    };
    this.initial = {
      strength: this.props.strength,
      vitality: this.props.vitality,
      agility: this.props.agility,
      intelligence: this.props.intelligence,
      charisma: this.props.charisma,
      responsibility: this.props.responsibility,
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

  changeStat = (e, name, action) => {
    e.preventDefault();
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      if (action === "+" && newState["manageablePoints"] > 0) {
        newState[name] = newState[name] + 1;
        newState["manageablePoints"] = newState["manageablePoints"] - 1;
      }
      if (action === "-" && newState[name] - 1 >= this.initial[name]) {
        newState[name] = newState[name] - 1;
        newState["manageablePoints"] = newState["manageablePoints"] + 1;
      }
      return newState;
    });
  };

  render() {
    const {
      strength,
      vitality,
      agility,
      intelligence,
      charisma,
      responsibility,
      manageablePoints,
      submitted,
      showModal,
    } = this.state;
    return (
      <div className="row">
        <button className="btn btn-secondary" onClick={this.handleShow}>
          Improve your character
        </button>
        <Modal isOpen={showModal}>
          <ModalHeader>Choose your development</ModalHeader>
          <ModalBody>
            <form name="form">
              <div className={"form-group" + (submitted ? " has-error" : "")}>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Points Left:</td>
                      <td>{manageablePoints}</td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="Strength">Strength</label>
                      </td>
                      <td>{strength}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={(e) => this.changeStat(e, "strength", "+")}
                          disabled={manageablePoints === 0}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary"
                          onClick={(e) => this.changeStat(e, "strength", "-")}
                          disabled={strength === 0}
                        >
                          {" "}
                          -{" "}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="Vitality">Vitality :</label>
                      </td>
                      <td> {vitality}</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-primary"
                          onClick={(e) => this.changeStat(e, "vitality", "+")}
                          disabled={manageablePoints === 0}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-secondary"
                          onClick={(e) => this.changeStat(e, "vitality", "-")}
                          disabled={vitality === 0}
                        >
                          {" "}
                          -{" "}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="Agility">Agility :</label>
                      </td>
                      <td> {agility}</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-primary"
                          onClick={(e) => this.changeStat(e, "agility", "+")}
                          disabled={manageablePoints === 0}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-secondary"
                          onClick={(e) => this.changeStat(e, "agility", "-")}
                          disabled={agility === 0}
                        >
                          {" "}
                          -{" "}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="Intelligence">Intelligence :</label>
                      </td>
                      <td> {intelligence}</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-primary"
                          onClick={(e) =>
                            this.changeStat(e, "intelligence", "+")
                          }
                          disabled={manageablePoints === 0}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-secondary"
                          onClick={(e) =>
                            this.changeStat(e, "intelligence", "-")
                          }
                          disabled={intelligence === 0}
                        >
                          {" "}
                          -{" "}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="Responsibility">Responsibility :</label>
                      </td>
                      <td> {responsibility}</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-primary"
                          onClick={(e) =>
                            this.changeStat(e, "responsibility", "+")
                          }
                          disabled={manageablePoints === 0}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-secondary"
                          onClick={(e) =>
                            this.changeStat(e, "responsibility", "-")
                          }
                          disabled={responsibility === 0}
                        >
                          {" "}
                          -{" "}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="Charisma">Charisma :</label>
                      </td>
                      <td> {charisma}</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-primary"
                          onClick={(e) => this.changeStat(e, "charisma", "+")}
                          disabled={manageablePoints === 0}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-secondary"
                          onClick={(e) => this.changeStat(e, "charisma", "-")}
                          disabled={charisma === 0}
                        >
                          {" "}
                          -{" "}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-secondary"
              onClick={() => this.props.handleLevelUp(this.state)}
            >
              Submit
            </button>
            <button className="btn btn-secondary" onClick={this.handleClose}>
              Close
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LevelUpStats;
