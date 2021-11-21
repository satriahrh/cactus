import { IonButton, IonImg, IonText } from "@ionic/react";
// import HorizontalScroll from "react-scroll-horizontal";
import "./Home.css";
import { DataAlertInfoType } from "./Home.Types";
import { useHistory } from "react-router";
import { Geoposition } from "@ionic-native/geolocation";

type ReportDisasterProps = {
  dataAlertInfo: DataAlertInfoType;
  position: Geoposition;
};

const ReportDisaster: React.FC<ReportDisasterProps> = ({
  dataAlertInfo,
  position,
}) => {
  const history = useHistory();
  return (
    <IonButton
      color="danger"
      expand="block"
      className="report-disaster-button"
      size="large"
      disabled={!dataAlertInfo.willDisaster}
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
      <IonImg src="assets/icon/ant-alert-outlined.svg" slot="start" />
      <IonText className="ion-text-left ion-text-capitalize">
        <h2 className="ion-no-margin">
          Buat Laporan
          <br />
          Terdampak Banjir
        </h2>
      </IonText>
    </IonButton>
  );
};

export default ReportDisaster;
