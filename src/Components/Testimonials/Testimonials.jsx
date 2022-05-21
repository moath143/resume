import React, { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import TestiPhoto from '../../img/bg/90x90.png'
import testimonials from '../../img/testimonials.png'
import "./testimonials.css";

{/* <img src={testimonials} alt="" className="colon" />; */}

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <section className="testimonials" id="testimonials">
      <Container className="text-center">
        <h2>Testimonials</h2>
        <Row className="text-center">
          <Col md={12}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img className="colon" src={testimonials} alt="Third slide" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam porttitordapibus dictum.
                  <br />
                  Fusce faucibus ligula scelerisque, eleifend turpis in
                </p>
                <img src={TestiPhoto} alt="" className="center-block team" />
                <h3>Alamin Musa</h3>
                <h4>Front End Developer</h4>
              </Carousel.Item>
              <Carousel.Item>
                <img className="colon" src={testimonials} alt="Third slide" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam porttitordapibus dictum.
                  <br />
                  Fusce faucibus ligula scelerisque, eleifend turpis in
                </p>
                <img src={TestiPhoto} alt="" className="center-block team" />
                <h3>Alamin Musa</h3>
                <h4>Front End Developer</h4>
              </Carousel.Item>
              <Carousel.Item>
                <img className="colon" src={testimonials} alt="Third slide" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam porttitordapibus dictum.
                  <br />
                  Fusce faucibus ligula scelerisque, eleifend turpis in
                </p>
                <img src={TestiPhoto} alt="" className="center-block team" />
                <h3>Alamin Musa</h3>
                <h4>Front End Developer</h4>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
