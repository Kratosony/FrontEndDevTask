import { takeLatest, put } from "redux-saga/effects";
import {
  GET_GAMES,
  getGamesSuccess
} from "./GameActions";
import { GET_GAMES_COLLECTION } from "Store/API/ApiEndpoints";

/* Worker Sagas */
function* getGamesCollection() {
  const response = yield fetch(GET_GAMES_COLLECTION);
  if (response.ok) {
    const data = yield response.json();
    yield put(getGamesSuccess(data));
  } else {
    console.log(response.json);
  }
}

/* Watcher Sagas */
export function* getGameSagas() {
  yield takeLatest(GET_GAMES, getGamesCollection);
}
