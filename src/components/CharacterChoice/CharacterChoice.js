import React from "react";
import ClassChoice from "./ClassChoice";
import SetCharacterStats from "./SetCharacterStats";

class CharacterChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
    this.characterClassRef = React.createRef();
    this.setCharacterStatsRef = React.createRef();
  }

  handleSubmit = (e) => {
    let tmp = this.setCharacterStatsRef.current.getStats();
    tmp["characterClass"] = this.characterClassRef.current.state.characterClass;
    this.props.handleCharacterChoice(e, tmp);
  };

  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center">Choose Your Character</h1>
        <div className="row mt-4 justify-content-center flex-md-column flex-lg-row">
          <div className="align-self-center col-xl-8 col-lg-7 col-md-8 flex-sm-row">
            <ClassChoice ref={this.characterClassRef} />
          </div>
          <div className="d-flex col-lg-3 justify-content-center justify-content-lg-start move-to-left">
            <SetCharacterStats ref={this.setCharacterStatsRef} />
          </div>
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="form-group">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (!this.state.submitted) {
                    this.handleSubmit(e);
                    this.setState({ submitted: true });
                  }
                }}
                className="btn btn-primary mt-4"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterChoice;
