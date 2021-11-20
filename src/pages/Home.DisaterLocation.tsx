import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonHeader,
  IonImg,
  IonList,
  IonRow,
  IonText,
  IonThumbnail,
} from "@ionic/react";
import { DataGetDisaterLocationsType } from "./Home.Types";
import * as React from "react";
import "./Home.css";
import { useHistory } from "react-router";
import DisasterLocationDetail from "./DisasterLocationDetail";

type DisaterLocationProps = {
  dataGetDisaterLocations: DataGetDisaterLocationsType;
};

const DisasterLocation = React.memo(
  ({ dataGetDisaterLocations }: DisaterLocationProps) => {
    const history = useHistory();
    console.log(dataGetDisaterLocations);
    return (
      <>
        <IonText>
          <h3
            style={{
              fontWeight: "semi-bold",
              fontSize: "14px",
              margin: "24px 0px 16px 8px",
            }}
          >
            Kawasan Banjir Saat Ini
          </h3>
        </IonText>
        {dataGetDisaterLocations?.map((value, index) => {
          return (
            <IonCard
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              onClick={() => {
                history.push("/disaster-location/", {
                  dataGetDisasterLocation: value,
                });
              }}
            >
              <IonCardContent>
                <IonRow className="ion-no-padding">
                  <IonCol
                    style={{
                      maxWidth: "78px",
                      marginRight: "10px",
                    }}
                  >
                    <IonThumbnail className="disaster-location-thumbnail">
                      <img
                        alt="Ilustrasi Gambar Banjir"
                        src="https://disk.mediaindonesia.com/thumbs/1800x1200/news/2020/10/cdb6fae9bdff54319546bb32fdd8edf3.jpg"
                      />
                    </IonThumbnail>
                  </IonCol>
                  <IonCol>
                    <IonText color="dark">
                      <h2
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                        }}
                      >
                        {value.district}, {value.city}
                      </h2>
                      <p
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        kedalaman banjir <strong>{value.floodSeverity}</strong>
                      </p>
                    </IonText>
                    <IonText color="grey">
                      <p
                        style={{
                          fontSize: "10px",
                        }}
                      >
                        {value.timestamp}
                      </p>
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
          );
        })}
      </>
    );
  }
);

export default DisasterLocation;
