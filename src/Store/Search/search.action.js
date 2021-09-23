// export const setSearchResult = (results) => async (dispatch) => {
//   dispatch({
//     type: 'SET_SEARCH_RESULT',
//     payload: results,
//   });
// };

import { searchProduct } from '../../api/category.api';

export const setSearchResult = (query) => async (dispatch) => {
  try {
    const results = await searchProduct(query);
    if (results) {
      dispatch({
        type: 'SET_SEARCH_RESULT',
        payload: { query, results: results.data.results },
      });
    }
  } catch (e) {
    return 'something went wrong';
  }
};
