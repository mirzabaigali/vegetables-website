import React, { useEffect, useRef, useState } from "react";
import logo from "../images/logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { Link } from "react-scroll";
library.add(faBarsStaggered);

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(""); // Default active link
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");
    const productSection = document.getElementById("product");
    const gallerySection = document.getElementById("gallery");
    const contactSection = document.getElementById("contact");

    if (
      scrollPosition >=
      contactSection.offsetTop + contactSection.offsetHeight
    ) {
      setActiveLink("contact");
    } else if (
      scrollPosition >=
      gallerySection.offsetTop + gallerySection.offsetHeight
    ) {
      setActiveLink("gallery");
    } else if (
      scrollPosition >=
      productSection.offsetTop + productSection.offsetHeight
    ) {
      setActiveLink("product");
    } else if (
      scrollPosition >=
      aboutSection.offsetTop + aboutSection.offsetHeight
    ) {
      setActiveLink("about");
    } else if (
      scrollPosition >=
      homeSection.offsetTop + homeSection.offsetHeight
    ) {
      setActiveLink("home");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Call the handleScroll function here to update the active link on scroll
    };
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`full_nav ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header" ref={navRef}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-brand"
            >
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon
                icon="fa-solid fa-bars-staggered"
                className="navbar-toggler-icon"
              />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`nav-link ${
                      activeLink === "home" ? "active" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`nav-link ${
                      activeLink === "about" ? "active" : ""
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="product"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`nav-link ${
                      activeLink === "product" ? "active" : ""
                    }`}
                  >
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`nav-link ${
                      activeLink === "gallery" ? "active" : ""
                    }`}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`nav-link ${
                      activeLink === "contact" ? "active" : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="header_right">
                <div className="text-lg-end">
                  <span>Call Us!</span>
                  <span className="phone_num">+91 8977403988</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
