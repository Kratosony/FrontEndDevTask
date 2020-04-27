import {
  GET_USER_GEOLOCATION_SUCCESS,
  GET_WEATHER_DETAILS_SUCCESS,
  LOGIN_USER,
  LOGOUT_USER,
} from "./UserActions";

const initialState = {
  geolocationDetails: {},
  temperature: -1,
  uv: -1,
  weather: {},
  username: '',
  email: '',
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
    case LOGIN_USER:
      return Object.assign({}, state, {
        username: action.username,
        email: action.email,
      });
    case LOGOUT_USER:
      return Object.assign({}, state, {
        username: '',
        email: '',
      });
    default:
      return state;
  }
}
