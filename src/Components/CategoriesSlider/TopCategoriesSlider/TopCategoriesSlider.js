import React from 'react';
import { useSelector } from 'react-redux';
import CategoryItem from '../../../Components/Home/CategoryItem';
// import Error from '../../../Pages/Error/Error';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TopCategoriesSlider = () => {
  const { topCategory } = useSelector((state) => state.category);

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
    <div className="topCategoriesSlider py-4">
      <h3 className="heading pb-4">Top Categories</h3>
      <Carousel responsive={responsive}>
        {topCategory.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default TopCategoriesSlider;
