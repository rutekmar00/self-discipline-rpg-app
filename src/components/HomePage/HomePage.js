import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import ImageSlider from "./ImageSlider";
import "./HomePage.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid={true} className="color-bckg">
        <Row className="pt-5 text-center">
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h1>From zero to a hero</h1>
          </Col>
        </Row>
        <Row className="flex-column flex-lg-row justify-content-center  align-items-center pt-5">
          <Col xs="8" sm="10" className="p-4">
            <fieldset className="border p-4">
              <legend className="w-auto" align="center">
                What is Self discipline RPG App for?
              </legend>
              Self discipline RPG App is a self-improvement web application with
              game mechanics overlaid to help the player keep track of and
              remain motivated to achieve their goals. The game is laid out in
              the form of an RPG, in which the player collects items to become
              more powerful. Rewards are achieved through maintaining real-life
              goals, in the form of missions. A role-playing game is one in
              which a player takes on the role of another person or character.
              In game the user takes control of a character that they design
              themselves. The user can level up and unlock new features. The
              main goal is to stay alive and perform as much missions as
              possible.
            </fieldset>
          </Col>
          <Col
            xs="6"
            sm="4"
            lg="3"
            className="d-flex justify-content-center align-items-center p-4"
          >
            <div className="d-flex align-items-center flex-column">
              <Button
                onClick={() => console.log("login")}
                outline
                color="dark"
                size="lg"
              >
                <h1>SIGN IN</h1>
              </Button>
              <div className="d-block pt-5">
                <p className="pt-5">
                  <b>Do not have account yet?</b>
                </p>
              </div>
              <div className="d-block pt-3">
                <Button
                  onClick={() => console.log("signup")}
                  outline
                  color="dark"
                  size="lg"
                >
                  <h1>Start your journey!</h1>
                </Button>
              </div>
            </div>
          </Col>
          <Col className="p-4">
            <div>
              <fieldset className="fieldset-tag border p-4">
                <legend className="w-auto " align="center">
                  What's inside?
                </legend>
                <ImageSlider />
              </fieldset>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
