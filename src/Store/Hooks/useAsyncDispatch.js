import { useState } from 'react';
import { useDispatch } from 'react-redux';

// import { thunkDispatch } from './redux-hook';

export const useAsyncThunkDispatch = (func) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const asyncDispatch = (...args) =>
    new Promise((resolve, reject) => {
      setData(null);
      setError(null);
      setIsLoading(true);
      setIsError(false);
      dispatch(func(...args))
        .then((res) => {
          if (res?.data) {
            setData(res.data);
            setIsLoading(false);
          } else {
            throw res;
          }
        })
        .catch((e) => {
          setIsError(true);
          setError(e);
          setIsLoading(false);
        });
      resolve('done');
    });

  return { asyncDispatch, data, isLoading, isError, error };
};

// export default useAsyncThunkDispatch;
