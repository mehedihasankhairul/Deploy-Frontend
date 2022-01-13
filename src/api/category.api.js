import axios from 'axios';
import { setUser } from '../Store/User/user.action';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const base = `https://frozen-caverns-97537.herokuapp.com/api/`;

export const getTopCategories = async () => {
  try {
    const topCat = await axios.get(base + `topcategroy/`);
    return topCat;
  } catch (e) {
    return 'something went wrong..';
  }
};

export const getMidCategories = async () => {
  try {
    const MidCat = await axios.get(base + `midcategory/`);
    return MidCat;
  } catch (e) {
    return 'something went wrong..';
  }
};

export const getEndCategories = async () => {
  try {
    const endCat = await axios.get(base + `endcategory/`);
    return endCat;
  } catch (e) {
    return 'something went wrong..';
  }
};

export const getAllProducts = async () => {
  try {
    const res = await axios.get(base + 'product');
    return res.data.results;
  } catch (e) {
    return 'something went wrong..';
  }
};

export const searchProduct = async (query) => {
  const res = await axios.get(`${base}search/?search=${query}`);
  return res;
};

export const productByEndCat = async (id) => {
  try {
    const res = await axios.get(`${base}category/${id}`);
    return res.data;
  } catch (e) {
    return 'something went wrong..';
  }
};

export const submitOrderData = async (orderData) => {
  try {
    const res = await axios.post(`${base}order/`, orderData);
    return res;
  } catch (e) {
    return e;
  }
};
//  Old working login
// export const loginUser = async (data) => {
//   try {
//     const res = await axios.post(`https://api.deploy.com.bd/api/token/`, {
//       username: data.username,
//       password: data.password,
//     });
//     if (res) {
//       const user = await axios.get(`${base}user/${data.username}/`);
//       return { ...user.data[0], ...res.data };
//     }
//     // return 'ok';
//   } catch (e) {
//     // return 'invalid pass or email';
//   }
// };
export const loginUser = async (data) => {
  const res = await axios.post(`https://api.deploy.com.bd/api/token/`, {
    username: data.username,
    password: data.password,
  });
  if (res) {
    const user = await axios.get(`${base}user/${data.username}/`);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Logged In Successfully',
      showConfirmButton: false,
      timer: 1500
    })
    return { ...user.data[0], ...res.data };
  }

};

export const registerUser = async (data) => {
  try {
    const res = await axios.post(`${base}signup/`, { ...data });
    const user = await loginUser({
      username: data.email,
      password: data.password,
    });
    return user;
  } catch (e) {
    return 'Username and email must be unique';
  }
};
