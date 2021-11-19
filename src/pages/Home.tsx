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
import { notificationsOutline, warning, warningOutline } from "ionicons/icons";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
// import HorizontalScroll from "react-scroll-horizontal";
import "./Home.css";
import { useEffect, useState } from "react";

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
  }, [present, position, setPosition]);

  return (
    <IonPage>
      <IonContent fullscreen>
        {position && <WeatherInfo position={position} />}
      </IonContent>
    </IonPage>
  );
};

type WeatherInfoProps = {
  position: Geoposition;
};

const WeatherInfo = ({ position }: WeatherInfoProps) => {
  type DataType = {
    district: String;
    city: String;
    province: String;
    date: String;
    weather: String;
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
        weather: "thuderstorm-shower",
        temperature: 31.2,
        humidity: 50,
      });
    }
  }, [position, data]);
  return (
    <IonGrid>
      <IonRow>
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
          <IonText>
            <p className="ion-no-margin">Selasa, 16 November</p>
            <p className="ion-no-margin">
              <strong>Badai Petir</strong>
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
          <IonText color="primary">
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
            src={"assets/weather/thunderstorm-showers.svg"}
          />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol
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
            <IonIcon slot="start" icon={warningOutline} />
            <IonLabel>Perkiraan Banjir pada 19:48</IonLabel>
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

export default Home;
