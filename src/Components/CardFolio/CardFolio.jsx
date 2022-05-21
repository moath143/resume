import React from "react";
import { Col } from "react-bootstrap";

const CardFolio = (props) => {
  return (
    <Col lg={4} md={6} className="grid-item marketing">
      <div className="single-portfolio-item ">
        <img
          src={`https://www.freecodecamp.org/news/content/images/2021/04/image-293.png`}
          alt=""
          className="img-fluid"
        />
        <div className="overlay text-center">
          <div className="content">
            <h3>{props.name}</h3>
            <p>{props.creator}</p>
            <a
              href={`https://${props.url}`}
              className="image-link"
              target="_blank"
            >
              <span className="fa fa-eye"></span>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
//https://resume-mf93i1qg2-moath143.vercel.app/
export default CardFolio;
