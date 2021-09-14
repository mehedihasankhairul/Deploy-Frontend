import React from 'react';
import EndCategoriesSlider from '../../Components/CategoriesSlider/EndCategoriesSlider/EndCategoriesSlider';
import PartnerSlider from '../../Components/Partner/PartnerSlider';
import HeroSlider from '../../Components/HeroSlider/HeroSlider.js';
import MidCategoriesSlider from '../../Components/CategoriesSlider/MidCategoriesSlider/MidCategoriesSlider';
import TopCategoriesSlider from '../../Components/CategoriesSlider/TopCategoriesSlider/TopCategoriesSlider';
import MainLayout from '../../Components/Layout/MainLayout';
import HomeDiscount from '../../Components/HomeDiscount/HomeDiscount';
import Footer from '../../Components/Shared/Footer/Footer';

export default function Home() {
  // const [open, setOpen] = useState(false);
  return (
    // <div className="main-area">
    //   <Navbar />
    //   <main className="main">
    //     <aside className="sidebar" onMouseLeave={() => setOpen(false)}>
    //       <NewSidebar open={open} setOpen={setOpen} />
    //     </aside>
    //     <div className="main-container">
    <MainLayout>
      <section className="content">
        <HeroSlider />
        <HomeDiscount />
        <EndCategoriesSlider />
        <MidCategoriesSlider />
        <TopCategoriesSlider />
        {/* <h3>Banner</h3> */}
        <HeroSlider />
        <h3>Product of Top Categories</h3>
        <br />
        <br />
        <br />
        <PartnerSlider />
        {/* <Partner /> */}
        <Footer />
      </section>
    </MainLayout>
    //     </div>

    //   </main>
    // </div>
  );
}
