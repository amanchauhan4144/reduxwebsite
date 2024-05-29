// src/redux/reducers/index.js
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  allCart: cartReducer,
});

export default rootReducer;
