import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonRow,
  IonText,
} from "@ionic/react";
import { notificationsOutline, alertCircleOutline } from "ionicons/icons";
import "./Home.css";
import { DataAlertInfoType, DataGetWeatherInfoType } from "./Home.Types";

type WeatherInfoProps = {
  dataGetWeatherInfo: DataGetWeatherInfoType;
  dataAlertInfo: DataAlertInfoType;
};

const WeatherInfo = ({
  dataGetWeatherInfo,
  dataAlertInfo,
}: WeatherInfoProps) => {
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
              {dataGetWeatherInfo.district}
            </h1>
            <br />
            <p
              style={{
                margin: 0,
              }}
            >
              {dataGetWeatherInfo.city}, {dataGetWeatherInfo.province}
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
            <p className="ion-no-margin">{dataGetWeatherInfo.date}</p>
            <p
              className="ion-no-margin"
              style={{
                marginTop: "8px",
              }}
            >
              <strong>{weatherCopy[dataGetWeatherInfo.weather]}</strong>
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
            src={"assets/weather/" + dataGetWeatherInfo?.weather + ".svg"}
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

export default WeatherInfo;
