import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonPage,
  IonText,
  useIonToast,
} from "@ionic/react";
import { notificationsOutline } from "ionicons/icons";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
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
        <Location district="Baleendah" cityProvince="Bandung, Jawa Barat" />
      </IonContent>
    </IonPage>
  );
};

type LocationProps = {
  district: String;
  cityProvince: String;
};

const Location = (props: LocationProps) => {
  return (
    <IonItem
      class="ion-no-margin"
      lines="none"
      style={{
        marginTop: "32px",
      }}
    >
      <IonText class="ion-padding-start">
        <h1
          style={{
            fontWeight: "semibold",
            margin: 0,
          }}
        >
          {props.district}
        </h1>
        <br />
        <p
          style={{
            margin: 0,
          }}
        >
          {props.cityProvince}
        </p>
      </IonText>
      <IonButton
        shape="round"
        fill="clear"
        size="large"
        slot="end"
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
    </IonItem>
  );
};

export default Home;
