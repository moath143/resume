import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import aboutPhoto from './../../img/bg/400x350.png'
import Me from './../../img/me.jpg'
import './about.css'

const About = () => {
  return (
    <section className="about-me" id="about">
      <Container>
        <Row>
          <Col md={5}>
            <img src={Me} alt="" className="img-fluid" />
          </Col>
          <Col md={7}>
            <h2>About Me</h2>
            <p>
              Gifted Front-End ( React JS Library ) developer with years of
              experience in building, design, develop, maintain, and update
              high-quality websites Focus improves technicality and user
              experience
              <br />
              ⏩ My Skills:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;✔️ PSD, XD to React JS ( Single page Application )<br />
                &nbsp;&nbsp;&nbsp;&nbsp;✔️ Specialize in website performance optimization<br />
                &nbsp;&nbsp;&nbsp;&nbsp;✔️ Responsive web design<br />
                &nbsp;&nbsp;&nbsp;&nbsp;✔️ Front End Coder ( expert with HTML5, CSS3, Bootstrap 3 and 4, JavaScript )<br />
                &nbsp;&nbsp;&nbsp;&nbsp;✔️ Ongoing Maintenance<br />
                &nbsp;&nbsp;&nbsp;&nbsp;✔️ Website speed optimization<br />
                &nbsp;&nbsp;&nbsp;&nbsp;✔️ Git and Github version control<br />
                &nbsp;&nbsp;&nbsp;&nbsp;✔️ PSD to (HTML, CSS3, JavaScript, Bootstrap 3 and 4 )<br />
                &nbsp;&nbsp;&nbsp;&nbsp;✔️ Fetch data from API’s with React JS<br />
            </p>
            <a href="#0" className="btn-1">
              Download CV
            </a>
            <a href="#portfolio" className="btn-2">
              Portfolio
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About