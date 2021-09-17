export const getPercentage = (current, old) => {
  const value = (old - current) / old;
  return (value * 100).toFixed(0);
};
