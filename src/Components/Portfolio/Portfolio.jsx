import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioPhoto from "../../img/bg/400x400.png";
import axios from "axios";
import "./portfolio.css";
import CardFolio from "../CardFolio";

const vercelToken = "J4jUyK6bVJTaMvlkrP6UintP"; //Replace with your token
const apiEndPt = "https://api.vercel.com/v9/projects";

let config = {
  method: "get",
  url: apiEndPt,
  headers: {
    Authorization: "Bearer " + vercelToken,
  },
};

const Portfolio = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios(config);
    // console.log(res)
    setData(res.data.projects);
    console.log(res.data.projects[0]);
  };

  const portfolioList = data.map((proj, index) => {
    const list = proj.targets.production;
    return (
      <CardFolio
        name={list.name}
        url={list.url}
        creator={list.creator.username}
      />
    );
  });

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="portfolio" id="portfolio">
      <Container>
        <h2 className="text-center">Portfolio</h2>
        <Row className="grid">
          {portfolioList}
          {/* <Col lg={4} md={6} className="grid-item marketing">
            <div className="single-portfolio-item ">
              <img src={PortfolioPhoto} alt="" className="img-fluid" />
              <div className="overlay text-center">
                <div className="content">
                  <h3>Brex Logo</h3>
                  <p>Brand</p>
                  <a href={PortfolioPhoto} className="image-link">
                    <span className="fa fa-eye"></span>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="grid-item marketing">
            <div className="single-portfolio-item ">
              <img src={PortfolioPhoto} alt="" className="img-fluid" />
              <div className="overlay text-center">
                <div className="content">
                  <h3>Brex Logo</h3>
                  <p>Brand</p>
                  <a href={PortfolioPhoto} className="image-link">
                    <span className="fa fa-eye"></span>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="grid-item marketing">
            <div className="single-portfolio-item ">
              <img src={PortfolioPhoto} alt="" className="img-fluid" />
              <div className="overlay text-center">
                <div className="content">
                  <h3>Brex Logo</h3>
                  <p>Brand</p>
                  <a href={PortfolioPhoto} className="image-link">
                    <span className="fa fa-eye"></span>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="grid-item marketing">
            <div className="single-portfolio-item ">
              <img src={PortfolioPhoto} alt="" className="img-fluid" />
              <div className="overlay text-center">
                <div className="content">
                  <h3>Brex Logo</h3>
                  <p>Brand</p>
                  <a href={PortfolioPhoto} className="image-link">
                    <span className="fa fa-eye"></span>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="grid-item marketing">
            <div className="single-portfolio-item ">
              <img src={PortfolioPhoto} alt="" className="img-fluid" />
              <div className="overlay text-center">
                <div className="content">
                  <h3>Brex Logo</h3>
                  <p>Brand</p>
                  <a href={PortfolioPhoto} className="image-link">
                    <span className="fa fa-eye"></span>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="grid-item marketing">
            <div className="single-portfolio-item ">
              <img src={PortfolioPhoto} alt="" className="img-fluid" />
              <div className="overlay text-center">
                <div className="content">
                  <h3>Brex Logo</h3>
                  <p>Brand</p>
                  <a href={PortfolioPhoto} className="image-link">
                    <span className="fa fa-eye"></span>
                  </a>
                </div>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
