const intialState = [{ name: 'demo result' }, { name: 'demo result' }];

export const searchReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULT':
      return [...action.payload];
    default:
      return state;
  }
};
