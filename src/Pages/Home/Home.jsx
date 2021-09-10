import React from 'react';
import { useSelector } from 'react-redux';
import EndCategoriesSlider from '../../Components/CategoriesSlider/EndCategoriesSlider/EndCategoriesSlider';
import CategoryItem from '../../Components/Home/CategoryItem';
import PartnerSlider from '../../Components/Partner/PartnerSlider';

export default function Home() {
  const { midCategory, topCategory } = useSelector((state) => state.category);

  return (
    <section className="content">
      <h3>Slider</h3>
      <h3>Banner</h3>
      <EndCategoriesSlider />
      <h3>Popular Categories</h3>
      <div className="container">
        {midCategory.slice(0, 6).map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
      <h3>Main Categories</h3>
      <div className="container">
        {topCategory.slice(0, 6).map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
      <h3>Banner</h3>
      <h3>Product of Top Categories</h3>
      <br />
      <br />
      <br />
      <PartnerSlider />
      {/* <Partner /> */}
    </section>
  );
}
