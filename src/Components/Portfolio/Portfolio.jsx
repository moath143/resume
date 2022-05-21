import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import PortfolioPhoto from '../../img/bg/400x400.png'
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <Container>
        <h2 className="text-center">Portfolio</h2>
        <Row className="grid">
          <Col lg={4} md={6} className="grid-item marketing">
            <div className="single-portfolio-item ">
              <img
                src={PortfolioPhoto}
                alt=""
                className="img-fluid"
              />
              <div className="overlay text-center">
                <div className="content">
                  <h3>Brex Logo</h3>
                  <p>Brand</p>
                  <a
                    href={PortfolioPhoto}
                    className="image-link"
                  >
                    <span className="fa fa-eye"></span>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="grid-item marketing">
            <div className="single-portfolio-item ">
              <img
                src={PortfolioPhoto}
                alt=""
                className="img-fluid"
              />
              <div className="overlay text-center">
                <div className="content">
                  <h3>Brex Logo</h3>
                  <p>Brand</p>
                  <a
                    href={PortfolioPhoto}
                    className="image-link"
                  >
                    <span className="fa fa-eye"></span>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="grid-item marketing">
            <div className="single-portfolio-item ">
              <img
                src={PortfolioPhoto}
                alt=""
                className="img-fluid"
              />
              <div className="overlay text-center">
                <div className="content">
                  <h3>Brex Logo</h3>
                  <p>Brand</p>
                  <a
                    href={PortfolioPhoto}
                    className="image-link"
                  >
                    <span className="fa fa-eye"></span>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="grid-item marketing">
            <div className="single-portfolio-item ">
              <img
                src={PortfolioPhoto}
                alt=""
                className="img-fluid"
              />
              <div className="overlay text-center">
                <div className="content">
                  <h3>Brex Logo</h3>
                  <p>Brand</p>
                  <a
                    href={PortfolioPhoto}
                    className="image-link"
                  >
                    <span className="fa fa-eye"></span>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="grid-item marketing">
            <div className="single-portfolio-item ">
              <img
                src={PortfolioPhoto}
                alt=""
                className="img-fluid"
              />
              <div className="overlay text-center">
                <div className="content">
                  <h3>Brex Logo</h3>
                  <p>Brand</p>
                  <a
                    href={PortfolioPhoto}
                    className="image-link"
                  >
                    <span className="fa fa-eye"></span>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="grid-item marketing">
            <div className="single-portfolio-item ">
              <img
                src={PortfolioPhoto}
                alt=""
                className="img-fluid"
              />
              <div className="overlay text-center">
                <div className="content">
                  <h3>Brex Logo</h3>
                  <p>Brand</p>
                  <a
                    href={PortfolioPhoto}
                    className="image-link"
                  >
                    <span className="fa fa-eye"></span>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
