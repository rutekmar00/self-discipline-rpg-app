import React from "react";
import WarriorImg from "./images/aleksandr-skrebnev-warrior.jpg";
import MageImg from "./images/aleksandr-skrebnev-wizard.jpg";
import RogueImg from "./images/aleksandr-skrebnev-rogue.jpg";
import ArcherImg from "./images/aleksandr-skrebnev-archer.jpg";
import "./ClassChoice.css";

class ClassChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterClass: "Warrior",
      img: WarriorImg,
      heroState: "heroIdleBlinking",
    };
  }

  handleChange = (e, classChosen) => {
    e.preventDefault();
    this.setState((prevState) => {
      const newState = { ...prevState };
      switch (classChosen) {
        case "Warrior":
          newState["characterClass"] = "Warrior";
          newState["img"] = WarriorImg;
          break;
        case "Mage":
          newState["characterClass"] = "Mage";
          newState["img"] = MageImg;
          break;
        case "Rogue":
          newState["characterClass"] = "Rogue";
          newState["img"] = RogueImg;
          break;
        case "Archer":
          newState["characterClass"] = "Archer";
          newState["img"] = ArcherImg;
          break;
        default:
          newState["characterClass"] = "Warrior";
          newState["img"] = WarriorImg;
      }
      newState["heroState"] = "heroIdleBlinking";
      return newState;
    });
  };

  render() {
    const { characterClass, img } = this.state;
    return (
      <div className="row">
        <div className="row justify-content-center">
          <nav className="d-flex justify-content-center align-items-center col-8 col-sm-8 col-lg-2 bg-secondary sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item my-3">
                  <button
                    className="btn btn-secondary"
                    onClick={(e) => this.handleChange(e, "Warrior")}
                  >
                    <span></span>
                    Warrior <span className="sr-only">(current)</span>
                  </button>
                </li>
                <li className="nav-item my-3">
                  <button
                    className="btn btn-secondary"
                    id="Test"
                    onClick={(e) => this.handleChange(e, "Mage")}
                  >
                    <span></span>
                    Mage <span className="sr-only">(current)</span>
                  </button>
                </li>
                <li className="nav-item my-3">
                  <button
                    className="btn btn-secondary"
                    onClick={(e) => this.handleChange(e, "Rogue")}
                  >
                    <span></span>
                    Rogue <span className="sr-only">(current)</span>
                  </button>
                </li>
                <li className="nav-item my-3">
                  <button
                    className="btn btn-secondary"
                    onClick={(e) => this.handleChange(e, "Archer")}
                  >
                    <span></span>
                    Archer <span className="sr-only">(current)</span>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          <div role="main" className="col-8 col-sm-8 col-lg-6">
            <h1 className="text-center">{characterClass}</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              {
                {
                  Warrior: (
                    <img
                      src={img}
                      className="rounded mx-auto d-block w-75"
                      alt="Warrior icon"
                    />
                  ),
                  Mage: (
                    <img
                      src={img}
                      className="rounded mx-auto d-block w-75"
                      alt="Mage icon"
                    />
                  ),
                  Rogue: (
                    <img
                      src={img}
                      className="rounded mx-auto d-block w-75"
                      alt="Rogue icon"
                    />
                  ),
                  Archer: (
                    <img
                      src={img}
                      className="rounded mx-auto d-block w-75"
                      alt="Archer icon"
                    />
                  ),
                }[characterClass]
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassChoice;
