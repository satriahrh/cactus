import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonPage,
  IonText,
} from "@ionic/react";
import { notificationsOutline } from "ionicons/icons";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Location district="Baleendah" cityProvince="Bandung, Jawa Barat" />
      <IonContent fullscreen></IonContent>
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
