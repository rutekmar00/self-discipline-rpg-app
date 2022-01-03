import React, { Component } from "react";
import { Col, Row } from "reactstrap";

class Trophies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTrophies: [
        { id: 1641148657028, name: "Native language is lava!", trophyId: 8 },
        { id: 1641145057028, name: "Stop smoke!", trophyId: 1 },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="height-XXS spacing text-left">
          <h3>
            <b>Trophies</b>
          </h3>
        </div>
        <Row className="overflow-auto">
          {this.state.userTrophies.length ? (
            this.state.userTrophies.map((item) => (
              <Col xs="5" className="p-1 img-container" key={item.id}>
                <div className="border-dark item-con">
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL + "/trophy.png"}
                    className="cover height-XS"
                  />
                  <span className="title-eq-item text">
                    <b>{item.name}</b>
                  </span>
                </div>
              </Col>
            ))
          ) : (
            <h3 className="text-center no-data">You have no trophies yet.</h3>
          )}
        </Row>
      </div>
    );
  }
}
export default Trophies;
