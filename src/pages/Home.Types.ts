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

type DataGetDisaterLocationType = {
  district: string;
  city: string;
  floodSeverity: string;
  timestamp: string;
};

export type DataGetDisaterLocationsType =
  | Array<DataGetDisaterLocationType>
  | undefined;
