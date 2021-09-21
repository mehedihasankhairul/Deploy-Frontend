import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPercentage } from '../../Utils/calculation';
import MainLayout from '../../Components/Layout/MainLayout';
import Footer from '../../Components/Shared/Footer/Footer';
import { useParams } from 'react-router';
import { setSearchResult } from '../../Store/Search/search.action';

export default function Search() {
  const searchQuery = useParams().searchquery;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchResult(searchQuery));
  }, [searchQuery]);

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
          <div className="product_list">
            {results.map((results) => (
              <div key={results.id} className="product_item">
                <img src={results.product_featured_photo} alt="img" />
                <p>{results.product_Name}</p>
                <p className="oldPrice">BDT {results.product_old_price}</p>
                <p className="currentPrice">
                  BDT {results.product_current_price}
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
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </MainLayout>
  );
}
