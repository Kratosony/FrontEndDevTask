/* Country Endpoints */
import { apiKeys } from './ApiKeys';

export const GET_GEOLOCATION_DETAILS_URL = (ip) =>
  `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKeys.IpGeoLocationKey}&ip=${ip}`;
export const GET_WEATHER_DETAILS_URL = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKeys.WeatherKey}`;
export const GET_WEATHER_ICON = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;
export const GET_GAMES_COLLECTION = "https://highrollercdn.blob.core.windows.net/data/test/gamestest.json";