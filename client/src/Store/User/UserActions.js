export const GET_USER_GEOLOCATION = "GET_USER_GEOLOCATION";
export const GET_USER_GEOLOCATION_SUCCESS = "GET_USER_GEOLOCATION_SUCCESS";
export const GET_WEATHER_DETAILS = "GET_WEATHER_DETAILS";
export const GET_WEATHER_DETAILS_SUCCESS = "GET_WEATHER_DETAILS_SUCCESS";
export function getUserGeolocation(ipAddress) {
  return {
    type: GET_USER_GEOLOCATION,
    ipAddress,
  };
}
export function getUserGeolocationSuccess(data) {
  return {
    type: GET_USER_GEOLOCATION_SUCCESS,
    geolocationDetails: data,
  };
}

export function getWeatherDetails(lat, lon) {
  return {
    type: GET_WEATHER_DETAILS,
    latitude: lat,
    longitude: lon,
  }
}

export function getWeatherDetailsSuccess(data) {
  return {
    type: GET_WEATHER_DETAILS_SUCCESS,
    weatherDetails: data,
  };
}
