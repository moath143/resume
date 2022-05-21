import React from "react";
import Typical from "react-typical";
import { Container, Row, Col } from "react-bootstrap";
import "./slider.css";

const Slider = () => {

  return (
    <>
      <section className="slider d-flex justify-content-center" id="slider">
        <Container className="container text-center">
          <Row className="all-content">
            <Col>
              <div className="left-content">
                <p className="hello">HELLO I'M</p>
                <div className="animated-headlines">
                  <h1 className="cd-headline clip is-full-width">
                    <span className="cd-words-wrapper">
                      {/* <Typical
                        steps={[
                          "Moath Alnajjar",
                          1000,
                          "React Developer",
                          1000,
                          "Web Developer",
                          1000,
                        ]}
                        loop={Infinity}
                        wrapper="p"
                      /> */}
                      <b className="is-visible">Moath Alnajjar</b>
                    <br />
                    <b>React Developer</b>
                    <br />
                    <b>Web Developer</b>
                    </span>
                  </h1>
                </div>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                  <br />
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#0" className="btn">
                  Download CV
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Slider;
