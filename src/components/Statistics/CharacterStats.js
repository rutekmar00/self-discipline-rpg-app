import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class CharacterStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summaryPoints: "",
      aliveSince: "",
      itemCount: "",
      trophiesValue: "",
    };
  }

  componentDidMount() {
    const trophiesValue = this.props.trophies.length
      ? this.props.trophies.reduce(function (previousValue, currentValue) {
          return previousValue + currentValue.cost;
        }, 0)
      : 0;
    const summaryPoints = Object.values(this.props.statistics).reduce(function (
      previousValue,
      currentValue
    ) {
      return previousValue + currentValue;
    },
    0);
    this.setState({
      itemCount: this.props.trophies.length,
      trophiesValue: trophiesValue,
      summaryPoints: summaryPoints,
      aliveSince: new Date(this.props.userCreated).toLocaleDateString("en-GB"),
    });
  }

  render() {
    return (
      <Col>
        <Row>
          <h5 className="float-left">Character</h5>
        </Row>
        <Row>Statistics points: {this.state.summaryPoints}</Row>
        <Row>Alive since: {this.state.aliveSince}</Row>
        <Row>Items obtained: {this.state.itemCount}</Row>
        <Row>Trophies value: {this.state.trophiesValue}</Row>
      </Col>
    );
  }
}
export default CharacterStats;
