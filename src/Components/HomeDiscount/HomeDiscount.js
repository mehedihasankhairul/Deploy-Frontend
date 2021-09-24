import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getPercentage } from '../../Utils/calculation';
import { getProductSlug } from '../../Utils/getSlug';
import { setCartState } from '../../Store/Cart/cart.action';
import { useHistory } from 'react-router';
import { handleAddToCart } from '../../Utils/functions';

import { MdAddShoppingCart } from 'react-icons/md';

const HomeDiscount = () => {
  const allProducts = useSelector((state) => state.products);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const history = useHistory();

  const handleProduct = (product) => {
    const slug = getProductSlug(product);
    history.push('/' + slug);
  };

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    const res = handleAddToCart(item);
    dispatch(setCartState(res));
  };

  return (
    <div className="homeDisSlider">
      <h2 className="heading">Supper Offer</h2>
      <Carousel responsive={responsive}>
        {allProducts.map((prod) => (
          <div
            key={prod.id}
            // onClick={() => handleProduct(prod)}
            className="disProduct_item"
          >
            <img src={prod.product_featured_photo} alt="img" />
            <p>{prod.product_Name}</p>
            <p className="oldPrice">BDT {prod.product_old_price}</p>
            <p className="currentPrice">BDT {prod.product_current_price}</p>
            <div className="discount-percent">
              <span>
                {getPercentage(
                  prod.product_current_price,
                  prod.product_old_price
                )}
                %
              </span>
            </div>
            <button
              className="addCart addHover"
              onClick={() => handleAdd(prod)}
            >
              <MdAddShoppingCart size={75} color="green" />
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeDiscount;
