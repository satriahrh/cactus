import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { DataGetDisaterLocationType } from "../entity/disasterLocation";
import "./DisasterLocationDetail.css";

type HeaderProps = {
  dataGetDisasterLocation: DataGetDisaterLocationType;
};

const Header = ({ dataGetDisasterLocation }: HeaderProps) => {
  return (
    <IonHeader className="header">
      <IonToolbar className="toolbar">
        <IonButtons slot="start">
          <IonBackButton color="light" />
        </IonButtons>
      </IonToolbar>
      <IonTitle
        color="light"
        style={{
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        {dataGetDisasterLocation.district}, {dataGetDisasterLocation.city}
      </IonTitle>
      <div className="ion-margin">
        <IonText color="light">
          <p
            style={{
              margin: 0,
              fontSize: "12px",
            }}
          >
            Kedalaman banjir{" "}
            <strong>{dataGetDisasterLocation.floodSeverity}</strong>
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "10px",
            }}
          >
            {dataGetDisasterLocation.timestamp}
          </p>
        </IonText>
      </div>
    </IonHeader>
  );
};

export default Header;
