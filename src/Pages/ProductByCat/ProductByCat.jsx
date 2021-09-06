import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Navigator from '../../Components/Shared/Navigator/Navigator';

const baseUrl = 'https://deploy.com.bd/assets/uploads/' 

export default function ProductByCat() {
  const { end_category } = useParams();
  const { endCategory } = useSelector((state) => state.category);
  const catName = end_category.replaceAll('-', ' ');
  const selectedCategory = endCategory.find(
    (cat) => cat.name.toLowerCase() === catName
  );
  const allProducts = useSelector((state) => state.products);
  console.log(allProducts, end_category);
  const filterProducts = allProducts.filter(
    (product) => product.ecatId === selectedCategory.id
  );
  console.log('filterProducts', filterProducts);
  return (
    <div>
      <Navigator />
      <h2>
        Products with category {selectedCategory.subCat} -{' '}
        {filterProducts.length}
      </h2>
      <div className="product_list">
      {filterProducts.map((prod) => (
        <div key={prod.id} className='product_item'>
          <img src={baseUrl + prod.image} alt="" />
          <p>
            {prod.productName}
            </p>
            <p>BDT {prod.currentPrice}</p>
          </div>
      ))}
      </div>
    </div>
  );
}
