import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import {
  chevronForwardOutline,
  logOutOutline,
  notificationsOutline,
  peopleOutline,
} from "ionicons/icons";
import { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../services/auth";

const ProfileSettingsPage: React.FC = () => {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref="/t/profile" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList inset>
          <IonListHeader>Dhira Wigata Putra</IonListHeader>
          <IonItem lines="none" button className="ion-margin-top">
            <IonIcon icon={notificationsOutline} slot="start" color="dark" />
            <IonLabel>Notifikasi</IonLabel>
            <IonIcon icon={chevronForwardOutline} slot="end" color="dark" />
          </IonItem>
          <IonItem lines="none" button className="ion-margin-top">
            <IonIcon icon={peopleOutline} slot="start" color="dark" />
            <IonLabel>Hubungi Kami</IonLabel>
            <IonIcon icon={chevronForwardOutline} slot="end" color="dark" />
          </IonItem>
          <IonItem
            lines="none"
            button
            className="ion-margin-top"
            onClick={() => {
              history.push("/");
              logout();
            }}
          >
            <IonIcon icon={logOutOutline} slot="start" color="dark" />
            <IonLabel>Log Out</IonLabel>
            <IonIcon icon={chevronForwardOutline} slot="end" color="dark" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ProfileSettingsPage;
