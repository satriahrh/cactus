import { IonContent, IonPage } from "@ionic/react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import { useEffect, useState } from "react";
import getPosition from "../services/getPosition";
import { Geoposition } from "@ionic-native/geolocation";
import GoogleMap from "./Map.GoogleMap";
import DisasterInformation from "./Map.DisaterInformation";
import getDisasterLocations from "../services/getDisasterLocations";
import { DataGetDisaterLocationsType } from "../entity/disasterLocation";

const Map: React.FC = () => {
  const [position, setPosition] = useState<Geoposition>();

  useEffect(() => {
    getPosition(position, setPosition);
  }, [setPosition]);

  const [dataGetDisaterLocations, setDataGetDisasterLocations] =
    useState<DataGetDisaterLocationsType>();
  useEffect(() => {
    getDisasterLocations(position, setDataGetDisasterLocations);
  }, [position, setDataGetDisasterLocations]);

  return (
    <IonPage>
      <IonContent fullscreen>
        {position && (
          <GoogleMap
            defaultCenter={{
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }}
            dataGetDisaterLocations={dataGetDisaterLocations}
          />
        )}
        <DisasterInformation
          position={position}
          dataGetDisaterLocations={dataGetDisaterLocations}
        />
      </IonContent>
    </IonPage>
  );
};

export default Map;
