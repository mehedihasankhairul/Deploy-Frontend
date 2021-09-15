import React from 'react';
import EndCategoriesSlider from '../../Components/CategoriesSlider/EndCategoriesSlider/EndCategoriesSlider';
import PartnerSlider from '../../Components/Partner/PartnerSlider';
import HeroSlider from '../../Components/HeroSlider/HeroSlider.js';
import MediaQuery from 'react-responsive';
import MidCategoriesSlider from '../../Components/CategoriesSlider/MidCategoriesSlider/MidCategoriesSlider';
import TopCategoriesSlider from '../../Components/CategoriesSlider/TopCategoriesSlider/TopCategoriesSlider';
import MainLayout from '../../Components/Layout/MainLayout';
import HomeDiscount from '../../Components/HomeDiscount/HomeDiscount';
import Footer from '../../Components/Shared/Footer/Footer';
import SideAddToCart from '../../Components/SideAddToCart/SideAddToCart';

export default function Home() {
  return (
    <MainLayout>
      <section className="content">
        <MediaQuery minWidth="768px">
          <SideAddToCart />
        </MediaQuery>
        <HeroSlider />
        <HomeDiscount />
        <EndCategoriesSlider />
        <MidCategoriesSlider />
        <TopCategoriesSlider />
        <HeroSlider />
        <PartnerSlider />
        <Footer />
      </section>
    </MainLayout>
  );
}
