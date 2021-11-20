import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import { useState } from "react";

const Map: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Peta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <GoogleMap />
      </IonContent>
    </IonPage>
  );
};

const GoogleMap = () => {
  const [center, setCenter] = useState({ lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(11);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDwnELJK07FDyl-5je99jyMWTaZjH_EC7g" }}
      defaultCenter={center}
      defaultZoom={zoom}
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
