import { IonContent, IonPage, useIonToast } from "@ionic/react";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
// import HorizontalScroll from "react-scroll-horizontal";
import "./Home.css";
import { useCallback, useEffect, useState } from "react";
import WeatherInfo from "./Home.WeatherInfo";
import {
  DataAlertInfoType,
  DataGetDisaterLocationsType,
  DataGetWeatherInfoType,
} from "./Home.Types";
import ReportDisaster from "./Home.ReportDisaster";
import DisasterLocation from "./Home.DisaterLocation";

const Home: React.FC = () => {
  const [present] = useIonToast();
  const [position, setPosition] = useState<Geoposition>();

  useEffect(() => {
    const getLocation = async () => {
      try {
        if (!position) {
          const currentPosition = await Geolocation.getCurrentPosition();
          setPosition(currentPosition);
          console.log(currentPosition);
        }
      } catch (error: any) {
        present(error.message, 3000);
        console.log("Error getting location", error);
      }
    };
    getLocation();
  }, [position, setPosition]);

  const [dataAlertInfo, setDataAlertInfo] = useState<DataAlertInfoType>();
  useEffect(() => {
    // Get Alert Info by Lat Long
    if (position) {
      setDataAlertInfo({
        when: "12 Nov 2021",
        willDisaster: true,
      });
    }
  }, [position]);

  const [dataGetWeatherInfo, setDataGetWeatherInfo] =
    useState<DataGetWeatherInfoType>();
  useEffect(() => {
    if (position && !dataGetWeatherInfo) {
      setDataGetWeatherInfo({
        district: "Baleendah" + position.coords.latitude,
        city: "Kab. Bandung",
        province: "Jawa Barat",
        date: "Selasa, 16 November",
        weather: "thunderstorm-showers",
        temperature: 31.2,
        humidity: 50,
      });
    }
  }, [position, setDataGetWeatherInfo]);

  const [dataGetDisaterLocations, setDataGetDisasterLocations] =
    useState<DataGetDisaterLocationsType>();
  useEffect(() => {
    if (position && !dataGetDisaterLocations) {
      setDataGetDisasterLocations([
        {
          city: "Tangerang",
          district: "Kali Anggrek",
          floodSeverity: "1.3 Meter",
          timestamp: "11 Nov 2021, 16:30 WIB",
        },
        {
          city: "Kab. Bandung",
          district: "Baleendah",
          floodSeverity: "1.9 Meter",
          timestamp: "12 Nov 2021, 16:38 WIB",
        },
        {
          city: "Kab. Bantul",
          district: "Piyungan",
          floodSeverity: "3 Meter",
          timestamp: "14 Nov 2021, 1:55 WIB",
        },
        {
          city: "Kab. Bogor",
          district: "Ciparay",
          floodSeverity: "1.6 Meter",
          timestamp: "17 Nov 2021, 3:30 WIB",
        },
      ]);
    }
  }, [position, setDataGetDisasterLocations]);

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        {dataGetWeatherInfo && dataAlertInfo && (
          <WeatherInfo
            dataGetWeatherInfo={dataGetWeatherInfo}
            dataAlertInfo={dataAlertInfo}
          />
        )}
        {dataAlertInfo && <ReportDisaster dataAlertInfo={dataAlertInfo} />}
        {dataGetDisaterLocations && (
          <DisasterLocation dataGetDisaterLocations={dataGetDisaterLocations} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
