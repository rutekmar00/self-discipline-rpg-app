import React, { Component } from "react";
import CharacterStats from "./CharacterStats";
import MissionsStats from "./MissionsStats";
import MissionsHistory from "./MissionsHistory";
import { Row } from "reactstrap";

class Statistics extends Component {
  render() {
    return (
      <div>
        <div className="height-XXS spacing text-left">
          <h3>
            <b>Statistics</b>
          </h3>
        </div>
        <Row>
          <CharacterStats
            trophies={this.props.userTrophies}
            userCreated={this.props.userCreated}
            statistics={this.props.statistics}
          />
          <MissionsStats userQuests={this.props.userQuests} />
        </Row>
        <Row>
          <MissionsHistory userQuests={this.props.userQuests} />
        </Row>
      </div>
    );
  }
}
export default Statistics;
