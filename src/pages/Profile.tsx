import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
} from "@ionic/react";
import { settingsOutline } from "ionicons/icons";
import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonList>
          <IonItem lines="none" className="user-info">
            <IonAvatar slot="start">
              <img
                src="https://i.pinimg.com/280x280_RS/66/be/73/66be73a532c4bcb62f5dcbee1522d809.jpg"
                alt="Dhira Wigata Putra"
              />
            </IonAvatar>
            <IonText color="dark">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  margin: 0,
                }}
              >
                Dhira Wigata Putra
              </p>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                }}
              >
                Kali Anggrek, Tangerang
              </p>
            </IonText>
            <IonButton slot="end" fill="clear" color="dark">
              <IonIcon slot="icon-only" icon={settingsOutline} />
            </IonButton>
          </IonItem>
          <IonItem lines="none">
            <IonCard className="disaster-pack-card">
              {/* <img src="/assets/disaster-pack-ilus.jpeg" width="100%" /> */}
              <IonCardHeader>
                <IonCardTitle
                  color="light"
                  style={{
                    fontSize: "29px",
                    fontWeight: "bold",
                  }}
                >
                  Disaster Pack
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonCardSubtitle
                  color="light"
                  style={{
                    fontSize: "18px",
                  }}
                >
                  Berlangganan kebutuhan bantuan serta peralatan darurat saat
                  kamu mengalami bencana
                </IonCardSubtitle>
                <IonButton
                  expand="block"
                  size="large"
                  className="ion-margin-top"
                >
                  <IonLabel color="light" className="ion-text-capitalize">
                    Berlanggan Sekarang
                  </IonLabel>
                </IonButton>
              </IonCardContent>
            </IonCard>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
