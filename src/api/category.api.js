import axios from 'axios';
import { setUser } from '../Store/User/user.action';

const base = `https://api.deploy.com.bd/api/`;

export const getTopCategories = async () => {
  try {
    const topCat = await axios.get(base + `topcategroy/`);
    return topCat;
  } catch (e) {
    console.log(e);
    return 'something went wrong..';
  }
};

export const getMidCategories = async () => {
  try {
    const MidCat = await axios.get(base + `midcategory/`);
    return MidCat;
  } catch (e) {
    console.log(e);
    return 'something went wrong..';
  }
};

export const getEndCategories = async () => {
  try {
    const endCat = await axios.get(base + `endcategory/`);
    return endCat;
  } catch (e) {
    console.log(e);
    return 'something went wrong..';
  }
};

export const getAllProducts = async () => {
  try {
    const res = await axios.get(base + 'product');
    return res.data.results;
  } catch (e) {
    console.log(e);
    return 'something went wrong..';
  }
};

export const searchProduct = async (query) => {
  console.log('searching product with ', query);
  const res = await axios.get(`${base}search/?search=${query}`);
  console.log(res);
  return res;
};

export const productByEndCat = async (id) => {
  try {
    const res = await axios.get(`${base}category/${id}`);
    return res.data;
  } catch (e) {
    console.log(e);
    return 'something went wrong..';
  }
};

export const submitOrderData = async (orderData) => {
  console.log('submitting order..');
  try {
    const res = await axios.post(`${base}order/`, orderData);
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const loginUser = async (data) => {
  try {
    const res = await axios.post(`https://api.deploy.com.bd/api/token/`, {
      username: data.userName,
      password: data.password,
    });
    if (res) {
      const user = await axios.get(`${base}user/${data.userName}`);
      console.log(user.data[0]);
      return user.data[0];
    }
    // return 'ok';
  } catch (e) {
    console.log(e);
    return 'invalid pass or email';
  }
};

export const registerUser = async (data) => {
  console.log(data);
  try {
    const res = await axios.post(`${base}signup`, {
      username: data.userName,
      password: data.password,
      password2: data.password2,
      email: data.email,
      first_name: data.firsName,
      last_name: data.lastName,
    });
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
    return 'something went wrong';
  }
};
