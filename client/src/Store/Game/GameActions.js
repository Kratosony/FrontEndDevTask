export const GET_GAMES = "GET_GAMES";
export const GET_GAMES_SUCCESS = "GET_GAMES_SUCCESS";

export function getGames() {
  return {
    type: GET_GAMES,
    loading: true,
  };
}
export function getGamesSuccess(data) {
  return {
    type: GET_GAMES_SUCCESS,
    games: data,
    loading: false,
  };
}
