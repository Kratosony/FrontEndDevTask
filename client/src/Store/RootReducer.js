import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import userReducer from "Store/User/UserReducer";
import gameReducer from "Store/Game/GameReducer";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user: userReducer,
  games: gameReducer,
})
export default createRootReducer
