import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CategoryItem from '../../Components/Home/CategoryItem';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Error from '../Error/Error';

export default function Category() {
  const { topCategory, midCategory } = useSelector((state) => state.category);

  const { category } = useParams();
  const selectedCat = topCategory.find((cat) => cat.slug === category);
  const subCategories = selectedCat
    ? midCategory.filter((sCat) => sCat.tCatId === selectedCat.tCatId)
    : null;
  return (
    <>
      <Navbar />
      <main>
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
      </main>
    </>
  );
}
