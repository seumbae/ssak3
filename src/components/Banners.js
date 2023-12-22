import React from 'react';
import '../styles//PredictMotive.css';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.png';
import banner3 from '../assets/images/banner3.png';

function Banners() {
  return (
    <Carousel pause="hover">
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={banner1} alt="First banner" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={banner2} alt="Second banner" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={banner3} alt="Third banner" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banners;
