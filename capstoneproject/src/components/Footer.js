import React from 'react';
import logo from '../images/logo1.png';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="mainfooter" role="contentinfo">
      <div className="footer-top p-y-2">
        <div className="container-fluid">
        </div>
      </div>
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              {/* <!--Column1--> */}
              <div className="footer-pad" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={logo} alt="Little Lemon Logo" className="img-fluid" style={{ maxWidth: "27%" }} />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              {/* <!--Column2--> */}
              <div className="footer-pad">
                <h4>Navigation</h4>
                <ul className="list-unstyled-footer">
                  <li><a href="/main">Home</a></li>
                  <li><a href="/main#about-us">About</a></li>
                  <li><a href="/menu">Menu</a></li>
                  <li><a href="/reservations">Reservations</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              {/* <!--Column3--> */}
              <div className="footer-pad">
                <h4>Contact</h4>
                <ul className="list-unstyled-footer">
                  <li><a href="https://www.google.com/maps/search/?api=1&query=37.7749,-122.4194">Address</a></li>
                  <li><a href="tel:+1234567890">Phone Number</a></li>
                  <li><a href="mailto:example@example.com">Email</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              {/* <!--Column4--> */}
              <div className="footer-pad">
                <h4>Social Media</h4>
                <ul className="list-unstyled-footer">
                  <li><a href="https://www.facebook.com" target="blank">Facebook</a></li>
                  <li><a href="https://www.instagram.com" target="blank">Instagram</a></li>
                  <li><a href="https://www.twitter.com" target="blank">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center">
              {/* <!--Footer Bottom--> */}
              <p>&copy; 2023 - Little Lemon Restaurant. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;