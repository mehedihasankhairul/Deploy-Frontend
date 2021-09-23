const intialState = {
  query: '',
  results: [],
};

export const searchReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULT':
      return { ...action.payload };
    default:
      return state;
  }
};
