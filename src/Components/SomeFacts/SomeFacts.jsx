import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import "./somefacts.css";

const SomeFacts = () => {
  return (
    <section className="some-facts">
      <Container className="text-center">
        <Row>
          <Col lg={3} sm={6}>
            <div className="items">
              <span className="fa-brands fa-skyatlas"></span>
              <h3>
                <span className="counter">368</span>
              </h3>
              <div className="line mx-auto"></div>
              <h4>Happy Clients</h4>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <div className="items">
              <span className="fa-regular fa-heart"></span>
              <h3>
                <span className="counter">937</span>
              </h3>
              <div className="line mx-auto"></div>
              <h4>Projects Compleated</h4>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <div className="items">
              <span className="fa-solid fa-earth-africa"></span>
              <h3>
                <span className="counter">438</span>
              </h3>
              <div className="line mx-auto"></div>
              <h4>Files Downloaded</h4>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <div className="items">
              <span class="fa-regular fa-user"></span>
              <h3>
                <span className="counter">5946</span>
              </h3>
              <div className="line mx-auto"></div>
              <h4>Liens Of Code</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SomeFacts;
