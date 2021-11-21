import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonChip,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTextarea,
  IonToolbar,
} from "@ionic/react";
import {
  ellipsisVertical,
  caretUpOutline,
  locationOutline,
  chatbubbleOutline,
  shareSocialOutline,
  send,
} from "ionicons/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ThreadDetail, ThreadReply } from "../entity/thread";
import { Remarkable } from "remarkable";
import "./ThreadDetail.css";

const ThreadDetailPage: React.FC = () => {
  const { id } = useParams<{
    id: string;
  }>();

  const [dataThreadDetail, setDataThreadDetail] = useState<ThreadDetail>();
  useEffect(() => {
    if (id) {
      setDataThreadDetail({
        id: 4,
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
        content: "# Halo guys",
        images: [],
        replies: [
          {
            id: 1,
            authorName: "Dhira Wigata",
            authorAvatarUrl:
              "https://i.pinimg.com/280x280_RS/66/be/73/66be73a532c4bcb62f5dcbee1522d809.jpg",
            timestamp: "14:33 Januari 12, 2021",
            content: "Menginspirasi sekali",
            numberOfUpVote: 3,
            replies: [
              {
                id: 1,
                authorName: "Dhira Wigata",
                authorAvatarUrl:
                  "https://i.pinimg.com/280x280_RS/66/be/73/66be73a532c4bcb62f5dcbee1522d809.jpg",
                content: "Mantap banget kamu ya",
                timestamp: "14:34 Januari 12, 2021",
              },
            ],
          },
          {
            id: 2,
            authorName: "Dhira Wigata",
            authorAvatarUrl:
              "https://i.pinimg.com/280x280_RS/66/be/73/66be73a532c4bcb62f5dcbee1522d809.jpg",
            timestamp: "14:33 Januari 12, 2021",
            content: "Menginspirasi sekali",
            numberOfUpVote: 3,
            replies: [
              {
                id: 1,
                authorName: "Dhira Wigata",
                authorAvatarUrl:
                  "https://i.pinimg.com/280x280_RS/66/be/73/66be73a532c4bcb62f5dcbee1522d809.jpg",
                content: "Mantap banget kamu ya",
                timestamp: "14:34 Januari 12, 2021",
              },
            ],
          },
          {
            id: 3,
            authorName: "Dhira Wigata",
            authorAvatarUrl:
              "https://i.pinimg.com/280x280_RS/66/be/73/66be73a532c4bcb62f5dcbee1522d809.jpg",
            timestamp: "14:33 Januari 12, 2021",
            content: "Menginspirasi sekali",
            numberOfUpVote: 3,
            replies: [
              {
                id: 1,
                authorName: "Dhira Wigata",
                authorAvatarUrl:
                  "https://i.pinimg.com/280x280_RS/66/be/73/66be73a532c4bcb62f5dcbee1522d809.jpg",
                content: "Mantap banget kamu ya",
                timestamp: "14:34 Januari 12, 2021",
              },
              {
                id: 2,
                authorName: "Dhira Wigata",
                authorAvatarUrl:
                  "https://i.pinimg.com/280x280_RS/66/be/73/66be73a532c4bcb62f5dcbee1522d809.jpg",
                content: "Mantap banget kamu ya",
                timestamp: "14:34 Januari 12, 2021",
              },
              {
                id: 3,
                authorName: "Dhira Wigata",
                authorAvatarUrl:
                  "https://i.pinimg.com/280x280_RS/66/be/73/66be73a532c4bcb62f5dcbee1522d809.jpg",
                content: "Mantap banget kamu ya",
                timestamp: "14:34 Januari 12, 2021",
              },
            ],
          },
        ],
      });
    }
  }, [id, setDataThreadDetail]);

  const threadContent = new Remarkable();

  const [theReply, setTheReply] = useState<string>("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={ellipsisVertical} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {dataThreadDetail && (
          <>
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
                    <img
                      src={dataThreadDetail.authorAvatarUrl}
                      alt={dataThreadDetail.authorName}
                    />
                  </IonAvatar>
                  <IonText>
                    <p
                      style={{
                        fontSize: "14px",
                        margin: 0,
                      }}
                    >
                      {dataThreadDetail.authorName}
                    </p>
                    <p
                      style={{
                        fontSize: "10px",
                        margin: 0,
                      }}
                    >
                      {dataThreadDetail.lastUpdated}
                    </p>
                  </IonText>

                  <IonItem
                    slot="end"
                    lines="none"
                    className="thread-card-header"
                  >
                    <IonChip
                      color={
                        dataThreadDetail.reportState === "unresovled"
                          ? "success"
                          : "danger"
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
                    <span>{dataThreadDetail.locationDisplay}</span>
                  </IonText>
                </IonItem>
                <IonText color="dark">
                  <h4
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    {dataThreadDetail.title}
                  </h4>
                </IonText>
                {dataThreadDetail && (
                  <IonText color="dark">
                    <div
                      className="thread-detail-content"
                      dangerouslySetInnerHTML={{
                        __html: threadContent.render(dataThreadDetail.content),
                      }}
                    />
                  </IonText>
                )}
                <IonItem lines="none" className="thread-card-action">
                  <IonButton fill="outline" className="thread-action-upvote">
                    <IonIcon icon={caretUpOutline} />
                    <IonLabel>{dataThreadDetail.numberOfUpVote}</IonLabel>
                  </IonButton>
                  <IonButton fill="clear" slot="end">
                    <IonIcon icon={shareSocialOutline} />
                  </IonButton>
                  '
                </IonItem>
              </IonCardContent>
            </IonCard>
            <IonText>
              <h3
                style={{
                  margin: "16px 16px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {dataThreadDetail.numberOfReply} Orang Menanggapi
              </h3>
            </IonText>
            {dataThreadDetail.replies.map((value) => (
              <ThreadReplyComponent key={value.id} data={value} />
            ))}
          </>
        )}
      </IonContent>
      <IonFooter>
        <IonItem>
          <IonAvatar
            slot="start"
            style={{
              width: "32px",
              height: "32px",
            }}
          >
            <img
              src={
                "https://i.pinimg.com/280x280_RS/66/be/73/66be73a532c4bcb62f5dcbee1522d809.jpg"
              }
              alt={"Dhira Wigata Putra"}
            />
          </IonAvatar>
          <IonTextarea
            className="the-reply"
            value={theReply}
            placeholder="Tinggalkan komentar  "
            onIonChange={(e) => setTheReply(e.detail.value!)}
          ></IonTextarea>
          <IonButton
            slot="end"
            fill="clear"
            style={{
              height: "45px",
            }}
            onClick={() => {
              console.log(theReply);
            }}
          >
            <IonIcon icon={send} slot="icon-only" />
          </IonButton>
        </IonItem>
      </IonFooter>
    </IonPage>
  );
};

type ThreadReplyComponentProps = {
  data: ThreadReply;
};

const ThreadReplyComponent: React.FC<ThreadReplyComponentProps> = ({
  data,
}) => {
  const threadReplyContent = new Remarkable();
  return (
    <IonCard
      className="thread-reply"
      style={{
        backgroundColor: "#F3F6FF",
      }}
    >
      <IonCardHeader>
        <IonItem
          lines="none"
          className="thread-card-header-content thread-reply-header-content"
        >
          <IonAvatar
            slot="start"
            style={{
              width: "32px",
              height: "32px",
            }}
          >
            <img src={data.authorAvatarUrl} alt={data.authorName} />
          </IonAvatar>
          <IonText>
            <p
              style={{
                fontSize: "14px",
                margin: 0,
              }}
            >
              {data.authorName}
            </p>
            <p
              style={{
                fontSize: "10px",
                margin: 0,
              }}
            >
              {data.timestamp}
            </p>
          </IonText>
        </IonItem>
      </IonCardHeader>
      <IonCardContent>
        <IonText>
          <div
            style={{
              color: "#727272",
            }}
            dangerouslySetInnerHTML={{
              __html: threadReplyContent.render(data.content),
            }}
          ></div>
        </IonText>
        <IonItem
          lines="none"
          className="thread-card-action thread-reply-action"
        >
          <IonButton fill="outline" className="thread-action-upvote">
            <IonIcon icon={caretUpOutline} />
            <IonLabel>{data.numberOfUpVote}</IonLabel>
          </IonButton>
          <IonButton
            fill="clear"
            className="thread-action-upvote ion-margin-start"
          >
            <IonIcon icon={chatbubbleOutline} slot="start" />
            <IonLabel className="ion-text-capitalize">
              {data.replies.length} Menanggapi
            </IonLabel>
          </IonButton>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default ThreadDetailPage;
