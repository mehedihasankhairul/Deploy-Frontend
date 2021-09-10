import React from 'react';
import EndCategoriesSlider from '../../Components/CategoriesSlider/EndCategoriesSlider/EndCategoriesSlider';
import PartnerSlider from '../../Components/Partner/PartnerSlider';
import HeroSlider from '../../Components/HeroSlider/HeroSlider.js';
import MidCategoriesSlider from '../../Components/CategoriesSlider/MidCategoriesSlider/MidCategoriesSlider';
import TopCategoriesSlider from '../../Components/CategoriesSlider/TopCategoriesSlider/TopCategoriesSlider';

export default function Home() {
  return (
    <section className="content">
      <HeroSlider />
      <EndCategoriesSlider />
      <MidCategoriesSlider />
      <TopCategoriesSlider />
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
