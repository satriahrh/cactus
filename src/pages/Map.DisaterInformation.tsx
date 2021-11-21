import { Geoposition } from "@ionic-native/geolocation";
import {
  IonButton,
  IonButtons,
  IonChip,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonText,
} from "@ionic/react";
import "./Map.css";
import { alertCircle } from "ionicons/icons";
import DisasterLocation from "./Home.DisaterLocation";
import { useEffect, useState } from "react";
import { DataGetDisaterLocationsType } from "../entity/disasterLocation";
import { useHistory } from "react-router";
import { DataAlertInfoType } from "./Home.Types";

type DisasterInformationProps = {
  position: Geoposition | undefined;
  dataGetDisaterLocations: DataGetDisaterLocationsType | undefined;
  dataAlertInfo: DataAlertInfoType | undefined;
};

const DisasterInformation: React.FC<DisasterInformationProps> = ({
  position,
  dataGetDisaterLocations,
  dataAlertInfo,
}) => {
  const history = useHistory();
  return (
    <>
      <div className="disaster-report">
        {position && dataAlertInfo && dataAlertInfo.willDisaster && (
          <IonButton
            color="danger"
            expand="block"
            onClick={() => {
              history.push("/thread-creation", {
                type: "report",
                position: {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                },
              });
            }}
          >
            <IonImg
              style={{
                width: "20px",
              }}
              src="assets/icon/ant-alert-outlined.svg"
              slot="start"
            />
            <IonLabel className="ion-text-capitalize">
              Buat Laporan Terdampak Banjir
            </IonLabel>
          </IonButton>
        )}
      </div>
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
    </>
  );
};

export default DisasterInformation;
