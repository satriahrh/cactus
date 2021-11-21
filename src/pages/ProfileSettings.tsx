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

const ProfileSettingsPage: React.FC = () => {
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
        <IonList>
          <IonListHeader>Dhira Wigata Putra</IonListHeader>
          <IonItem lines="none" button>
            <IonIcon icon={notificationsOutline} slot="start" color="dark" />
            <IonLabel>Notifikasi</IonLabel>
            <IonIcon icon={chevronForwardOutline} slot="end" color="dark" />
          </IonItem>
          <IonItem lines="none" button>
            <IonIcon icon={peopleOutline} slot="start" color="dark" />
            <IonLabel>Hubungi Kami</IonLabel>
            <IonIcon icon={chevronForwardOutline} slot="end" color="dark" />
          </IonItem>
          <IonItem lines="none" button>
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
