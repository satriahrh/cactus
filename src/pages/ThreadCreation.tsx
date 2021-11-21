import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { imageOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { ThreadCreationLocationState } from "../entity/threadCreation";

const ThreadCreationPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation<ThreadCreationLocationState>();

  const [threadType, setThreadType] = useState<string>("");
  useEffect(() => {
    setThreadType(location.state?.type ? location.state.type : "");
  }, [location, setThreadType]);

  const [threadReportPosition, setThreadReportPosition] =
    useState<{ lat: Number; lng: Number }>();
  useEffect(() => {
    if (threadType === "report" && location.state?.position) {
      setThreadReportPosition(location.state.position);
    }
  }, [threadType, setThreadReportPosition]);

  const [threadTitle, setThreadTitle] = useState<string>("");
  const [threadContent, setThreadContent] = useState<string>("");

  const onSubmit = () => {
    console.log(threadTitle, threadType, threadContent, threadReportPosition);
    history.goBack();
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>
            {threadType === "report" ? "Buat Laporan" : "Awali Diskusi"}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList inset={true}>
          <IonItem>
            <IonLabel position="floating">Judul Laporan</IonLabel>
            <IonInput
              value={threadTitle}
              enterkeyhint="next"
              onIonChange={(e) => setThreadTitle(e.detail.value!)}
              placeholder={
                threadType === "report"
                  ? "Masukkan pesan pertolongan"
                  : "Masukkan judul diskusi"
              }
            />
          </IonItem>

          <IonItem style={{ height: "fit-content" }}>
            <IonLabel position="floating">Deskripsi</IonLabel>
            <IonTextarea
              autoGrow
              value={threadContent}
              enterkeyhint="done"
              onIonChange={(e) => setThreadContent(e.detail.value!)}
              placeholder={
                threadType === "report"
                  ? "Masukkan detail keterangan dari kejadian"
                  : "Masukkan bahan diskusi"
              }
            />
          </IonItem>
          <IonItem lines="none" className="ion-margin-top">
            <IonButton color="light" size="default">
              <IonIcon icon={imageOutline} slot="start" />
              <IonLabel className="ion-text-capitalize">
                Tambahkan Media
              </IonLabel>
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter>
        <IonButton
          expand="block"
          size="default"
          className="ion-margin"
          onClick={onSubmit}
        >
          <IonLabel className="ion-text-capitalize" color="light">
            {threadType === "report" ? "Buat Laporan" : "Awali Diskusi"}
          </IonLabel>
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default ThreadCreationPage;
