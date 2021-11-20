import GoogleMapReact from "google-map-react";
import { DataGetDisaterLocationsType } from "../entity/disasterLocation";

type GoogleMapProps = {
  defaultCenter: GoogleMapReact.Coords;
  dataGetDisaterLocations: DataGetDisaterLocationsType | undefined;
};
const GoogleMap = ({
  defaultCenter,
  dataGetDisaterLocations,
}: GoogleMapProps) => {
  return (
    <div
      style={{
        height: "78vh",
        width: "100%",
        position: "absolute",
      }}
    >
      {" "}
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDwnELJK07FDyl-5je99jyMWTaZjH_EC7g" }}
        defaultCenter={defaultCenter}
        defaultZoom={15}
      >
        {dataGetDisaterLocations &&
          dataGetDisaterLocations.map((value, index) => {
            console.log(value.longitude, value.latitude);
            return (
              <Marker
                key={index}
                lat={value.latitude ? value.latitude : 0}
                lng={value.longitude ? value.longitude : 0}
              />
            );
          })}
      </GoogleMapReact>
    </div>
  );
};

type MarkerProps = {
  lat: number;
  lng: number;
};
const Marker: React.FC<MarkerProps> = (props: MarkerProps) => (
  <div {...props} className="marker" />
);

export default GoogleMap;
