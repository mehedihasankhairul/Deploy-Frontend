import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CategoryItem from '../../Components/Home/CategoryItem';
import Navigator from '../../Components/Shared/Navigator/Navigator';
import Error from '../Error/Error';

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
  console.log(filteredCategories);
  return (
    <section>
      {/* <Navigator /> */}
      <span className="navigator">
        <Link to='/'>Home</Link>
        {'> '} <Link to={'/'+category}>{category.replaceAll('-', ' ')}</Link>
        {'> '} <span>{mid_category}</span>
      </span>
      {selectedCat ? (
          <div className="container">
            {filteredCategories.map((item) => (
              <CategoryItem key={item.id} item={item} />
            ))}
          </div>
      ) : (
        <Error />
      )}
    </section>
  );
}
