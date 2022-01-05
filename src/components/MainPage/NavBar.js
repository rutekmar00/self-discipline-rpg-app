import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import {
  faHome,
  faChartBar,
  faSignOutAlt,
  faBook,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <FontAwesomeIcon
              icon={faHome}
              size="4x"
              className="m-3 pointer-hover"
              onClick={() => {
                this.props.handleSwitch("Missions");
                this.props.handleHero("heroIdleBlinking");
              }}
            />
          </NavItem>
          <NavItem>
            <FontAwesomeIcon
              icon={faBook}
              size="4x"
              className="m-3 pointer-hover"
              onClick={() => {
                this.props.handleSwitch("MissionsGlossary");
                this.props.handleHero("heroIdleBlinking");
              }}
            />
          </NavItem>
          <NavItem>
            <FontAwesomeIcon
              icon={faTrophy}
              size="4x"
              className="m-3 pointer-hover"
              onClick={() => {
                this.props.handleSwitch("Trophies");
                this.props.handleHero("heroIdleBlinking");
              }}
            />
          </NavItem>
          <NavItem>
            <FontAwesomeIcon
              icon={faChartBar}
              size="4x"
              className="m-3 pointer-hover"
              onClick={() => {
                this.props.handleSwitch("Statistics");
                this.props.handleHero("heroIdleBlinking");
              }}
            />
          </NavItem>
          <NavItem>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              size="4x"
              className="m-3 pointer-hover"
              onClick={() => {
                this.props.handleLogout(this.props.character);
                this.props.handleHero("heroDied");
              }}
            />
          </NavItem>
        </Nav>
      </div>
    );
  }
}
export default NavBar;
