import {
  GET_USER_GEOLOCATION_SUCCESS,
  GET_WEATHER_DETAILS_SUCCESS,
} from "./UserActions";

const initialState = {
  geolocationDetails: {},
  temperature: {},
  uv: {},
  weather: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_GEOLOCATION_SUCCESS:
      return Object.assign({}, state, {
        geolocationDetails: action.geolocationDetails,
      });
    case GET_WEATHER_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        temperature: action.weatherDetails.current.temp,
        uv: action.weatherDetails.current.uvi,
        weather: action.weatherDetails.current.weather,
      });
    default:
      return state;
  }
}
