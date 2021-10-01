import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SecondaryLayout from '../Layout/SecondaryLayout';
import Footer from '../../Components/Shared/Footer/Footer';
import { updateProfile, getOrder } from '../../api/category.api';

const UserProfile = () => {
  const user = useSelector((state) => state.user);

  const handleUpdate = async () => {
    const res = await updateProfile({ id: 3 });
    console.log(res);
  };

  useEffect(() => {
    const myOrder = getOrder();
    console.log('my order', myOrder);
  }, []);

  return (
    <SecondaryLayout>
      <div className="userBG py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card p-2">
                <p>Hello, {user.first_name}</p>
              </div>
            </div>

            <div className="col-md-9">
              <div className="card p-2">
                <div className="user-info_intro">
                  <h2>Personal Information</h2>
                </div>
                <div className="user-info_details">
                  <div className="form-outline mb-4">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      id="form6Example4"
                      className="form-control"
                      defaultValue={user.first_name}
                      name="name"
                    />
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-6 com-sm-12">
                      <div className="form-outline">
                        <label className="form-label">Phone No</label>
                        <input
                          type="tel"
                          name="phone"
                          id="form6Example1"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="form-outline">
                        <label className="form-label">
                          Alternative Phone No
                        </label>
                        <input
                          type="text"
                          name="phoneAlt"
                          id="form6Example2"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      id="form6Example5"
                      className="form-control"
                      defaultValue={user.email}
                      name="email"
                    />
                  </div>
                  <button onClick={handleUpdate}>Update Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </SecondaryLayout>
  );
};

export default UserProfile;
