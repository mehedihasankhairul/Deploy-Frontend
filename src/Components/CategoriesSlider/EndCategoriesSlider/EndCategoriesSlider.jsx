import React, { Component } from "react";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryItem from '../../../Components/Home/CategoryItem'
import Error from '../../../Pages/Error/Error';

import Slider from "react-slick";





const EndCategoriesSlider = () => {

    
    
    const { midCategory, endCategory } = useSelector((state) => state.category);

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
        <div className="endCategoriesSlider">
            <h1>End Categories</h1>
            <div className="tb-style"></div>
            <Slider {...settings} className="endcg-slider">
            {
                endCategory.map(item => <CategoryItem key={item.id} item={item} />)
            }
        </Slider>
        </div>
    );
};

export default EndCategoriesSlider;