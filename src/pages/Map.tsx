import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import { useEffect, useState } from "react";
import getPosition from "../services/getPosition";
import { Geoposition } from "@ionic-native/geolocation";

const Map: React.FC = () => {
  const [position, setPosition] = useState<Geoposition>();

  useEffect(() => {
    getPosition(position, setPosition);
  }, [setPosition]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Peta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {position && (
          <GoogleMap
            defaultCenter={{
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

type GoogleMapProps = {
  defaultCenter: GoogleMapReact.Coords;
};
const GoogleMap = ({ defaultCenter }: GoogleMapProps) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDwnELJK07FDyl-5je99jyMWTaZjH_EC7g" }}
      defaultCenter={defaultCenter}
      defaultZoom={12}
    >
      <Marker lat={11.0168} lng={76.9558} />
      <Marker lat={11.0268} lng={76.9558} />
      <Marker lat={11.0368} lng={76.9558} />
    </GoogleMapReact>
  );
};

type MarkerProps = {
  lat: number;
  lng: number;
};
const Marker: React.FC<MarkerProps> = (props: MarkerProps) => (
  <div {...props} className="marker" />
);

export default Map;
