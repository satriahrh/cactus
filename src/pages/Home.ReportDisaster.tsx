import { IonButton, IonImg, IonText } from "@ionic/react";
// import HorizontalScroll from "react-scroll-horizontal";
import "./Home.css";
import { DataAlertInfoType } from "./Home.Types";
import * as React from "react";

type ReportDisasterProps = {
  dataAlertInfo: DataAlertInfoType;
};

const ReportDisaster = React.memo(({ dataAlertInfo }: ReportDisasterProps) => {
  console.log(dataAlertInfo);
  return (
    <IonButton
      color="danger"
      expand="block"
      className="report-disaster-button"
      size="large"
      disabled={!dataAlertInfo.willDisaster}
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
});

export default ReportDisaster;