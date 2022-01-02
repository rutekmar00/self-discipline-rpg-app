import React, { Component } from "react";
import DateSlider from "./DateSlider";
import QuestList from "./QuestList";

class Missions extends Component {
  state = {
    date: "",
    userQuests: [
      {
        dateAdded: "2022-01-02T18:37:08.849Z",
        duration: 1,
        groupId: 0,
        id: 0,
        questDate: "Sat Jan 02 2022",
        questDescription:
          "Smoking cigarettes had bad influence on your health and frame of mind. By stop smoking you can decrease the risk of cancer disease to minimum. Give it a try!",
        questDone: false,
        questId: 1,
        questName: "Stop smoke!",
        questShortDescription: "It`s time! You have to stop smoke cigarettes.",
        questStatus: "Waiting",
      },
      {
        dateAdded: "2022-01-02T19:12:26.132Z",
        duration: 1,
        groupId: 1,
        id: 1,
        questDate: "Sat Jan 02 2022",
        questDescription:
          "Although this has not been proven - it is the best and fastest way to learn a foreign language. At least the creator of this task thinks so.",
        questDone: false,
        questId: 8,
        questName: "Native language is lava!",
        questShortDescription:
          "Speak with your flatmates only in foreign language.",
        questStatus: "Waiting",
      },
    ],
  };

  async componentDidMount() {
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
          userQuests={this.state.userQuests}
          realDate={this.state.date}
        />
      </div>
    );
  }
}
export default Missions;
