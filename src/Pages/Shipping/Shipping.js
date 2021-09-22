import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SecondaryLayout from '../../Components/Layout/SecondaryLayout';
import cod from '../../assets/Images/cod.png';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { submitOrderData } from '../../api/category.api';
import { getCartTotal } from '../../Utils/functions';
// import toast, { Toaster } from 'react-hot-toast';
import { setCartState } from '../../Store/Cart/cart.action';

const Shipping = () => {
  const [currentDistricts, setDistrict] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [address, setAddress] = useState({ division: '' });
  const [formFilled, setFromFilled] = useState(false);

  // const notify = () => toast('Successfully Placed the Order');

  const cart = useSelector((state) => state.cart);

  const history = useHistory();
  useEffect(() => {
    if (cart.length < 1) {
      history.push('/cart');
    }
    axios
      .get('https://bdapis.herokuapp.com/api/v1.1/divisions')
      .then((data) => setDivisions(data.data.data))
      .then(setAddress({ division: 'Barishal' }));
  }, []);

  const loadDistricts = async () => {
    const res = await axios(
      `https://bdapis.herokuapp.com/api/v1.1/division/${address.division.toLowerCase() || 'barishal'
      }`
    );
    setDistrict(res.data.data);
  };

  // const dispatch = useDispatch()


  const handleForm = (e) => {
    const newState = { ...address };
    newState[e.target.name] = e.target.value;
    setAddress(newState);
  };

  //   Check form state
  useEffect(() => {
    const keys = Object.keys(address);
    if (keys.length === 7) {
      setFromFilled(true);
    }
  }, [address]);

  useEffect(() => {
    loadDistricts();
  }, [address.division]);

  useEffect(() => {
    setAddress((a) => ({ ...a, district: currentDistricts[0]?.district }));
  }, [currentDistricts]);

  const user = useSelector((state) => state.user);

  const submitOrder = async () => {
    // const orderCommonId = (Math.random() * 100000).toFixed(0);
    cart.forEach((item) => {

      const orderData = {
        order_common_id: 458,
        order_user: user.id,
        order_qty: 2,
        order_product: item.id,
        delivery_adress: `${address.fullAddress}, ${address.district}, ${address.division}`,
        customer_name: user.first_name,
        customer_email: user.email,
        txnid: '',
        paid_amount: '',
        card_number: '',
        card_cvv: '',
        card_month: '',
        card_year: '',
        bank_transation_info: '',
        payment_method: 'COD',
        payment_status: false,
        shipping_status: false,
        order_status: 'processing',
      };

      const res = submitOrderData(orderData);
      if (res) {
        window.alert("Successfully submitted the Order")

        // dispatch(setCartState({}))


      }
    });



  };

  return (
    <SecondaryLayout>
      <div className="shipping-body">
        <div className="container checkout">
          <div className="row pt-3">
            <div className="col-md-8 mb-4 address">
              <div className="card mb-4 shipping-card p-4">
                <div className="shipping-card-header py-3">
                  <h5 className="mb-0">Shipping Details<span style={{ color: 'gray', fontSize: '14px' }}>
                    (Please Fill Out Your Information)</span></h5>
                </div>
                <div className="card-body">
                  {/* <!-- Text input --> */}
                  <div className="form-outline mb-4">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      id="form6Example4"
                      className="form-control"
                      name="name"
                      onChange={handleForm}
                    />
                  </div>

                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <label className="form-label">Phone No</label>
                        <input
                          type="tel"
                          onChange={handleForm}
                          name="phone"
                          id="form6Example1"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-outline">
                        <label className="form-label">
                          Alternative Phone No
                        </label>
                        <input
                          type="text"
                          name="phoneAlt"
                          id="form6Example2"
                          onChange={handleForm}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Country */}
                  <div className="row">
                    <div className="col mb-4">
                      <span>Division :</span>
                      <select
                        name="division"
                        defaultValue={divisions[2]}
                        onChange={handleForm}
                        data-validation-type="select-menu"
                        className="custom-select"
                        // {...register('division', { required: true })}
                        id="js--country"
                      >
                        {divisions.map((div) => (
                          <option key={div._id} value={div.division}>
                            {div.division}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col mb-4">
                      <span>Districts :</span>
                      <select
                        name="district"
                        defaultValue={currentDistricts[0]}
                        onChange={handleForm}
                        data-validation-type="select-menu"
                        className="custom-select"
                        // {...register('district', { required: true })}
                        id="js--country"
                      >
                        {currentDistricts.map((dis) => (
                          <option key={dis._id} value={dis.district}>
                            {dis.district}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      id="form6Example5"
                      className="form-control"
                      name="email"
                      onChange={handleForm}
                    />
                  </div>

                  {/* <!-- Text input --> */}
                  <div className="form-outline mb-4">
                    <label className="form-label">Address</label>
                    <textarea
                      className="form-control"
                      id="form6Example7"
                      rows="4"
                      name="fullAddress"
                      onChange={handleForm}
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* cash on delivery */}

              <div className="card shipping-card p-4">
                <div className="shipping-card-header py-3">
                  <h5 className="mb-0">
                    Payment Methods{' '}
                    <span style={{ color: 'red', fontSize: '12px' }}>
                      (Only Cash on delivery available!)
                    </span>{' '}
                  </h5>
                </div>
                <div className="card-body">
                  <div className="payment-item p-2">
                    <input
                      type="radio"
                      className=""
                      name="ptype"
                      id="cod"
                      value="Cash on Delivery"
                    ></input>
                    <label className="form-check-label focus ml-2">
                      <img src={cod} width="40px" alt="cod" />
                      <span className="ml-3">Cash on Delivery</span>
                    </label>
                  </div>

                  {/* <div className="confirm-order mt-3">
                    <input
                      className="btn btn-success btn-lg btn-block"
                      type="submit"
                      onClick={submitOrder}
                      disabled={!formFilled}
                    />
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="shipping-card p-4 mb-4">
                <div className="shipping-card-header py-3">
                  <h5 className="mb-0">Checkout Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>BDT {getCartTotal()}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>BDT {50}</span>
                    </li>
                    <li className="list-group-item  d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong> BDT {getCartTotal() + 50} </strong>
                      </span>
                    </li>
                    <li className="confirm-order mt-3">
                      <button
                        className="btn btn-success btn-lg btn-block"
                        type="submit"
                        onClick={submitOrder}
                        disabled={!formFilled}
                      >
                        Confirm Order
                      </button>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </SecondaryLayout>
  );
};

export default Shipping;
