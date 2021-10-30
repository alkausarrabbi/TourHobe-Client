import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../../../images/banner/img1.jpg"
import img2 from "../../../images/banner/img2.jpg"
import img3 from "../../../images/banner/img3.jpg"
const Banner = () => {
    
    

    return (
        <div className="h-80 mb-5">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
    <h1 className="">Welcome TO TourHobe</h1>
      <h3>Cox's Bazar</h3>
      <p>It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Sundarbans</h3>
      <p>Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Sajek Valley</h3>
      <p>Sajek Valley is one of the popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;