import React from "react";
import "./About.css"
const About = () => {
  return (
    <section className="landing_about_section" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 col-sm-8">
            <div className="about-content">
              <h2 className="display-5 fw-bold">we providing services since 1841 with proud.</h2>
              <div className="about-details">
                <p className="fw-bold">
                  the readable content off a page when looking layout using
                  lorem ipsumis that it has.
                </p>
                <p>
                  it is a long established fact that a reader will be distracted
                  the readable content off a page when looking at its layout
                  using lorem ipsumis that it has. it is a long established fact
                  that a reader will be distracted the readable content off a
                  page when looking at its layout using lorem ipsumis that it
                  has.
                </p>
                <p>
                  it is a long established fact that a reader will be distracted
                  the readable content off a page when looking at its layout
                  using lorem ipsumis that it has...
                </p>

                <div className="mt-3">
                  <a href="" className="main-btn" >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
