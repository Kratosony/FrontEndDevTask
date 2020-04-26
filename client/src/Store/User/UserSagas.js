import { takeLatest, put } from "redux-saga/effects";
import {
  GET_USER_GEOLOCATION,
  GET_WEATHER_DETAILS,
  getWeatherDetails,
  getUserGeolocationSuccess,
  getWeatherDetailsSuccess
} from "./UserActions";
import { GET_GEOLOCATION_DETAILS_URL, GET_WEATHER_DETAILS_URL } from "Store/API/ApiEndpoints";

/* Worker Sagas */
function* getUserGeolocationDetails(action) {
  const response = yield fetch(GET_GEOLOCATION_DETAILS_URL(action.ipAddress));
  if (response.ok) {
    const data = yield response.json();
    yield put(getUserGeolocationSuccess(data));
    yield put(getWeatherDetails(data.latitude, data.longitude));
  } else {
    console.log(response.json);
  }
}
function* getWeatherDetailsSaga(action) {
  const response = yield fetch(GET_WEATHER_DETAILS_URL(action.latitude, action.longitude));
  if (response.ok) {
    const data = yield response.json();
    yield put(getWeatherDetailsSuccess(data));
  } else {
    console.log(response.json);
  }
}

/* Watcher Sagas */
export function* getUserDetailsSagas() {
  yield takeLatest(GET_USER_GEOLOCATION, getUserGeolocationDetails);
  yield takeLatest(GET_WEATHER_DETAILS, getWeatherDetailsSaga);
}
