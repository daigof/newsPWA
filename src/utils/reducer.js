const initialState = {
  selectedCategory: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeCategory':
      return {
        ...state,
        selectedCategory: action.category,
      };

    default:
      return state;
  }
};

export { initialState, reducer };
