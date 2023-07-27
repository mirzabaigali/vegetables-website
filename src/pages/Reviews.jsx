import React from "react";
import testi1 from "../images/testimonial/testimonial-1.png";
import quotes from "../images/testimonial/qoutes.svg";
import "./Reviews.css";
const Reviews = () => {
  return (
    <section className="testimonial_section" id="review">
      <div className="container">
        <div className="row pb-5">
          <div className="col-12 text-center">
            <h2 className="section-titile">Our Happy Customers</h2>
            <p className="section-subtitle">
              The Passage Experienced A Surge In Popularity.During The 1960s
              When Again During The 90s As Desktop Publishers
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-md-10">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-sm-flex row">
                    <div className="profile-box col-sm-5">
                      <img src={testi1} className="img-fluid" alt="..." />
                    </div>
                    <div className="card col-sm-7">
                      <div className="desc-box">
                        <p className="fst-italic">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat eaque consectetur ut, error commodi
                          ullam hic soluta! Possimus distinctio ex modi
                          reprehenderit consequatur ipsa, esse ea, voluptatibus
                          nisi, veniam repellendus!
                        </p>
                        <div className="my-4">
                          <h4>Jecob Omronson</h4>
                          <p className="m-0 text-white">Happy Customer</p>
                        </div>
                        <img src={quotes} alt="logo" className="float-end" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-sm-flex row">
                    <div className="profile-box col-sm-5">
                      <img src={testi1} className="img-fluid" alt="..." />
                    </div>
                    <div className="card col-sm-7">
                      <div className="desc-box">
                        <p className="fst-italic">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat eaque consectetur ut, error commodi
                          ullam hic soluta! Possimus distinctio ex modi
                          reprehenderit consequatur ipsa, esse ea, voluptatibus
                          nisi, veniam repellendus!
                        </p>
                        <div className="my-4">
                          <h4>Jecob Omronson</h4>
                          <p className="m-0 text-white">Happy Customer</p>
                        </div>
                        <img src={quotes} alt="logo" className="float-end" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-sm-flex row">
                    <div className="profile-box col-sm-5">
                      <img src={testi1} className="img-fluid" alt="..." />
                    </div>
                    <div className="card col-sm-7">
                      <div className="desc-box">
                        <p className="fst-italic">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat eaque consectetur ut, error commodi
                          ullam hic soluta! Possimus distinctio ex modi
                          reprehenderit consequatur ipsa, esse ea, voluptatibus
                          nisi, veniam repellendus!
                        </p>
                        <div className="my-4">
                          <h4>Jecob Omronson</h4>
                          <p className="m-0 text-white">Happy Customer</p>
                        </div>
                        <img src={quotes} alt="logo" className="float-end" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
