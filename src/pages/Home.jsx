import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <section className="banner_section" id="home">
      <div className="container">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-caption">
                <div className="banner-content">
                  <h1>100% organic</h1>
                  <h3>Fresh &Natural Farm Food</h3>
                  <p>
                    The readable content of a page when looking at its layout
                    point of using of letters as opposed.
                  </p>
                  <a href="" className="btn main-btn">
                    All Products
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-caption">
                <div className="banner-content">
                  <h1>100% organic</h1>
                  <h3>Fresh &Natural Farm Food</h3>
                  <p>
                    The readable content of a page when looking at its layout
                    point of using of letters as opposed.
                  </p>
                  <a href="" className="btn main-btn">
                    All Products
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

export default Home;
