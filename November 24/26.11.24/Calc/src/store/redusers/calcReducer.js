const initialState = {
  calc: 0,
};

const CalcReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CALC":
      return {
        ...state,
        calc: state.calc + 1,
      };
    case "SUBTRACT_CALC":
      return {
        ...state,
        calc: state.calc - 1,
      };

    default:
      return state;
  }
};

export default CalcReducer;
