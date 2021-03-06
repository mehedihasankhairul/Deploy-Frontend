import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getPercentage } from '../../Utils/calculation';
import { getProductSlug } from '../../Utils/getSlug';
import { setCartState } from '../../Store/Cart/cart.action';
import { useHistory } from 'react-router';
import { handleAddToCart } from '../../Utils/functions';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
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
    if (res.status) {
      alert('Item added to cart');
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Item added Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }
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
            <img src={prod.image} alt="img" />
            <p>{prod.productName}</p>
            <p className="oldPrice">BDT {prod.oldPrice}</p>
            <p className="currentPrice">BDT {prod.currentPrice}</p>
            <div className="discount-percent">
              <span>
                {getPercentage(
                  prod.currentPrice,
                  prod.oldPrice,
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
