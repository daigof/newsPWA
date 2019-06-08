const initialState = {
  selectedCategory: '',
  newsTopHeadlines: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeCategory':
      return {
        ...state,
        category: action.category,
      };

    default:
      return state;
  }
};

export { initialState, reducer };
