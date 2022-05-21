import React from 'react'
import { Container, Row, Col,  } from 'react-bootstrap'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="text-center">Keep In Touch</h2>
      <Container>
        <Row>
          <div className="col-md-8">
            <form>
              <Row>
                <Col sm={6}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </Col>
                <Col sm={6}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </Col>
                <Col sm={12}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </Col>
              </Row>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="5"
                  id="comment"
                  placeholder="Message"
                ></textarea>
              </div>
              <button className="btn" type="submit">
                Send Now!
              </button>
            </form>
          </div>
          <Col md={4}>
            <div className="info">
              <span className="fa-solid fa-location-dot"></span>
              <p>
                2651 Main Street, Suit 124
                <br />
                Seattle, WA, 98101
              </p>

              <span className="fa-solid fa-mobile-screen"></span>
              <p>
                0123456789
                <br />
                0345627891
              </p>

              <span className="fa-solid fa-at"></span>
              <p>
                hello@thetheme.io <br /> inf0@brex-theme.io
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact