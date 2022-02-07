import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
  userReducer,
  authReducer
});
export default reducers;
