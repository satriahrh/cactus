export type DataAlertInfoType = {
  when: string;
  willDisaster: boolean;
};

export type DataGetWeatherInfoType = {
  district: String;
  city: String;
  province: String;
  date: String;
  weather: string;
  temperature: Number;
  humidity: Number;
};
