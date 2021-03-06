import React from 'react';
import { useSelector } from 'react-redux';

import EndItem from './EndItem';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { Link } from 'react-router-dom';
// import CategoryItem from '../../../Components/Home/CategoryItem'
// import Error from '../../../Pages/Error/Error';

const EndCategoriesSlider = () => {
  const { endCategory } = useSelector((state) => state.category);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="endCategoriesSlider py-4">
      <h3 className="">Trending Categories</h3>
      <Carousel responsive={responsive}>
        {endCategory.map((item) => (
          <EndItem key={item.id} item={item} className="endctg-pd" />
        ))}
      </Carousel>
    </div>
  );
};

export default EndCategoriesSlider;
