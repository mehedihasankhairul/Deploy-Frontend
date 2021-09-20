import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router';
import Navigator from '../../Components/Shared/Navigator/Navigator';
import CartButton from '../../Components/CartButton';
import Footer from '../../Components/Shared/Footer/Footer';
import SecondaryLayout from '../../Components/Layout/SecondaryLayout';

export default function Product() {
  const allProducts = useSelector((state) => state.products);
  const { productid } = useParams();
  // const item = allProducts.find(pd => pd.id === productid)
  const item = allProducts[0];
  const [quantity, setQuantity] = useState(1);
  const updateQuantity = (type) => {
    if (type === 'increase') {
      setQuantity((q) => q + 1);
    } else if (quantity > 0) {
      setQuantity((q) => q - 1);
    }
  };
  // const imageUrl = 'https://deploy.com.bd/assets/uploads/' + item.image;

  return (
    <SecondaryLayout>
      <section>
        <div className="container pt-5">
          <Navigator />
        </div>
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-6 pd-img">
              <img src="" alt="imagefgsva" />
            </div>
            <div className="col-md-6 pd-content">
              <h2>
                {item.productName} {productid}{' '}
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos quos possimus aliquam ipsam vitae! Temporibus!
              </p>
              <h5>Product Price</h5>
              <h2>BDT 250</h2>
              <span
                style={{
                  display: 'flex',
                  gap: '1em',
                  alignItems: 'center',
                  padding: '1em 0',
                }}
              >
                Quantity:
                <CartButton
                  quantity={quantity}
                  updateQuantity={updateQuantity}
                />
              </span>
              <button className="pd-btn addToCart">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="container">
          <Tabs>
            <TabList>
              <Tab>Product Description</Tab>
              <Tab>Review</Tab>
            </TabList>

            <TabPanel>
              <div>
                <p>No description found</p>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <h4>Reviews (0)</h4>
                <p>No Review is Found</p>
                <h4>Give a Review</h4>
                <p>You must have to login to give a review</p>
                <Link to="/login">Login</Link>
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <Footer />
      </section>
    </SecondaryLayout>
  );
}
