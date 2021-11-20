import { IonContent, IonPage, useIonToast } from "@ionic/react";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
// import HorizontalScroll from "react-scroll-horizontal";
import "./Home.css";
import { useEffect, useState } from "react";
import WeatherInfo from "./Home.WeatherInfo";
import { DataAlertInfoType, DataGetWeatherInfoType } from "./Home.Types";
import ReportDisaster from "./Home.ReportDisaster";

const Home: React.FC = () => {
  const [present] = useIonToast();
  const [position, setPosition] = useState<Geoposition>();
  const [dataAlertInfo, setDataAlertInfo] = useState<DataAlertInfoType>();
  const [dataGetWeatherInfo, setDataGetWeatherInfo] =
    useState<DataGetWeatherInfoType>();

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
  }, [present, position, setPosition]);
  useEffect(() => {
    // Get Alert Info by Lat Long
    if (position) {
      setDataAlertInfo({
        when: "12 Nov 2021",
        willDisaster: true,
      });
    }
  }, [dataAlertInfo, position]);
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
  }, [position, dataGetWeatherInfo]);

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
      </IonContent>
    </IonPage>
  );
};

export default Home;
