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
  const [location, setLocation] = useState<LocationData>();

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
    if (position && !location) {
      setLocation({
        district: "Baleendah" + position.coords.latitude,
        city: "Kab. Bandung",
        province: "Jawa Barat",
      });
    }
  }, [position, location]);

  return (
    <IonPage>
      <IonContent fullscreen>
        {location && <Location data={location} />}
      </IonContent>
    </IonPage>
  );
};

type LocationData = {
  district: String;
  city: String;
  province: String;
};

type LocationProps = {
  data: LocationData;
};

const Location = ({ data }: LocationProps) => {
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
          {data.district}
        </h1>
        <br />
        <p
          style={{
            margin: 0,
          }}
        >
          {data.city}, {data.province}
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
