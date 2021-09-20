import React, { useState, useEffect } from 'react';
import Footer from '../../Components/Shared/Footer/Footer';
import axios from 'axios';
import SecondaryLayout from '../../Components/Layout/SecondaryLayout';
import { useForm } from 'react-hook-form';
import cod from '../../assets/Images/cod.png';

const Shipping = () => {
  const [currentDistricts, setDistrict] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [address, setAddress] = useState({ division: 'Barishal' });
  const formFilled = false;
  useEffect(() => {
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
    selectDistricts(districts);
  };

  const selectDistricts = (e) => {
    const dis = e?.target.value || currentDistricts[0];
    setAddress({ ...address, district: dis });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <SecondaryLayout>
      <div className="shipping-body">
        <div className="container checkout">
          <div className="row pt-3">
            <div className="col-md-8 mb-4 address">
              {/* form start */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card mb-4 shipping-card">
                  <div className="shipping-card-header py-3">
                    <h5 className="mb-0">Billing details</h5>
                  </div>
                  <div className="card-body">
                    {/* <!-- Text input --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label">Name</label>
                      <input
                        {...register("name", { required: true })}
                        type="text"
                        id="form6Example4"
                        className="form-control"
                      />
                      <p>{errors.name && <span className="text-danger">This field is required</span>}</p>
                      {errors.nameError && <span>This field is required</span>}
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
                            {...register("phone", { required: true })}
                          />
                          <p>{errors.phone && <span className="text-danger">This field is required</span>}</p>
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
                            {...register("altPhone", { required: true })}
                          />
                          <p>{errors.altPhone && <span className="text-danger">This field is required</span>}</p>
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
                          onChange={handleDivision}
                          data-validation-type="select-menu"
                          className="custom-select"
                          {...register("division", { required: true })}
                          id="js--country"
                        >
                          {divisions.map((div) => (
                            <option key={div._id} value={div.division}>
                              {div.division}
                            </option>
                          ))}
                        </select>
                        <p>{errors.division && <span className="text-danger">This field is required</span>}</p>
                      </div>
                      <div className="col mb-4">
                        <span>Districts :</span>
                        <select
                          name="division"
                          value={divisions[0]}
                          onChange={selectDistricts}
                          data-validation-type="select-menu"
                          className="custom-select"
                          {...register("district", { required: true })}
                          id="js--country"
                        >
                          {currentDistricts.map((dis) => (
                            <option key={dis._id} value={dis.district}>
                              {dis.district}
                            </option>
                          ))}
                        </select>
                        <p>{errors.district && <span className="text-danger">This field is required</span>}</p>
                      </div>
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        id="form6Example5"
                        className="form-control"
                        {...register("email", { required: true })}
                      />
                      <p>{errors.email && <span className="text-danger">This field is required</span>}</p>
                    </div>

                    {/* <!-- Text input --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label">Address</label>
                      <textarea
                        className="form-control"
                        id="form6Example7"
                        rows="4"
                        {...register("address", { required: true })}
                      ></textarea>
                      <p>{errors.address && <span className="text-danger">This field is required</span>}</p>
                    </div>
                  </div>
                </div>

                {/* cash on delivery */}

                <div className="card shipping-card">
                  <div className="shipping-card-header py-3">
                    <h5 className="mb-0">
                      Payment Methods{' '}
                      <span style={{ color: 'red', fontSize: '12px' }}>
                        (Only Cash on delivery available!)
                      </span>{' '}
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="payment-item p-4">
                      <input
                        type="radio"
                        className=""
                        name="ptype"
                        id="cod"
                        value="Cash on Delivery"
                        {...register("cod", { required: true })}
                      />
                      <label className="form-check-label focus ml-3">
                        <img src={cod} width="40px" alt="cod" />
                        <span className="ml-3">Cash on Delivery</span>
                      </label>
                    </div>
                    <p>{errors.cod && <span className="text-danger">This field is required</span>}</p>


                    <div className="confirm-order mt-3">
                      <input className="btn btn-success btn-lg btn-block"
                        type="submit" />

                    </div>
                  </div>
                </div>

              </form>

              {/* cash on delivery finish */}
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
