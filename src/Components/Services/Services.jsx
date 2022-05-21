import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="text-center">Services</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="box">
              <span className="fa-solid fa-gear"></span>
              <h3>Creative Design</h3>
              <p>
                Lorem Ipsum simply text of the printing and type setting
                industry when an unknown printing simply{" "}
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="box">
              <span className="fa-solid fa-crop"></span>
              <h3>Clean Code</h3>
              <p>
                Lorem Ipsum simply text of the printing and type setting
                industry when an unknown printing simply{" "}
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="box">
              <span className="fa-solid fa-cubes"></span>
              <h3>Responsive Design</h3>
              <p>
                Lorem Ipsum simply text of the printing and type setting
                industry when an unknown printing simply{" "}
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="box">
              <span className="fa-solid fa-chart-pie"></span>
              <h3>Bootstrap 4</h3>
              <p>
                Lorem Ipsum simply text of the printing and type setting
                industry when an unknown printing simply{" "}
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="box">
              <span className="fa-solid fa-code"></span>
              <h3>Font Icons</h3>
              <p>
                Lorem Ipsum simply text of the printing and type setting
                industry when an unknown printing simply{" "}
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="box">
              <span className="fa-solid fa-chart-column"></span>
              <h3>Awesome Support</h3>
              <p>
                Lorem Ipsum simply text of the printing and type setting
                industry when an unknown printing simply
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services