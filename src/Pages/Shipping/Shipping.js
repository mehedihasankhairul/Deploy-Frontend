import React, { useState, useEffect } from 'react';
import Footer from '../../Components/Shared/Footer/Footer';
import axios from 'axios';
import SecondaryLayout from '../../Components/Layout/SecondaryLayout';

const Shipping = () => {
  const [districts, setDistrict] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [address, setAddress] = useState({ division: 'Dhaka' });
  useEffect(() => {
    // axios
    //   .get('https://bdapis.herokuapp.com/api/v1.1/districts')
    //   .then((data) => setDistrict(data.data.data));
    axios
      .get('https://bdapis.herokuapp.com/api/v1.1/divisions')
      .then((data) => setDivisions(data.data.data));
  }, []);

  useEffect(() => {
    axios(`https://bdapis.herokuapp.com/api/v1.1/division/barishal`).then(
      (data) => setDistrict(data.data.data)
    );
  }, [divisions]);


  const handleDivision = async (e) => {
    const division = e.target.value.toLowerCase();
    const districts = await axios(
      `https://bdapis.herokuapp.com/api/v1.1/division/${division}`
    ).then((data) => setDistrict(data.data.data));
    setAddress({ division });
  };

  const selectDistricts = (e) => {
    setAddress({ ...address, districts: e.target.value });
  };

  return (
    <SecondaryLayout>
      <div className="shipping-body">
        <div className="container">
          <div className="row pt-3">
            <div className="col-md-8 mb-4">
              <div className="card mb-4 shipping-card">
                <div className="shipping-card-header py-3">
                  <h5 className="mb-0">Billing details</h5>
                </div>
                <div className="card-body">
                  <form>
                    {/* <!-- Text input --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        id="form6Example4"
                        className="form-control"
                      />
                    </div>

                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label">Phone No</label>
                          <input
                            type="number"
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
                            type="number"
                            id="form6Example2"
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
                          defaultValue={address.division}
                          onChange={handleDivision}
                          data-validation-type="select-menu"
                          className="custom-select"
                          required=""
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
                          name="division"
                          value={divisions[0]}
                          onChange={selectDistricts}
                          data-validation-type="select-menu"
                          className="custom-select"
                          required=""
                          id="js--country"
                        >
                          {districts.map((dis) => (
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
                      />
                    </div>

                    {/* <!-- Text input --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label">Address</label>
                      <textarea
                        className="form-control"
                        id="form6Example7"
                        rows="4"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="shipping-card mb-4">
                <div className="shipping-card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>$53.98</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>$0.02</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>$54.00</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-success btn-lg btn-block"
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </SecondaryLayout>
  );
};

export default Shipping;
