const intialState = {
  query: '',
  results: [],
};

export const searchReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULT':
      console.log(action.payload);
      return { ...action.payload };
    default:
      return state;
  }
};
