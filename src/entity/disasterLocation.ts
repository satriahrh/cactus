export type DataGetDisaterLocationType = {
  district: string;
  city: string;
  floodSeverity: string;
  latitude: number | undefined;
  longitude: number | undefined;
  timestamp: string;
};

export type DataGetDisaterLocationsType =
  | Array<DataGetDisaterLocationType>
  | undefined;
