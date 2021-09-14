import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const baseUrl = 'https://deploy.com.bd/assets/uploads/';


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
    

    return (
        <div className="homeDisSlider">
            <h1 className="heading">Supper Offer</h1>
            <Carousel responsive={responsive}>
                {
                    allProducts.map((prod) => (
                        <div key={prod.id} className="disProduct_item">
                            <img src={baseUrl + prod.image} alt="img" />
                            <p>{prod.productName}</p>
                            <p className="oldPrice">BDT {prod.oldPrice}</p>
                            <p className="currentPrice">BDT {prod.currentPrice}</p>
                            <div className="discount-percent">
                            <span>5%</span></div>
                        </div>
                    ))
                }
               </Carousel>
        </div>
    );
};

export default HomeDiscount;