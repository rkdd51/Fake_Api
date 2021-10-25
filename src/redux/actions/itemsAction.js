import { actionTypes } from "./actionTypes";
export const setItems = (item) => {
  return {
    type: actionTypes.SET_ITEMS,
    payload: item
  };
};
