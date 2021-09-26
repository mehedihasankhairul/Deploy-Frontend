import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPercentage } from '../../Utils/calculation';
import MainLayout from '../../Components/Layout/MainLayout';
import Footer from '../../Components/Shared/Footer/Footer';
import { useParams } from 'react-router';
import { setSearchResult } from '../../Store/Search/search.action';
import { MdAddShoppingCart } from 'react-icons/md';
import { handleAddToCart } from '../../Utils/functions';
import { setCartState } from '../../Store/Cart/cart.action';

export default function Search() {
  const searchQuery = useParams().searchquery;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchResult(searchQuery));
  }, [searchQuery]);

  const handleAdd = (item) => {
    const res = handleAddToCart(item);
    dispatch(setCartState(res));
  };

  const { query, results } = useSelector((state) => state.search);
  return (
    <MainLayout>
      <main>
        <div>
          <h2
            style={{ padding: '1.5em', color: '#1c7ed6', textAlign: 'center' }}
          >
            {results.length} Results found with{' '}
            <span className="text-success">{query}</span>{' '}
          </h2>
          <div className="product_list_area">
            {results.map((result) => (
              <div key={result.id} className="product_item">
                <img src={result.product_featured_photo} alt="img" />
                <p>{result.product_Name}</p>
                <p className="oldPrice">BDT {result.product_old_price}</p>
                <p className="currentPrice">
                  BDT {result.product_current_price}
                </p>
                <div className="discount-percent">
                  <span>
                    {getPercentage(
                      results.product_current_price,
                      results.product_old_price
                    )}
                    %
                  </span>
                </div>
                <button
                  className="btn btn-success"
                  onClick={() => handleAdd(results)}
                >
                  <MdAddShoppingCart size={25} color="white" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </MainLayout>
  );
}
