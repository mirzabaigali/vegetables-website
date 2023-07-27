import React from "react";
import "./FeaturesCard.css"
const FeaturesCard = ({ features }) => {
  return (
    <section className="feature_section">
      <div className="container">
        <div className="row">
          {features.map((feature, index) => 
          (
            <div className="col-6 col-lg-3 mb-5" key={index}>
              <div className="card features-box">
                <div className="text-center">
                  <div className="features-icon-border">
                    <div className="features-icon">
                      <img src={feature.pic} alt="logo" />
                    </div>
                  </div>
                  <div className="features-text">
                    <h3>{feature.text}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCard;
