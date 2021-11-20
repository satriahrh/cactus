import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonChip,
  IonCol,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonText,
} from "@ionic/react";
import {
  ellipsisVertical,
  locationOutline,
  caretUpOutline,
  chatbubbleOutline,
  shareSocialOutline,
} from "ionicons/icons";
import { useEffect, useState } from "react";
import { Thread } from "./DisasterLocationDetail.Types";
import { DataGetDisaterLocationType } from "./Home.Types";
import "./DisasterLocationDetail.css";

type ThreadsListingProps = {
  dataGetDisasterLocation: DataGetDisaterLocationType;
};

const ThreadsListing = ({ dataGetDisasterLocation }: ThreadsListingProps) => {
  const [threadsListingData, setThreadsListingData] =
    useState<ThreadsListingDataType>({
      isLoading: true,
      data: [],
    });
  useEffect(() => {
    if (threadsListingData.isLoading) {
      setThreadsListingData((prevState) => ({
        isLoading: false,
        data: prevState.data.concat([
          {
            lastUpdated: "4 minutes",
            title:
              "Rumahku kebanjiran 1,5 Meter, butuh bantuan segera. ada bayi dan lansia!!",
            locationDisplay: "Kalibata, Jakarta Selatan",
            numberOfReply: 4,
            numberOfUpVote: 83,
            authorName: "Dhira Wigata",
            authorAvatarUrl:
              "https://i.pinimg.com/280x280_RS/66/be/73/66be73a532c4bcb62f5dcbee1522d809.jpg",
            reportState: "unresolved",
            type: "disaster-report",
          },
          {
            lastUpdated: "4 minutes",
            title:
              "Rumahku kebanjiran 1,5 Meter, butuh bantuan segera. ada bayi dan lansia!!",
            locationDisplay: "Kalibata, Jakarta Selatan",
            numberOfReply: 4,
            numberOfUpVote: 83,
            authorName: "Dhira Wigata",
            authorAvatarUrl:
              "https://i.pinimg.com/280x280_RS/66/be/73/66be73a532c4bcb62f5dcbee1522d809.jpg",
            reportState: "unresolved",
            type: "disaster-report",
          },
          {
            lastUpdated: "4 minutes",
            title:
              "Rumahku kebanjiran 1,5 Meter, butuh bantuan segera. ada bayi dan lansia!!",
            locationDisplay: "Kalibata, Jakarta Selatan",
            numberOfReply: 4,
            numberOfUpVote: 83,
            authorName: "Dhira Wigata",
            authorAvatarUrl:
              "https://i.pinimg.com/280x280_RS/66/be/73/66be73a532c4bcb62f5dcbee1522d809.jpg",
            reportState: "unresolved",
            type: "disaster-report",
          },
          {
            lastUpdated: "4 minutes",
            title:
              "Rumahku kebanjiran 1,5 Meter, butuh bantuan segera. ada bayi dan lansia!!",
            locationDisplay: "Kalibata, Jakarta Selatan",
            numberOfReply: 4,
            numberOfUpVote: 83,
            authorName: "Dhira Wigata",
            authorAvatarUrl:
              "https://i.pinimg.com/280x280_RS/66/be/73/66be73a532c4bcb62f5dcbee1522d809.jpg",
            reportState: "unresolved",
            type: "disaster-report",
          },
        ]),
      }));
    }
  }, [threadsListingData.isLoading]);

  return (
    <IonList>
      {threadsListingData.data.map((value, index) => {
        return (
          <IonCard className="thread-card">
            <IonCardHeader
              className="thread-card-header"
              style={{
                borderBottom: "solid 0.4px #EAEAEA",
              }}
            >
              <IonItem lines="none" className="thread-card-header-content">
                <IonAvatar
                  slot="start"
                  style={
                    {
                      // width: "24px",
                      // height: "24px",
                    }
                  }
                >
                  <img src={value.authorAvatarUrl} alt={value.authorName} />
                </IonAvatar>
                <IonText>
                  <p
                    style={{
                      fontSize: "14px",
                      margin: 0,
                    }}
                  >
                    {value.authorName}
                  </p>
                  <p
                    style={{
                      fontSize: "10px",
                      margin: 0,
                    }}
                  >
                    {value.lastUpdated}
                  </p>
                </IonText>

                <IonItem slot="end" lines="none" className="thread-card-header">
                  <IonChip
                    color={
                      value.reportState === "unresovled" ? "success" : "danger"
                    }
                    style={{
                      fontWeight: "bold",
                      fontSize: "10px",
                    }}
                  >
                    Laporan
                  </IonChip>
                  <IonButton shape="round" fill="clear" color="dark">
                    <IonIcon slot="icon-only" icon={ellipsisVertical} />
                  </IonButton>
                </IonItem>
              </IonItem>
            </IonCardHeader>
            <IonCardContent className="thread-content">
              <IonItem lines="none" className="thread-location-display">
                <IonIcon icon={locationOutline} />
                <IonText
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  color="dark"
                >
                  <span>{value.locationDisplay}</span>
                </IonText>
              </IonItem>
              <IonText color="dark">
                <h4
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {value.title}
                </h4>
              </IonText>
              <IonItem lines="none" className="thread-card-action">
                <IonButton fill="outline" className="thread-action-upvote">
                  <IonIcon icon={caretUpOutline} />
                  <IonLabel>{value.numberOfUpVote}</IonLabel>
                </IonButton>
                <IonButton fill="clear">
                  <IonIcon icon={chatbubbleOutline} />
                  <IonLabel className="ion-text-capitalize">
                    Diskusi <strong>{value.numberOfReply}</strong>
                  </IonLabel>
                </IonButton>
                <IonButton fill="clear" slot="end">
                  <IonIcon icon={shareSocialOutline} />
                </IonButton>
                '
              </IonItem>
            </IonCardContent>
          </IonCard>
        );
      })}
    </IonList>
  );
};

type ThreadsListingDataType = {
  isLoading: boolean;
  data: Array<Thread>;
};

export default ThreadsListing;
