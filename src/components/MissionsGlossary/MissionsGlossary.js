import React from "react";
import { Container } from "reactstrap";
import { updateUsersQuestsAndQuestsList } from "../../services/firebase";
import QuestMG from "./QuestMG";

class MissionsGlossary extends React.Component {
  componentDidMount() {
    let userQuestsTmp = JSON.parse(JSON.stringify(this.props.userQuests));
    let questListTmp = JSON.parse(JSON.stringify(this.props.questList));
    let currentQuestList = questListTmp.filter((x) => x.current === true);

    currentQuestList.forEach(async (element) => {
      let filteredUserQuestsByQuestId = userQuestsTmp.filter((item) => {
        return item.questId === element.id;
      });
      let lastElementInUserQuests =
        filteredUserQuestsByQuestId[filteredUserQuestsByQuestId.length - 1];
      if (lastElementInUserQuests.questStatus === "Failed") {
        questListTmp[element.id - 1].current = false;

        this.props.updateQuestList(questListTmp);
        try {
          await updateUsersQuestsAndQuestsList(
            this.props.characterDocId,
            questListTmp,
            userQuestsTmp
          );
        } catch (error) {}
      }
    });
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
          {this.props.questList.map((item) => (
            <QuestMG
              key={item.id}
              questId={item.id}
              duration={item.duration}
              questName={item.questName}
              questDescription={item.questDescription}
              questShortDescription={item.questShortDescription}
              current={item.current}
              handleAddQuest={this.props.handleAddQuest}
            />
          ))}
        </div>
      </Container>
    );
  }
}

export default MissionsGlossary;
