import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import aboutPhoto from './../../img/bg/400x350.png'
import './about.css'

const About = () => {
  return (
    <section className="about-me" id="about">
      <Container>
        <Row>
          <Col md={5}>
            <img src={aboutPhoto} alt="" className="img-fluid" />
          </Col>
          <Col md={7}>
            <h2>About Me</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur
              <br />
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor si voluptatem
              quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur
            </p>
            <a href="#0" className="btn-1">
              Download CV
            </a>
            <a href="#0" className="btn-2">
              Portfolio
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About