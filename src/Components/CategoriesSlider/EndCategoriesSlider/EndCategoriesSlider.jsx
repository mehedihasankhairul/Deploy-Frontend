import React from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import CategoryItem from '../../../Components/Home/CategoryItem'
// import Error from '../../../Pages/Error/Error';

import Slider from 'react-slick';
import EndItem from './EndItem';

const EndCategoriesSlider = () => {
  const { endCategory } = useSelector((state) => state.category);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      // {
      //   breakpoint: 450,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ],
  };

  return (
    <div className="endCategoriesSlider">
      <h3 className="heading">Trending Categories</h3>
      <Slider {...settings} className="endcg-slider">
        {endCategory.map((item) => (
          <EndItem key={item.id} item={item} className="endctg-pd" />
        ))}
      </Slider>
    </div>
  );
};

export default EndCategoriesSlider;
