import {
  GET_GAMES_SUCCESS, GET_GAMES,
} from "./GameActions";

const initialState = {
  games: [],
  loading: true,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return Object.assign({}, state, {
        loading: action.loading,
      })
    case GET_GAMES_SUCCESS:
      return Object.assign({}, state, {
        games: action.games,
        loading: action.loading,
      });
    default:
      return state;
  }
}
