import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  useIonToast,
} from "@ionic/react";
import { notificationsOutline, alertCircleOutline } from "ionicons/icons";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
// import HorizontalScroll from "react-scroll-horizontal";
import "./Home.css";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [present] = useIonToast();
  const [position, setPosition] = useState<Geoposition>();
  const [dataAlertInfo, setDataAlertInfo] = useState<DataAlertInfoType>();

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

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        {position && dataAlertInfo && (
          <WeatherInfo position={position} dataAlertInfo={dataAlertInfo} />
        )}
        {dataAlertInfo && <ReportDisaster dataAlertInfo={dataAlertInfo} />}
      </IonContent>
    </IonPage>
  );
};

type WeatherInfoProps = {
  position: Geoposition;
  dataAlertInfo: DataAlertInfoType;
};

const WeatherInfo = ({ position, dataAlertInfo }: WeatherInfoProps) => {
  type DataType = {
    district: String;
    city: String;
    province: String;
    date: String;
    weather: string;
    temperature: Number;
    humidity: Number;
  };
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    if (position && !data) {
      setData({
        district: "Baleendah" + position.coords.latitude,
        city: "Kab. Bandung",
        province: "Jawa Barat",
        date: "Selasa, 16 November",
        weather: "thunderstorm-showers",
        temperature: 31.2,
        humidity: 50,
      });
    }
  }, [position, data]);
  return (
    <IonGrid>
      <IonRow className="ion-no-margin">
        <IonCol>
          <IonText class="ion-padding-start">
            <h1
              style={{
                fontWeight: "semibold",
                margin: 0,
              }}
            >
              {data?.district}
            </h1>
            <br />
            <p
              style={{
                margin: 0,
              }}
            >
              {data?.city}, {data?.province}
            </p>
          </IonText>
        </IonCol>
        <IonCol className="ion-text-right">
          <IonButton
            shape="round"
            fill="clear"
            size="large"
            style={{
              textAlign: "top",
            }}
          >
            <IonIcon
              color="dark"
              icon={notificationsOutline}
              style={{
                innerHeight: "31px",
              }}
            />
          </IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol
          size="6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <IonText
            style={{
              fontSize: "14px",
            }}
          >
            <p className="ion-no-margin">{data?.date}</p>
            <p
              className="ion-no-margin"
              style={{
                marginTop: "8px",
              }}
            >
              <strong>{data?.weather && weatherCopy[data.weather]}</strong>
            </p>
          </IonText>
        </IonCol>
        <IonCol
          size="3"
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-end",
            justifyContent: "center",
            textAlign: "right",
          }}
        >
          <IonText color="secondary">
            <strong
              style={{
                fontSize: "22px",
              }}
            >
              19<sup>o</sup>C
            </strong>
          </IonText>
          <IonText>
            <strong
              style={{
                fontSize: "14px",
              }}
            >
              50%
            </strong>
          </IonText>
        </IonCol>
        <IonCol size="3">
          <IonImg
            style={{
              maxWidth: "91px",
            }}
            src={"assets/weather/" + data?.weather + ".svg"}
          />
        </IonCol>
      </IonRow>
      <IonRow className="alert-info-flood-row">
        <IonCol
          hidden={!dataAlertInfo.willDisaster}
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <IonItem
            color="warning"
            style={{
              borderRadius: "5px",
            }}
          >
            <IonIcon
              className="alert-info-flood"
              slot="start"
              icon={alertCircleOutline}
              size="small"
              style={{
                margin: "4px 0",
              }}
            />
            <IonLabel
              style={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Perkiraan Banjir pada {dataAlertInfo.when}
            </IonLabel>
          </IonItem>
        </IonCol>
      </IonRow>
      {/* <IonRow
        style={{
          display: "block",
          overflowY: "auto",
          overflowX: "hidden",
          transform: "rotate(-90deg)",
          tranformOrigin: "right top",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(() => {
          return (
            <div
              style={{
                display: "block",
                transform: "rotate(-90deg)",
              }}
            >
              <IonText>
                <p>
                  22<sup>o</sup>C
                </p>
              </IonText>
              <IonText>
                <p>40%</p>
              </IonText>
              <IonImg
                style={{
                  maxWidth: "40px",
                }}
                src={"assets/weather/thunderstorm-showers.svg"}
              />{" "}
              <IonText>
                <p>19:00</p>
              </IonText>
            </div>
          );
        })}
      </IonRow> */}
    </IonGrid>
  );
};

const weatherCopy: Record<string, string> = {
  "clear-day": "Hari Cerah",
  "clear-night": "Malam Cerah",
  cloudy: "Berawan",
  fog: "Berkabut",
  "heavy-showers": "Hujan Lebat",
  "heavy-sleet": "Hujan Es Lebat",
  "heavy-snow": "Salju Lebat",
  "overcast ": "Mendung",
  "partly-cloudy-day": "Hari Berawan Sebagian",
  "partly-cloudy-night": "Malam Berawan Sebagian",
  showers: "Hujan",
  sleet: "Hujan Es",
  snow: "Turun Salju",
  "thunderstorm-showers": "Badai Petir",
  "thuderstorm-snow": "Badai Salju",
};

type DataAlertInfoType = {
  when: string;
  willDisaster: boolean;
};

type ReportDisasterProps = {
  dataAlertInfo: DataAlertInfoType;
};

const ReportDisaster = ({ dataAlertInfo }: ReportDisasterProps) => {
  return (
    <IonButton
      color="danger"
      expand="block"
      className="report-disaster-button"
      size="large"
      disabled={!dataAlertInfo.willDisaster}
    >
      <IonImg src="assets/icon/ant-alert-outlined.svg" slot="start" />
      <IonText className="ion-text-left ion-text-capitalize">
        <h2 className="ion-no-margin">
          Buat Laporan
          <br />
          Terdampak Banjir
        </h2>
      </IonText>
    </IonButton>
  );
};

export default Home;
