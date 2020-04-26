import { combineReducers } from "redux";
import userReducer from "Store/User/UserReducer";

export default combineReducers({
  user: userReducer,
});
