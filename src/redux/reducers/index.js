import { combineReducers } from "redux";
import { itemReducer } from "./itemReducers";
const reducers = combineReducers({
  allItems: itemReducer
});
export default reducers;
