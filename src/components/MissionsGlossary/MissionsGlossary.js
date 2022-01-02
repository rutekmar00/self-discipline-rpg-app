import React from "react";
import { Container } from "reactstrap";
import QuestM from "./QuestM";

class MissionsGlossary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questList: [
        {
          current: true,
          duration: 1,
          expReward: 200,
          id: 0,
          itemRewardId: 1,
          questDescription:
            "Smoking cigarettes had bad influence on your health and frame of mind. By stop smoking you can decrease the risk of cancer disease to minimum. Give it a try!",
          questName: "Stop smoke!",
          questShortDescription:
            "It`s time! You have to stop smoke cigarettes.",
        },
        {
          current: true,
          duration: 1,
          expReward: 300,
          id: 8,
          itemRewardId: 2,
          questDescription:
            "Although this has not been proven - it is the best and fastest way to learn a foreign language. At least the creator of this task thinks so.",
          questName: "Native language is lava!",
          questShortDescription:
            "Speak with your flatmates only in foreign language.",
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <div className="height-XXS  spacing text-left">
          <h3>
            <b>Missions glossary</b>
          </h3>
        </div>
        <div className="row height-LL overflow-auto">
          {this.state.questList.map((item) => (
            <QuestM
              key={item.id}
              questId={item.id}
              duration={item.duration}
              questName={item.questName}
              questDescription={item.questDescription}
              questShortDescription={item.questShortDescription}
              current={item.current}
            />
          ))}
        </div>
      </Container>
    );
  }
}

export default MissionsGlossary;
