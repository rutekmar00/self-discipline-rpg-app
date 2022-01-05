import React, { Component } from "react";
import { Col, Row } from "reactstrap";

class Trophies extends Component {
  render() {
    return (
      <div>
        <div className="height-XXS spacing text-left">
          <h3>
            <b>Trophies</b>
          </h3>
        </div>
        <Row className="overflow-auto">
          {this.props.userTrophies.length ? (
            this.props.userTrophies.map((item) => (
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
