import React from 'react';
import { useSelector } from 'react-redux';
import { getPercentage } from '../../Utils/calculation';
import MainLayout from '../../Components/Layout/MainLayout';
import Footer from '../../Components/Shared/Footer/Footer';
import { useLocation } from 'react-router';

export default function Search() {
  const results = useSelector((state) => state.search);
  const query  = useLocation()
  console.log(query)
  console.log(results, 'results');
  return (
    <MainLayout>
      <div className="">
      <h2>{query.search} at Deploy </h2>
      <div className="product_list">
      {results.map((results) => (
          <div key={results.id} className="product_item">
            <img src={results.product_featured_photo} alt="img" />
            <p>{results.product_Name}</p>
            <p className="oldPrice">BDT {results.product_old_price}</p>
            <p className="currentPrice">BDT {results.product_current_price}</p>
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
        <Footer />
        
      </div>

    </MainLayout>
  );
}
