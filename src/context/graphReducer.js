const graphReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIMEFRAME':
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

export default graphReducer;
