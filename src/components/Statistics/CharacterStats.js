import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { getUsersTrophies } from "../../services/firebase";

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

  async componentDidMount() {
    try {
      const trophies = await getUsersTrophies(this.props.trophies);
      const trophiesValue = trophies.length
        ? trophies.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue.cost;
          }, 0)
        : 0;
      const summaryPoints = Object.values(this.props.statistics).reduce(
        function (previousValue, currentValue) {
          return previousValue + currentValue;
        },
        0
      );
      this.setState({
        itemCount: trophies.length,
        trophiesValue: trophiesValue,
        summaryPoints: summaryPoints,
        aliveSince: new Date(this.props.userCreated).toLocaleDateString(
          "en-GB"
        ),
      });
    } catch (error) {
      console.log(error);
    }
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
