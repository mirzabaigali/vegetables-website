import React, { useState } from "react";
import { PhotoGallery } from "react-photo-gallery";
import Lightbox from "react-images";
import "react-image-lightbox/style.css";
import "./Gallery.css"
import g1 from "../images/gallery/g-1.jpg";
import g2 from "../images/gallery/g-2.jpg";
import g3 from "../images/gallery/g-3.jpg";
import g4 from "../images/gallery/g-4.jpg";
import g5 from "../images/gallery/g-5.jpg";
import g6 from "../images/gallery/g-6.jpg";
import g7 from "../images/gallery/g-7.jpg";
import g8 from "../images/gallery/g-8.jpg";
import closeIcon from "../images/close.png";

const ProductGallery = () => {
  const images = [
    { src: g1, width: 4, height: 3 },
    { src: g2, width: 1, height: 1 },
    { src: g3, width: 3, height: 2 },
    { src: g4, width: 3, height: 4 },
    { src: g5, width: 4, height: 3 },
    { src: g6, width: 3, height: 2 },
    { src: g7, width: 4, height: 3 },
    { src: g8, width: 3, height: 2 },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setIsOpen(false);
  };

  return (
    <section className="gallery_section" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center pb-5">
            <h2 className="section-title">Our Gallery</h2>
            <p className="section-subtitle">
              The Passage Experienced A Surge In Popularity.During The 1960s
              When Again During The 90s As Desktop Publishers
            </p>
          </div>
          {images.map((image, index) => (
            <div className="col-sm-6 col-lg-4 mb-4" key={index}>
              <a href={image.src} onClick={() => openLightbox(index)}>
                <img
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className="img-fluid rounded-3"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <Lightbox
          images={images.map((image) => ({ src: image.src }))}
          onClose={closeLightbox}
          currentIndex={currentImage}
          backdropClosesModal={true}
        />
      )}
    </section>
  );
};

export default ProductGallery;
