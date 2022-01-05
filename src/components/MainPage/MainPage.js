import React, { Component } from "react";
import "./MainPage.css";
import {
  Col,
  Container,
  Row,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import Progress from "reactstrap/es/Progress";
import HeroWarrior from "../Hero/HeroWarrior";
import HeroElf from "../Hero/HeroElf";
import HeroKnight from "../Hero/HeroKnight";
import NavBar from "./NavBar";
import Missions from "../Missions/Missions";
import MissionsGlossary from "../MissionsGlossary/MissionsGlossary";
import Statistics from "../Statistics/Statistics";
import Trophies from "../Trophies/Trophies";
import LevelUpForm from "./LevelUpForm";
import {
  getUserCharacter,
  updateCharacter,
  updateLevelAndNextLevelExp,
  updateUsersExpQuestsAndTrophies,
  updateUsersQuestList,
  updateUsersQuests,
  updateUsersQuestsAndQuestsList,
} from "../../services/firebase";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      questList: [],
      userQuests: [],
      userTrophies: [],
      heroState: "default",
      selectedContent: "Missions",
      characterClass: "",
      characterDocId: "",
      level: "",
      playerName: "",
      experience: "",
      nextLevelExp: "",
      health: "",
      fullHealth: "",
      mana: "",
      manaLimit: "",
      strength: "",
      agility: "",
      vitality: "",
      intelligence: "",
      charisma: "",
      responsibility: "",
    };
    this.updateQuestList = this.updateQuestList.bind(this);
  }

  async componentDidMount() {
    try {
      const { characterDocId, userCreated, userQuests, ...dataCharacter } =
        await getUserCharacter(this.props.email);
      this.setState({
        playerName: this.props.name,
        characterDocId: characterDocId,
        userCreated: userCreated,
        characterClass: dataCharacter.characterClass,
        level: dataCharacter.level,
        experience: dataCharacter.experience,
        health: dataCharacter.health,
        mana: dataCharacter.mana,
        strength: dataCharacter.strength,
        agility: dataCharacter.agility,
        vitality: dataCharacter.vitality,
        intelligence: dataCharacter.intelligence,
        charisma: dataCharacter.charisma,
        responsibility: dataCharacter.responsibility,
        nextLevelExp: dataCharacter.nextLevelExp,
        manaLimit: dataCharacter.manaLimit,
        fullHealth: dataCharacter.fullHealth,
        questList: dataCharacter.userQuestList,
        userQuests: userQuests,
        userTrophies: dataCharacter.userTrophies,
      });
      this.handleHero("default");
    } catch (error) {
      console.error(error);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.handleHeroTimer);
  }

  handleSwitch = (content) => {
    this.setState({ selectedContent: content });
  };

  handleHero = (heroState) => {
    this.setState({ heroState: heroState });
    this.handleHeroTimer = setTimeout(
      function () {
        this.setState({ heroState: "heroIdleBlinking" });
      }.bind(this),
      0
    );
  };

  handleAddQuest = async (quest) => {
    let questsTmp = JSON.parse(JSON.stringify(this.state.userQuests));
    let end = new Date(quest.dateAdded);
    end.setDate(end.getDate() + quest.duration);
    let userQuestsGroupId =
      questsTmp.length > 0 ? questsTmp[questsTmp.length - 1].groupId + 1 : 0;
    for (
      let i = new Date(quest.dateAdded),
        idUsersQuests = questsTmp.length === 0 ? 0 : questsTmp.length;
      i < end;
      i.setDate(i.getDate() + 1), idUsersQuests++
    ) {
      let tmpQuest = Object.assign({}, quest);
      tmpQuest.questDate = new Date(i).toUTCString();
      tmpQuest.groupId = userQuestsGroupId;
      tmpQuest.id = idUsersQuests;
      tmpQuest.questStatus = "Waiting";
      questsTmp.push(tmpQuest);
    }
    if (this.state.mana >= 2) {
      let allQuests = JSON.parse(JSON.stringify(this.state.questList));
      allQuests[quest.questId - 1].current = true;
      this.setState(
        {
          mana: this.state.mana - 2,
          questList: allQuests,
          userQuests: questsTmp,
        },
        async () => {
          try {
            await updateUsersQuestsAndQuestsList(
              this.state.characterDocId,
              this.state.questList,
              this.state.userQuests,
              this.state.mana
            );
          } catch (error) {
            console.error(error);
          }
        }
      );
    }
  };

  handleFinish = async (id, groupId, questId) => {
    let userQuestsTmp = JSON.parse(JSON.stringify(this.state.userQuests));
    let questListTmp = JSON.parse(JSON.stringify(this.state.questList));
    let userTrophiesTmp = JSON.parse(JSON.stringify(this.state.userTrophies));
    let indexUserQuests = userQuestsTmp.findIndex((x) => x.id === id);

    if (indexUserQuests != null) {
      userQuestsTmp[indexUserQuests].questDone = true;
      userQuestsTmp[indexUserQuests].questStatus = "Finished";
      this.setState({
        userQuests: userQuestsTmp,
      });
      await updateUsersQuests(this.state.characterDocId, userQuestsTmp);
    }

    let elementsGroupId = userQuestsTmp.filter((item) => {
      if (item.groupId === groupId) return [item];
    });
    let resultsOfUsersQuests = elementsGroupId.reduce(
      (previousValue, currentValue) => {
        if (currentValue.questStatus === "Failed") {
          let failed = previousValue.failed + 1;
          return { ...previousValue, failed };
        } else if (currentValue.questStatus === "Finished") {
          let finished = previousValue.finished + 1;
          return { ...previousValue, finished };
        } else {
          let waiting = previousValue.waiting + 1;
          return { ...previousValue, waiting };
        }
      },
      {
        finished: 0,
        failed: 0,
        waiting: 0,
      }
    );

    let indexQuestList = questListTmp.findIndex((x) => x.id === questId);

    if (resultsOfUsersQuests.finished === elementsGroupId.length) {
      questListTmp[indexQuestList].current = false;
      this.setState({
        questList: questListTmp,
      });
      userTrophiesTmp.push({
        id: Date.now(),
        trophyId: questListTmp[indexQuestList].itemRewardId,
        name: questListTmp[indexQuestList].questName,
      });
      let currExp =
        this.state.experience + questListTmp[indexQuestList].expReward;
      if (currExp >= this.state.nextLevelExp) {
        this.setState(
          {
            nextLevelExp: this.state.nextLevelExp + 500,
            showModal: true,
            level: this.state.level + 1,
          },
          async () => {
            try {
              await updateLevelAndNextLevelExp(
                this.state.characterDocId,
                this.state.level,
                this.state.nextLevelExp
              );
            } catch (error) {
              console.error(error);
            }
          }
        );
      }
      this.setState(
        {
          experience: currExp,
          userTrophies: userTrophiesTmp,
        },
        async () => {
          try {
            await updateUsersExpQuestsAndTrophies(
              this.state.characterDocId,
              currExp,
              questListTmp,
              userTrophiesTmp
            );
          } catch (error) {
            console.error(error);
          }
        }
      );
    } else if (
      resultsOfUsersQuests.finished + resultsOfUsersQuests.failed ===
      elementsGroupId.length
    ) {
      questListTmp[indexQuestList].current = false;
      this.setState({
        questList: questListTmp,
      });
      await updateUsersQuestList(this.state.characterDocId, questListTmp);
    }
  };

  handleLevelUp = (stats) => {
    const newManaLimit = this.state.manaLimit + 2;
    this.setState(
      {
        strength: stats.strength,
        vitality: stats.vitality,
        charisma: stats.charisma,
        responsibility: stats.responsibility,
        agility: stats.agility,
        intelligence: stats.intelligence,
        mana: newManaLimit,
        manaLimit: newManaLimit,
        showModal: false,
      },
      async () => {
        try {
          await updateCharacter(this.state.characterDocId, stats, newManaLimit);
        } catch (error) {
          console.error(error);
        }
      }
    );
  };

  updateQuestList(questList) {
    this.setState({
      questList: questList,
    });
  }

  renderContent = (content) => {
    if (content === "Statistics") {
      const stats = {
        strength: this.state.strength,
        vitality: this.state.vitality,
        charisma: this.state.charisma,
        responsibility: this.state.responsibility,
        agility: this.state.agility,
        intelligence: this.state.intelligence,
      };
      return (
        <Statistics
          statistics={stats}
          userQuests={this.state.userQuests}
          userCreated={this.state.userCreated}
          userTrophies={this.state.userTrophies}
          email={this.props.email}
        />
      );
    } else if (content === "MissionsGlossary") {
      return (
        <MissionsGlossary
          handleAddQuest={this.handleAddQuest}
          userQuests={this.state.userQuests}
          questList={this.state.questList}
          updateQuestList={this.updateQuestList}
          characterDocId={this.state.characterDocId}
        />
      );
    } else if (content === "Trophies") {
      return <Trophies userTrophies={this.state.userTrophies} />;
    } else {
      return (
        <Missions
          handleAddQuest={this.handleAddQuest}
          handleFinish={this.handleFinish}
          userQuests={this.state.userQuests}
          questList={this.state.questList}
          userTrophies={this.state.userTrophies}
          characterDocId={this.state.characterDocId}
        />
      );
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md="6" className="height-XL">
            <Col className="">
              <NavBar
                handleHero={this.handleHero}
                character={this.state}
                handleLogout={this.props.handleLogout}
                handleSwitch={this.handleSwitch}
              />
            </Col>
            <Col className="height-XXS mb-3 text-center">
              <span className="nickname">{this.state.playerName} </span>
            </Col>
            <Col style={{ height: "40%" }}>
              <Row>
                <Col className="height-M text-left class-name-div">
                  <span className="class-name">
                    {this.state.characterClass} <br /> lvl. {this.state.level}
                  </span>
                </Col>
                <Col xs="6" className="height-M">
                  {this.state.characterClass === "Warrior" ? (
                    <HeroWarrior heroState={this.state.heroState} />
                  ) : null}
                  {this.state.characterClass === "Rogue" ? (
                    <HeroKnight heroState={this.state.heroState} />
                  ) : null}
                  {this.state.characterClass === "Mage" ? (
                    <HeroElf heroState={this.state.heroState} />
                  ) : null}
                  {this.state.characterClass === "Archer" ? (
                    <HeroWarrior heroState={this.state.heroState} />
                  ) : null}
                </Col>
              </Row>
            </Col>
            <Col xs="12" className="height-XXS ">
              <Row xs="3">
                <Col className="height-XXS text-center">
                  <span>EXPERIENCE</span>
                  <Progress
                    color="warning"
                    value={
                      (this.state.experience / this.state.nextLevelExp) * 100
                    }
                  >
                    {" "}
                    {this.state.experience}
                  </Progress>{" "}
                </Col>
                <Col className="height-XXS text-center">
                  <span>HEALTH</span>
                  <Progress
                    color="danger"
                    value={(this.state.health / this.state.fullHealth) * 100}
                  >
                    {this.state.health}{" "}
                  </Progress>
                </Col>
                <Col className="height-XXS text-center">
                  <span>MANA</span>
                  <Progress
                    value={(this.state.mana / this.state.manaLimit) * 100}
                  >
                    {this.state.mana}{" "}
                  </Progress>
                </Col>
              </Row>
            </Col>
            <Col xs="12" className="height-S ">
              <Row>
                <Col xs="12" className="height-XXS stat">
                  {" "}
                  <b>STATS</b>
                </Col>
              </Row>
              <Row>
                <Col className="height-XXS">STRENGTH</Col>
                <Col className="height-XXS text-left">
                  {this.state.strength}
                </Col>
                <Col className="height-XXS">INTELIGENCE</Col>
                <Col className="height-XXS text-left">
                  {this.state.intelligence}
                </Col>
              </Row>
              <Row>
                <Col className="height-XXS">AGILITY</Col>
                <Col className="height-XXS text-left">
                  {this.state.agility}{" "}
                </Col>
                <Col className="height-XXS">CHARISMA</Col>
                <Col className="height-XXS text-left">
                  {this.state.charisma}
                </Col>
              </Row>
              <Row>
                <Col className="height-XXS">VITALITY</Col>
                <Col className="height-XXS text-left">
                  {this.state.vitality}
                </Col>
                <Col className="height-XXS">RESPONSIBILITY</Col>
                <Col className="height-XXS text-left">
                  {this.state.responsibility}
                </Col>
              </Row>
            </Col>
          </Col>
          <Col md="6" className="height-XL mt-4">
            {this.renderContent(this.state.selectedContent)}
          </Col>
        </Row>
        <Modal isOpen={this.state.showModal}>
          <ModalHeader>Congratulations, you are at the next level!</ModalHeader>
          <ModalBody>
            <LevelUpForm
              handleLevelUp={this.handleLevelUp}
              strength={this.state.strength}
              agility={this.state.agility}
              intelligence={this.state.intelligence}
              vitality={this.state.vitality}
              responsibility={this.state.responsibility}
              charisma={this.state.charisma}
            />
          </ModalBody>
          <ModalFooter>
            <button variant="primary" onClick={this.handleClose}>
              Close
            </button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default MainPage;
