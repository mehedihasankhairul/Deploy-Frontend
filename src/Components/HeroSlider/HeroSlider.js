import React from 'react';
import { Carousel} from 'react-bootstrap';
import banner1 from '../../Assets/Images/slider-8.jpg';
import banner2 from '../../Assets/Images/slider-9.jpg';
import banner3 from '../../Assets/Images/slider-10.jpg';
const Banner = () => {
  return (
    <div>
     <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner3}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
    </div>
  );
};

export default Banner;