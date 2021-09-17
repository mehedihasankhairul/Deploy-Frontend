import React from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CategoryItem from '../../Components/Home/CategoryItem';
// import { nameToSlug } from '../../Utils/getSlug';
// import NewNav from '../../Components/Shared/Navbar/NewNav';
import Footer from '../../Components/Shared/Footer/Footer';
import Error from '../Error/Error';
import MainLayout from '../../Components/Layout/MainLayout';
import SideAddToCart from '../../Components/SideAddToCart/SideAddToCart';
import MediaQuery from 'react-responsive';

export default function Category() {
  const { topCategory, midCategory } = useSelector((state) => state.category);

  // const { category } = useParams();
  // const selectedCat = topCategory.find(
  //   (cat) => nameToSlug(cat.name) === category
  // );
  const selectedCat = topCategory[0];
  const subCategories = selectedCat
    ? midCategory.filter((sCat) => sCat.tCatId === selectedCat.tCatId)
    : null;
  return (
    <MainLayout>
      <main style={{ paddingTop: '1.5em' }}>
        <MediaQuery minWidth="768px">
          <SideAddToCart />
        </MediaQuery>
        <span className="navigator">
          <Link to="/">Home</Link>
          {'> '} <span>{selectedCat.name}</span>
        </span>
        {selectedCat ? (
          <div className="container">
            {subCategories.map((item) => (
              <CategoryItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <Error />
        )}
        <Footer />
      </main>
    </MainLayout>
  );
}
