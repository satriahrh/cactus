import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { DataGetDisaterLocationType } from "./Home.Types";
import "./DisasterLocationDetail.css";

// type DisasterLocationDetailProps = {
//   dataGetDisasterLocation: DataGetDisaterLocationType;
// };

type LocationState = {
  dataGetDisasterLocation: DataGetDisaterLocationType;
};

const DisasterLocationDetail = () => {
  const location = useLocation<LocationState>();

  const [dataGetDisasterLocation, setDataGetDisasterLocation] =
    useState<DataGetDisaterLocationType>();
  useEffect(() => {
    if (location.state) {
      setDataGetDisasterLocation(location.state.dataGetDisasterLocation);
    }
  }, [location]);
  return (
    <IonPage>
      {dataGetDisasterLocation && (
        <Header dataGetDisasterLocation={dataGetDisasterLocation} />
      )}
      <IonContent></IonContent>
    </IonPage>
  );
};

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

export default DisasterLocationDetail;
