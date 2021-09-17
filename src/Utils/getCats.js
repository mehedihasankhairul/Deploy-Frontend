import { store } from '../Store';

export const getMidCategories = (topCatId) => {
  const midCategories = store.getState().category.midCategory;
  return midCategories.filter((item) => item.tcatid === topCatId);
};
