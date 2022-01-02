import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import "./MainPage.css";
import NavBar from "./NavBar";
import Progress from "reactstrap/es/Progress";
import HeroWarrior from "../Hero/HeroWarrior";
import HeroElf from "../Hero/HeroElf";
import HeroKnight from "../Hero/HeroKnight";
import Missions from "../Missions/Missions";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterClass: "Warrior",
      heroState: "default",
      level: "1",
      playerName: "Test",
      experience: "0",
      nextLevelExp: "200",
      health: "100",
      fullHealth: "100",
      mana: "10",
      manaLimit: "10",
      strength: "5",
      agility: "5",
      vitality: "5",
      intelligence: "5",
      charisma: "5",
      responsibility: "5",
    };
  }

  componentDidMount() {
    this.handleHero("default");
  }

  componentWillUnmount() {
    clearTimeout(this.handleHeroTimer);
  }

  handleHero = (heroState) => {
    this.setState({ heroState: heroState });
    this.handleHeroTimer = setTimeout(
      function () {
        this.setState({ heroState: "heroIdleBlinking" });
      }.bind(this),
      0
    );
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md="6" className="height-XL">
            <Col className="">
              <NavBar handleHero={this.handleHero} character={this.state} />
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
            <Missions />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
