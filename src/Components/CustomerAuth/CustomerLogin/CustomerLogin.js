import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/deoloy-logo.jpeg';

const CustomerLogin = () => {
  // const [pasType, setPassType] = useState("password");

  // const [formData, updateFormData] = useState({
  //   email: "",
  //   pass: "",
  // });
  // const getData = (e) => {
  //   updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  // }

  // //redirect to path settings
  // let location = useLocation();
  // const history = useHistory();
  // let { from } = location.state || { from: { pathname: "/cart" } };

  // const handleSubmit = (e) => {
  //   fetch(`http://localhost:8080/api/v1/admin/authenticate`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       emailAddress: formData.email,
  //       password: formData.pass
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       sessionStorage.setItem("JwtToken", data.jwt);
  //     })
  //     // .then(() => {
  //     //     window.location.reload();
  //     // })
  //     .then(() => {
  //       // history.replace(from);
  //       window.location.reload();
  //     })
  //     .catch(error => console.log('error', error));
  //   e.preventDefault()
  // }

  return (
    <div>
      <div className="bg-secondary text-light d-flex aligin-items-center justify-content-center py-5">
        <h3 className="py-2">Customer Login</h3>
      </div>

      <div
        className="row d-flex justify-content-center"
        style={{ padding: '1.5em' }}
      >
        <div className="col-md-4 my-5">
          <div className="logo d-flex justify-content-center">
            <img className="w-50" src={logo} alt="logo" />
          </div>
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn w-100 btn-success">
              Submit
            </button>
            <p className="mt-4">
              New to Deploy? <Link to="/registration">Sign up Now</Link>
            </p>
          </form>
          {/* <Form onSubmit={e => handleSubmit(e)} className="">
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                placeholder="Your Email"
                name="email"
                onBlur={e => getData(e)}
              />

            </Form.Group>
            <Form.Group size="lg" controlId="password" className="position-relative">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={pasType}
                placeholder="Password"
                name="pass"
                onBlur={e => getData(e)}
              />

              <VisibilityOffIcon
                className={`pass-visibleOff-icon ${pasType === "text" ? "d-none" : ""}`}
                onClick={() => (setPassType("text"))} />
              <VisibilityIcon
                className={`pass-visibleOff-icon ${pasType === "password" ? "d-none" : ""}`}
                onClick={() => (setPassType("password"))} />
            </Form.Group>
            <Button block size="lg" type="submit">
              Login
            </Button>
          </Form> */}
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
