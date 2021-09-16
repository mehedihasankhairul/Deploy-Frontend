import { store } from '../Store';

const textToSlug = (str) => str.replaceAll(' ', '-').toLowerCase();

export const getEndSlug = (item) => {
  const state = store.getState();
  const { topCategory, midCategory } = state.category;
  const topCat = topCategory.find((cat) => cat.id === item.tcatid);
  const topSlug = topCat ? textToSlug(topCat.name) : 'helloWorld';
  const midCat = midCategory.find((cat) => cat.id === item.midcatid);
  const midSlug = midCat ? textToSlug(midCat.name) : 'helloWorld';
  const endSlug = textToSlug(item.name);
  const slug = `/${topSlug}/${midSlug}/${endSlug}`;
  return slug;
};
export const getMidSlug = (item) => {
  const state = store.getState();
  const { topCategory } = state.category;
  const topCat = topCategory.find((cat) => cat.id === item.tcatid);
  const topSlug = textToSlug(topCat.name);
  const midSlug = textToSlug(item.name);
  const slug = `/${topSlug}/${midSlug}`;
  return slug;
};

export const nameToSlug = (str) => {
  return str.replaceAll(' ', '-').toLowerCase();
};
