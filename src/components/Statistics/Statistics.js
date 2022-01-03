import React, { Component } from "react";
import CharacterStats from "./CharacterStats";
import MissionsStats from "./MissionsStats";
import MissionsHistory from "./MissionsHistory";
import { Row } from "reactstrap";

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTrophies: [
        { id: 1641148657028, name: "Native language is lava!", trophyId: 8 },
        { id: 1641145057028, name: "Stop smoke!", trophyId: 1 },
      ],
      userCreated: "1641185110194",
      statistics: {
        strength: "5",
        agility: "5",
        vitality: "5",
        intelligence: "5",
        charisma: "5",
        responsibility: "5",
      },
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
          questShortDescription:
            "It`s time! You have to stop smoke cigarettes.",
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
  }

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
            trophies={this.state.userTrophies}
            userCreated={this.state.userCreated}
            statistics={this.state.statistics}
          />
          <MissionsStats userQuests={this.state.userQuests} />
        </Row>
        <Row>
          <MissionsHistory userQuests={this.state.userQuests} />
        </Row>
      </div>
    );
  }
}
export default Statistics;
