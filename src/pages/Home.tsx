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
      <IonContent fullscreen>
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
              Baleendah
            </h1>
            <br />
            <p
              style={{
                margin: 0,
              }}
            >
              Bandung, Jawa Barat
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

        <IonItem lines="none"></IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
