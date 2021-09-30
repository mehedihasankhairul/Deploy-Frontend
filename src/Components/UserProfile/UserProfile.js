import React from 'react';
import SecondaryLayout from '../Layout/SecondaryLayout';
import Footer from '../../Components/Shared/Footer/Footer';

const UserProfile = () => {
    return (
        <SecondaryLayout>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Welcome</h1>
                    </div>
                    <div className="col-md-8">
                        <h2>User Details</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi perferendis adipisci amet voluptatibus? Explicabo.</p>
                    </div>
                </div>
            </div>

        <Footer />
        </SecondaryLayout>
    );
};

export default UserProfile;