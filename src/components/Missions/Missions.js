import React, { Component } from "react";
import DateSlider from "./DateSlider";
import QuestList from "./QuestList";

class Missions extends Component {
  state = {
    date: "",
  };

  componentDidMount() {
    this.dateHandler(3);
  }

  dateFormat = (num) => {
    if (num.toString().length === 1) {
      return "0" + num;
    } else {
      return num;
    }
  };

  dateHandler = (dayPos) => {
    let currDate = new Date();
    currDate.setDate(new Date().getDate() + dayPos - 3);
    this.setState({ date: currDate.toDateString() });
  };

  render() {
    return (
      <div className="container d-flex flex-column w-100">
        <DateSlider dateHandler={this.dateHandler} />
        <QuestList
          userQuests={this.props.userQuests}
          handleFinish={this.props.handleFinish}
          realDate={this.state.date}
        />
      </div>
    );
  }
}
export default Missions;
