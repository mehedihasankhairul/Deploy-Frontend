import axios from 'axios';
import { store } from '../Store';

const base = `https://api.deploy.com.bd/api/`;

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
  console.log(orderData);
  try {
    const res = await axios.post(`${base}order/`, orderData);
    return res;
  } catch (e) {
    return e;
  }
};

export const loginUser = async (data) => {
  const res = await axios.post(`https://api.deploy.com.bd/api/token/`, {
    username: data.username,
    password: data.password,
  });
  if (res) {
    const user = await axios.get(`${base}user/${data.username}/`);
    return { ...user.data[0], ...res.data };
  }
};

export const registerUser = async (data) => {
  try {
    await axios.post(`${base}signup/`, { ...data });
    const user = await loginUser({
      username: data.email,
      password: data.password,
    });
    return user;
  } catch (e) {
    return 'Username and email must be unique';
  }
};

export const getOrder = async () => {
  const { user } = store.getState();
  const order = await axios.get(`${base}userorder/${user.id}`);
  console.log(order);
  return order;
};

export const updateProfile = async (data) => {
  const { user } = store.getState();
  console.log('updating profile..', user);
  // try {
  //   const update = await axios.put(
  //     `${base}update_profile/${user.id}/`,
  //     {
  //       username: 'ishtiak',
  //       first_name: 'Ishtiak',
  //       last_name: 'Ahmed',
  //       email: 'ishtiak.aahmed@gmail.com',
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${user.access}`,
  //       },
  //     }
  //   );
  //   return update;
  // } catch (err) {
  //   // throw new Error(err);
  //   console.log(err);
  // }
};

export const refreshToken = async (data) => {};
