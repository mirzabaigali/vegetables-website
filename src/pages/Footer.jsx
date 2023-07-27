import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer-wrapper mt-3 mb-md-0" id="contact">
      <div className="container px-5 px-lg-0">
        <div className="row">
          <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
            <h5>Tazza</h5>
            <p className="mb-4 ps-0 company-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              consequuntur est debitis. Necessitatibus, ratione corrupti....
            </p>
            <div className="contact-info">
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faHome} className="me-3" />
                    No.96, South City, London
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faPhone} className="me-3" />
                    +1 111 222 3333
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                    info@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
            <h5>Customer Support</h5>
            <ul className="link-widget p-0">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & condition</a>
              </li>
              <li>
                <a href="#">Product Returns</a>
              </li>
              <li>
                <a href="#">Whole Sale Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
            <h5>Quick Links</h5>
            <ul className="link-widget p-0">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & condition</a>
              </li>
              <li>
                <a href="#">Product Returns</a>
              </li>
              <li>
                <a href="#">Whole Sale Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
            <h5>Newsletter</h5>
            <div className="form-group mb-4">
              <input
                type="email"
                className="form-control bg-transparent"
                placeholder="Enter Your Email Here"
              />
              <button type="submit" className="btn main-btn">
                Subscribe
              </button>
            </div>
            <h5>Stay Connected</h5>
            <ul className="social-network d-flex align-items-center p-0">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} className="me-3" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} className="me-3" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} className="me-3" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} className="me-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright-section">
        <p>
          Copyright <a href="#">@ MIRZAARIFALIBAIG</a> All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
