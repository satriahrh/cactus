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
import {
  getWeatherCurrent,
  GetWeatherCurrentResponse,
} from "../services/getWeatherCurrent";

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

  const [dataGetWeatherCurrent, setDataGetWeatherCurrent] =
    useState<GetWeatherCurrentResponse>();
  useEffect(() => {
    if (position) {
      getWeatherCurrent(
        position.coords.latitude,
        position.coords.longitude
      ).then((value) => {
        console.log(value);
        setDataGetWeatherCurrent(value);
      });
    }
  }, [position, setDataGetWeatherCurrent]);

  const [dataGetDisaterLocations, setDataGetDisasterLocations] =
    useState<DataGetDisaterLocationsType>();
  useEffect(() => {
    getDisasterLocations(position, setDataGetDisasterLocations);
  }, [position, setDataGetDisasterLocations]);

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        {dataGetWeatherCurrent && dataAlertInfo && (
          <WeatherInfo
            dataGetWeatherCurrent={dataGetWeatherCurrent}
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
