import { IonText } from "@ionic/react";
import { DataGetDisaterLocationsType } from "./Home.Types";
import * as React from "react";

type DisaterLocationProps = {
  dataGetDisaterLocations: DataGetDisaterLocationsType;
};

const DisasterLocation = React.memo(
  ({ dataGetDisaterLocations }: DisaterLocationProps) => {
    console.log(dataGetDisaterLocations);
    return (
      <>
        <IonText>Kawasan Banjir Saat Ini</IonText>
      </>
    );
  }
);

export default DisasterLocation;
