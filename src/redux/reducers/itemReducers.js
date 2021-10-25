import { actionTypes } from "../actions/actionTypes";
const intialState = {
  items: []
};

export const itemReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_ITEMS:
      return { ...state, items: payload };
    default:
      return state;
  }
};
