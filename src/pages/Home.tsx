import { IonContent, IonPage, useIonToast } from "@ionic/react";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
// import HorizontalScroll from "react-scroll-horizontal";
import "./Home.css";
import { useCallback, useEffect, useState } from "react";
import WeatherInfo from "./Home.WeatherInfo";
import { DataAlertInfoType, DataGetWeatherInfoType } from "./Home.Types";
import ReportDisaster from "./Home.ReportDisaster";
import DisasterLocation from "./Home.DisaterLocation";
import getPosition from "../services/getPosition";
import getDisasterLocations from "../services/getDisasterLocations";
import { DataGetDisaterLocationsType } from "../entity/disasterLocation";

const Home: React.FC = () => {
  const [position, setPosition] = useState<Geoposition>();

  useEffect(() => {
    getPosition(position, setPosition);
  }, [setPosition]);

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
    getDisasterLocations(position, setDataGetDisasterLocations);
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
        {dataAlertInfo && position && (
          <ReportDisaster position={position} dataAlertInfo={dataAlertInfo} />
        )}
        {dataGetDisaterLocations && (
          <DisasterLocation dataGetDisaterLocations={dataGetDisaterLocations} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
