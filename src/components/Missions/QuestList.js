import React from "react";
import Quest from "./Quest";

class QuestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkDate = (item) => {
    let currDate = null;
    let questDate = new Date(item.questDate).toDateString();
    if (this.props.realDate === "") {
      currDate = new Date().toDateString();
    } else {
      currDate = this.props.realDate;
    }
    if (questDate === currDate) {
      return item;
    }
  };

  render() {
    const filteredUserQuests = this.props.userQuests.filter(this.checkDate);

    return (
      <div className="container mb-4">
        <div className="row flex-column overflow-auto">
          {filteredUserQuests.length ? (
            filteredUserQuests.map((item) => (
              <Quest
                key={item.dateAdded}
                id={item.id}
                groupId={item.groupId}
                questId={item.questId}
                questName={item.questName}
                questDescription={item.questDescription}
                questShortDescription={item.questShortDescription}
                questDone={item.questDone}
                questStatus={item.questStatus}
              />
            ))
          ) : (
            <h3 className="text-center m-auto no-data">No missions that day</h3>
          )}
        </div>
      </div>
    );
  }
}

export default QuestList;
