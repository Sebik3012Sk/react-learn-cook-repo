import React, { useState } from "react";
import "./Fotogallery.css";
import MainMenu from "../../components/MainMenu";
import Footer from "../../components/Footer";
import BackToHome from "../../components/BackToHome";
import data_images from "../../data_images";


const Fotogallery = () => {
  const [previewImageIndex, setPreviewImageIndex] = useState(null);

  const openPreview = (index) => {
    setPreviewImageIndex(index);
  };

  const closePreview = () => {
    setPreviewImageIndex(null);
  };

  const goToPreviousImage = () => {
    setPreviewImageIndex((prevIndex) => {
      if (prevIndex === null || prevIndex === 0) {
        return data_images.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const goToNextImage = () => {
    setPreviewImageIndex((prevIndex) => {
      if (prevIndex === null || prevIndex === data_images.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  return (
    <div className="fotogallery-images">
      <h1 className="fotogallery-header-text">Fotogallery</h1>

      <BackToHome />

      <MainMenu />

      <div className="images">
        {data_images.map((image, index) => (
          <div className="one-image" key={index} onClick={() => openPreview(index)}>
            <img src={image.image} alt="" />
          </div>
        ))}
      </div>

      {previewImageIndex !== null && (
        <div className="image-preview-overlay">
          <div className="image-preview-container">
            <img className="image-preview" src={data_images[previewImageIndex].image} alt="" />
            <div className="image-counter">
              Image {previewImageIndex + 1} of {data_images.length}
            </div>
            <div className="image-navigation">
              <button className="prev-button" onClick={goToPreviousImage}>
                Previous
              </button>
              <button className="next-button" onClick={goToNextImage}>
                Next
              </button>
            </div>
            <button className="close-button" onClick={closePreview}>
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Fotogallery;
