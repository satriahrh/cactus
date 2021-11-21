import { DataResponse } from "./backend";

export interface GetWeatherCurrentResponse extends DataResponse {
  data: {
    location_state: string;
    location_city: string;
    location_address: string;
    weather_main: string;
    weather_description: string;
    weather_icon: string;
    temp: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
    humidity: number;
    datetime: Date;
  };
}

export const getWeatherCurrent = async (lat: number, lng: number) => {
  var axios = require("axios");

  var config = {
    method: "get",
    url:
      "https://peduli-banjir.api-techstack.com/weather/current?latitude=" +
      lat +
      "&longtitude=" +
      lng,
    headers: {},
  };

  const res: { data: GetWeatherCurrentResponse } = await axios(config);
  return res.data;
};
