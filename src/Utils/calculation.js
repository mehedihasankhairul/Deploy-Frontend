export const getPercentage = (current, old) => {
  const value = (old - current) / old;
  return (value * 100).toFixed(0);
};

export const orderItemsTotal = (item) => {
  return item.reduce((sum, pd) => sum + pd.price * +pd.quantity, 0);
};
