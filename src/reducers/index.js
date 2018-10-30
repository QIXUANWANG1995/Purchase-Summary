import { APPLY_CODE } from "../actions/actionTypes";

const initialState = {
  discount: 1
};

const applyCode = (state, action) => {
  return {
    ...state,
    discount: action.value
  };
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_CODE:
      return applyCode(state, action);
    default:
      return state;
  }
};

export default Reducer;
