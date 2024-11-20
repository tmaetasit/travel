import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

const ImageCarousel = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image.src} alt={image.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
