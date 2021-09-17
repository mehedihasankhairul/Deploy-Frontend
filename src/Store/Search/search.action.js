export const setSearchResult = (results) => async (dispatch) => {
  dispatch({
    type: 'SET_SEARCH_RESULT',
    payload: results,
  });
};
