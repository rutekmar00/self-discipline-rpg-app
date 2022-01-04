import React from "react";

class SetCharacterStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      strength: 5,
      vitality: 5,
      agility: 5,
      intelligence: 5,
      charisma: 5,
      responsibility: 5,
      manageablePoints: 5,
    };
  }

  changeStat = (e, name, action) => {
    e.preventDefault();
    this.setState((prevState) => {
      const newState = { ...prevState };
      if (action === "+" && newState["manageablePoints"] > 0) {
        newState[name] = newState[name] + 1;
        newState["manageablePoints"] = newState["manageablePoints"] - 1;
      }
      if (action === "-" && newState[name] - 1 >= 0) {
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
    } = this.state;
    return (
      <div className="col-sm-6 col-lg-3 mt-md-3">
        <form name="form">
          <div className={"form-group" + (submitted ? " has-error" : "")}>
            <table className="table table-dark">
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
                    <label htmlFor="Vitality">Vitality</label>
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
                    <label htmlFor="Agility">Agility</label>
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
                    <label htmlFor="Intelligence">Intelligence</label>
                  </td>
                  <td> {intelligence}</td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-primary"
                      onClick={(e) => this.changeStat(e, "intelligence", "+")}
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
                      onClick={(e) => this.changeStat(e, "intelligence", "-")}
                      disabled={intelligence === 0}
                    >
                      {" "}
                      -{" "}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="Responsibility">Responsibility</label>
                  </td>
                  <td> {responsibility}</td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-primary"
                      onClick={(e) => this.changeStat(e, "responsibility", "+")}
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
                      onClick={(e) => this.changeStat(e, "responsibility", "-")}
                      disabled={responsibility === 0}
                    >
                      {" "}
                      -{" "}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="Charisma">Charisma</label>
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
      </div>
    );
  }
}

export default SetCharacterStats;
