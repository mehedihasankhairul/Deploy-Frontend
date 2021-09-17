import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import EndItem from '../../Components/CategoriesSlider/EndCategoriesSlider/EndItem';
import MediaQuery from 'react-responsive';
import Footer from '../../Components/Shared/Footer/Footer';
import Error from '../Error/Error';
import MainLayout from '../../Components/Layout/MainLayout';
import SideAddToCart from '../../Components/SideAddToCart/SideAddToCart';

export default function EndCategories() {
  const { midCategory, endCategory } = useSelector((state) => state.category);

  const { category, mid_category } = useParams();
  const catName = mid_category.replaceAll('-', ' ');
  const selectedCat = midCategory.find(
    (cat) => cat.name.toLowerCase() === catName
  );
  const filteredCategories = selectedCat
    ? endCategory.filter((endCat) => endCat.mcatId === selectedCat.id)
    : null;
    
  return (
    <MainLayout>
      <section style={{ paddingTop: '1.5em' }}>
        <MediaQuery minWidth="768px">
          <SideAddToCart />
        </MediaQuery>
        <span className="navigator">
          <Link to="/">Home</Link>
          {'> '}{' '}
          <Link to={'/' + category}>{category.replaceAll('-', ' ')}</Link>
          {'> '} <span>{mid_category}</span>
        </span>
        {selectedCat ? (
          <div className="container">
            {filteredCategories.map((item) => (
              <EndItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <Error />
        )}
        <Footer />
      </section>
    </MainLayout>
  );
}
