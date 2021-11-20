import { Geoposition } from "@ionic-native/geolocation";
import {
  IonButton,
  IonChip,
  IonIcon,
  IonItem,
  IonLabel,
  IonText,
} from "@ionic/react";
import "./Map.css";
import { alertCircle } from "ionicons/icons";
import DisasterLocation from "./Home.DisaterLocation";
import { useEffect, useState } from "react";
import { DataGetDisaterLocationsType } from "../entity/disasterLocation";
import getDisasterLocations from "../services/getDisasterLocations";

type DisasterInformationProps = {
  position: Geoposition | undefined;
  dataGetDisaterLocations: DataGetDisaterLocationsType | undefined;
};

const DisasterInformation: React.FC<DisasterInformationProps> = ({
  position,
  dataGetDisaterLocations,
}) => {
  return (
    <div className="disaster-information-root">
      <hr className="disaster-information-holder" />
      <IonItem lines="none" className="status-lokasi-anda">
        <IonText>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Status Lokasi Anda
          </p>
        </IonText>
        <IonChip slot="end" color="danger">
          <IonIcon icon={alertCircle} />
          <IonLabel
            style={{
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Bahaya
          </IonLabel>
        </IonChip>
      </IonItem>
      <IonButton className="ion-text-capitalize mitigasi-banjir">
        Lihat Mitigasi Banjir
      </IonButton>
      <DisasterLocation dataGetDisaterLocations={dataGetDisaterLocations} />
    </div>
  );
};

export default DisasterInformation;
