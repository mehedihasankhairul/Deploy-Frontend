import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start  text-white footer-bg">
        <section>
          <h4 className="d-flex justify-content-center pt-5 px-5">
            SUBSCRIBE TO OUR NEWSLETTER
          </h4>
          <div className="d-flex justify-content-center footer-newsletter">
            <div className="col-md-6">
              <form>
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
                {/* <!-- Content --> */}
                <p>Our Corporate Office Address</p>
                <p>
                  N.I.C Residence Plot no.19 Block A, Behind hotel shams plaza,
                  Shugondha, Coxbazar
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto ">
                {/* <!-- Links --> */}
                <p>
                  <Link to="/" className="text-reset">
                    About us
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Terms & Conditions
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Privacy Policy
                  </Link>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <p>
                  <Link to="/" className="text-reset">
                    Refund Policy
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    FAQ
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Blog
                  </Link>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <p>Contact Information</p>
                <p>Technical & Merchant Support: support@deploy.com.bd</p>
                <p>Customer Support: info@deploy.com.bd</p>
                <p>Helpline: 01707 372 093 </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-4">
          Developed by
          <a target="_blank" rel="noreferrer"  href="https://github.com/Blessed-Programmers" className="text-reset fw-bold">
            {' '}
            Blessed Programmers
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
};

export default Footer;
