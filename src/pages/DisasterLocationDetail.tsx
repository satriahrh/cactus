import { IonContent, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./DisasterLocationDetail.css";
import ThreadsListing from "./DisasterLocationDetail.ThreadsListing";
import Header from "./DisasterLocationDetail.Header";
import { DataGetDisaterLocationType } from "../entity/disasterLocation";

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
      <IonContent>
        {dataGetDisasterLocation && (
          <ThreadsListing dataGetDisasterLocation={dataGetDisasterLocation} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default DisasterLocationDetail;
