import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import ReactImageZoom from 'react-image-zoom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router';
import Navigator from '../../Components/Shared/Navigator/Navigator';
import Navbar from '../../Components/Shared/Navbar/Navbar';

export default function Product() {
  const allProducts = useSelector((state) => state.products);
  const { category, subCategory, productid } = useParams();
  // const item = allProducts.find(pd => pd.id === productid)
  const item = allProducts[0];
  const imageUrl = 'https://deploy.com.bd/assets/uploads/' + item.image;
  // const zoomProps = { width: 400, height: 250, zoomWidth: 500, img: { imageUrl } }

  console.log(category, subCategory);
  console.log(allProducts);
  console.log(`This is item ${item} and ${allProducts}`);
  return (
    <main className="pd-bg">
      <Navbar />
      <Navigator />
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6 pd-img">
            {/* <ReactImageZoom {...zoomProps} /> */}
            <img src={imageUrl} alt="imagefgsva" />
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
            <form>
              <label>Quantity:</label>
              <input
                type="number"
                id="input1"
                step="1"
                min="1"
                max="999"
                size="4"
                pattern="[0-9]*"
              />
              <button className="pd-btn addToCart">Add to Cart</button>
            </form>
          </div>
        </div>
      </div>
      {/* finish product image with content */}
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
    </main>
  );
}
