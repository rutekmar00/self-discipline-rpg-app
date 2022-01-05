import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class MissionsStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successMissions: 0,
      failedMissions: 0,
      currentMissions: 0,
    };
  }

  componentDidMount() {
    let missionsStatusResult = this.props.userQuests.reduce(
      (previousValue, currentValue) => {
        if (currentValue.questStatus === "Failed") {
          let failed = previousValue.failed + 1;
          return { ...previousValue, failed };
        } else if (currentValue.questStatus === "Finished") {
          let finished = previousValue.finished + 1;
          return { ...previousValue, finished };
        } else {
          let waiting = previousValue.waiting + 1;
          return { ...previousValue, waiting };
        }
      },
      {
        finished: 0,
        failed: 0,
        waiting: 0,
      }
    );
    this.setState({
      successMissions: missionsStatusResult.finished,
      failedMissions: missionsStatusResult.failed,
      currentMissions: missionsStatusResult.waiting,
    });
  }

  calculateSFRatio(successMissions, failedMissions) {
    if (successMissions > 0 && failedMissions > 0) {
      return (successMissions / (failedMissions + successMissions)).toFixed(2);
    } else if (successMissions > 0 && failedMissions === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  render() {
    return (
      <Col>
        <Row>
          <h5 className="float-left">Missions</h5>
        </Row>
        <Row>Success: {this.state.successMissions} </Row>
        <Row>Failed: {this.state.failedMissions}</Row>
        <Row>
          S/F Ratio:{" "}
          {this.calculateSFRatio(
            this.state.successMissions,
            this.state.failedMissions
          )}
        </Row>
        <Row>Current: {this.state.currentMissions}</Row>
      </Col>
    );
  }
}
export default MissionsStats;
