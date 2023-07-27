import React from "react";
import "./ProductsCard.css"
const ProductsCard = ({ products }) => {
  return (
    <section className="landing_product_section" id="product">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center pb-5">
            <h2 className="section-title">our best seller Product</h2>
            <p className="section-subtitle">
              The Passage Experienced A Surge In Popularity.During The 1960s
              When Again During The 90s As Desktop Publishers
            </p>
          </div>
        </div>
        <div className="row mx-0">
          {products.map((product, index) => {
            return (
              <div className="col-lg-3 col-sm-6 mb-5 text-center" key={index}>
                <div className="card product-card">
                  <div className="product-img">
                    <img src={product.pic} alt="logo" className="img-fluid" />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>{product.text}</h3>
                    <span>$70 kg</span>
                  </div>
                  <div className="product-detail">
                    <a href="" className="main-btn1">
                      View Products
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsCard;
