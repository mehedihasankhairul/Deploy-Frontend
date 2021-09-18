import { store } from '../Store';

export const getMidCategories = (topCatId) => {
  const midCategories = store.getState().category.midCategory;
  return midCategories.filter((item) => item.tcatid === topCatId);
};

export const getEndCatId = (slug) => {
  const { endCategory } = store.getState().category;
  const name = slug.replaceAll('-', ' ');
  const cat = endCategory.find((item) => item.name.toLowerCase() === name);
  return cat.id;
};
