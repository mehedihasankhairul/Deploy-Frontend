import axios from 'axios';

const base = `https://frozen-caverns-97537.herokuapp.com/api/`;

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
