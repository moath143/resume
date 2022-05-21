import React from 'react'
import './footer.css'


const FooterSection = () => {
  return (
    <footer className="footer text-center">
      <div className="social-icons">
        <span className="fa-brands fa-facebook-f"></span>
        <span className="fa-brands fa-twitter"></span>
        <span className="fa-brands fa-dribbble"></span>
        <span className="fa-brands fa-skype"></span>
        {/* <span className="fa fa-facebook" aria-hidden="true"></span>
        <span className="fa fa-twitter" aria-hidden="true"></span>
        <span className="fa fa-dribbble" aria-hidden="true"></span>
        <span className="fa fa-skype" aria-hidden="true"></span> */}
      </div>
      <p>All Right Resceved 2018</p>
    </footer>
  );
}

export default FooterSection