import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./DateSlider.css";

class DateSlider extends Component {
  state = {
    colors: [
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#90b3ff",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
    ],
    weekDays: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    day: "",
    month: "",
    year: "",
    weekDay: "",
  };

  componentDidMount() {
    this.handleClickDay(3);
  }

  dateFormat = (num) => {
    if (num.toString().length === 1) {
      return "0" + num;
    } else {
      return num;
    }
  };

  renderDayDate = (dayPos) => {
    let currDate = new Date();
    currDate.setDate(new Date().getDate() + dayPos);
    let currDay = currDate.getDate();
    return this.dateFormat(currDay);
  };

  handleClickDay = (dayPos) => {
    let i = 0;
    const colors = this.state.colors.slice();
    for (i = 0; i < this.state.colors.length; i++) {
      if (dayPos === i) {
        colors[i] = "#90b3ff";
      } else {
        colors[i] = "#ffffff";
      }
    }
    this.setState({ colors: colors });
    let currDate = new Date();
    currDate.setDate(new Date().getDate() + dayPos - 3);
    let currDay = currDate.getDate();
    let currMonth = currDate.getMonth() + 1;
    let currWeekDayIndex = currDate.getDay();
    let currYear = currDate.getFullYear();
    let currWeekDay = this.weekDays[currWeekDayIndex];
    this.setState({
      day: this.dateFormat(currDay),
      month: this.dateFormat(currMonth),
      year: currYear,
      weekDay: currWeekDay,
    });
  };

  render() {
    return (
      <div>
        <div className="height-XXS  spacing text-left">
          <h3>
            <b>Missions</b>
          </h3>
        </div>
        <Row xs="9" className="text-center height-XXS align-items-center mb-2">
          <Col className="p-0">
            <span
              style={{ background: this.state.colors[0] }}
              onClick={() => {
                this.handleClickDay(0);
                this.props.dateHandler(0);
              }}
              className="dayCircle"
            >
              <b>{this.renderDayDate(-3)}</b>
            </span>
          </Col>
          <Col className="p-0">
            <span
              style={{ background: this.state.colors[1] }}
              onClick={() => {
                this.handleClickDay(1);
                this.props.dateHandler(1);
              }}
              className="dayCircle"
            >
              <b>{this.renderDayDate(-2)}</b>
            </span>
          </Col>
          <Col className="p-0">
            <span
              style={{ background: this.state.colors[2] }}
              onClick={() => {
                this.handleClickDay(2);
                this.props.dateHandler(2);
              }}
              className="dayCircle"
            >
              <b>{this.renderDayDate(-1)}</b>
            </span>
          </Col>
          <Col className="p-0">
            <span
              style={{ background: this.state.colors[3] }}
              onClick={() => {
                this.handleClickDay(3);
                this.props.dateHandler(3);
              }}
              className="dayCircle"
            >
              <b>{this.renderDayDate(0)}</b>
            </span>
          </Col>
          <Col className="p-0">
            <span
              style={{ background: this.state.colors[4] }}
              onClick={() => {
                this.handleClickDay(4);
                this.props.dateHandler(4);
              }}
              className="dayCircle"
            >
              <b>{this.renderDayDate(1)}</b>
            </span>
          </Col>
          <Col className="p-0">
            <span
              style={{ background: this.state.colors[5] }}
              onClick={() => {
                this.handleClickDay(5);
                this.props.dateHandler(5);
              }}
              className="dayCircle"
            >
              <b>{this.renderDayDate(2)}</b>
            </span>
          </Col>
          <Col className="p-0">
            <span
              style={{ background: this.state.colors[6] }}
              onClick={() => {
                this.handleClickDay(6);
                this.props.dateHandler(6);
              }}
              className="dayCircle"
            >
              <b>{this.renderDayDate(3)}</b>
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <h5 className="text-left">
                {this.state.weekDay}, {this.state.day}.{this.state.month}.
                {this.state.year}
              </h5>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DateSlider;
