import React, { useState } from 'react';
import './SideAddToCart.scss'

const SideAddToCart = () => {
    const [showCart, setShowCart] = useState(false);

    const addToCart = () => {
        setShowCart(true);
    }
    return (
        <>
            <div onClick={addToCart} className="midAddToCart">
                <button className="btn btn-success">
                    <i className="fa fa-shopping-cart px-2" aria-hidden="true">{' 3'}</i> <br />
                    <span className="badge badge-light">$10</span>
                </button>
            </div>

            {
                showCart &&
                <div className={`sideAddToCart ${showCart ? 'show' : ''}`}>
                    <div className="sideAddToCart__content">
                        <div className="d-flex topBar justify-content-between">
                            <div className="total-items">
                                <span>Total items : 3</span>
                            </div>
                            <div className="d-flex">
                                <i className="fa fa-times" aria-hidden="true" onClick={() => setShowCart(false)}></i>
                            </div>

                        </div>
                        <div className="d-flex align-items-center">
                            <img src="https://i.pinimg.com/236x/bf/55/56/bf5556f2a8278d67832d41e2c1922bc3.jpg" alt="" />
                            <div className="px-3">
                                <h5>Cat for sale </h5>
                                <p>$10</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src="https://i.pinimg.com/236x/bf/55/56/bf5556f2a8278d67832d41e2c1922bc3.jpg" alt="" />
                            <div className="px-3">
                                <h5>Cat for sale</h5>
                                <p>$10</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src="https://i.pinimg.com/236x/bf/55/56/bf5556f2a8278d67832d41e2c1922bc3.jpg" alt="" />
                            <div className="px-3">
                                <h5>Cat for sale</h5>
                                <p>$10</p>
                            </div>
                        </div>
                        <button className="btn btn-info">Process To Checkout</button>
                    </div>
                </div>}
        </>
    );
};

export default SideAddToCart;
