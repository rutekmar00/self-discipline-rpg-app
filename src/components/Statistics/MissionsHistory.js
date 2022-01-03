import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import QuestS from "./QuestS";

class MissionsHistory extends Component {
  state = {
    date: new Date(),
    realDate: "",
  };

  onChange = (date) => {
    let newDate = new Date(date);
    this.setState({ date: date });
    this.setState({ realDate: newDate.toDateString() });
    let currDay = date.getDate();
    let currMonth = date.getMonth() + 1;
    let currYear = date.getFullYear();
    this.setState({
      dateStr:
        currYear.toString() +
        this.dateFormat(currMonth).toString() +
        this.dateFormat(currDay).toString(),
    });
  };

  dateFormat = (num) => {
    if (num.toString().length === 1) {
      return "0" + num;
    } else {
      return num;
    }
  };

  checkDate = (item) => {
    let currDate = null;
    let questDate = new Date(item.questDate).toDateString();
    if (this.state.realDate === "") {
      currDate = new Date().toDateString();
    } else {
      currDate = this.state.realDate;
    }
    if (questDate === currDate) {
      return item;
    }
  };

  render() {
    const filteredUserQuests = this.props.userQuests.filter(this.checkDate);

    return (
      <Col className="pt-4">
        <Row>
          <h5 className="float-left">Missions history</h5>
        </Row>
        <Row>
          <Col>
            <Calendar
              className="m-auto color-main"
              onChange={this.onChange}
              value={this.state.date}
              locale={"eng"}
            />
          </Col>
        </Row>
        <Row>
          <h6 className="pt-3">{this.state.date.toDateString()} Missions:</h6>
        </Row>
        <Row>
          <Col>
            <div className="overflow-auto height-S">
              {filteredUserQuests.length ? (
                filteredUserQuests.map((item) => (
                  <QuestS
                    key={item.dateAdded}
                    questName={item.questName}
                    questDescription={item.questDescription}
                    questShortDescription={item.questShortDescription}
                    questDone={item.questDone}
                    questStatus={item.questStatus}
                  />
                ))
              ) : (
                <div>No missions that day!</div>
              )}
            </div>
          </Col>
        </Row>
      </Col>
    );
  }
}
export default MissionsHistory;
