import { Geoposition } from "@ionic-native/geolocation";
import { DataGetDisaterLocationsType } from "../entity/disasterLocation";

const getDisasterLocations = (
  position: Geoposition | undefined,
  setDataGetDisasterLocations: React.Dispatch<DataGetDisaterLocationsType>
) => {
  if (position) {
    setDataGetDisasterLocations([
      {
        city: "Tangerang",
        district: "Kali Anggrek",
        floodSeverity: "1.3 Meter",
        timestamp: "11 Nov 2021, 16:30 WIB",
        latitude: -6.3047917,
        longitude: 106.7346133,
      },
      {
        city: "Kab. Bandung",
        district: "Baleendah",
        floodSeverity: "1.9 Meter",
        timestamp: "12 Nov 2021, 16:38 WIB",
        latitude: -6.3051734,
        longitude: 106.7350775,
      },
      {
        city: "Kab. Bantul",
        district: "Piyungan",
        floodSeverity: "3 Meter",
        timestamp: "14 Nov 2021, 1:55 WIB",
        latitude: -6.3013126,
        longitude: 106.7399471,
      },
      {
        city: "Kab. Bogor",
        district: "Ciparay",
        floodSeverity: "1.6 Meter",
        timestamp: "17 Nov 2021, 3:30 WIB",
        latitude: -6.302792,
        longitude: 106.732725,
      },
    ]);
  }
};

export default getDisasterLocations;
