import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonThumbnail,
} from "@ionic/react";
import { settingsOutline } from "ionicons/icons";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../services/auth";
import { getProfile, GetProfileResponse } from "../services/getProfile";
import "./Profile.css";

const Profile: React.FC = () => {
  const history = useHistory();
  const { auth } = useContext(AuthContext);

  const [dataProfile, setDataProfile] = useState<GetProfileResponse>();
  useEffect(() => {
    if (auth) {
      getProfile(auth.token).then((value) => {
        console.log(value);
        setDataProfile(value);
      });
    }
  }, [auth, setDataProfile]);
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonList>
          {dataProfile && (
            <IonItem lines="none" className="user-info">
              <IonAvatar slot="start">
                <img
                  src={dataProfile?.data.display_picture}
                  alt={dataProfile?.data.full_name}
                />
              </IonAvatar>
              <IonText color="dark">
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    margin: 0,
                  }}
                >
                  {dataProfile?.data.full_name}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    margin: 0,
                  }}
                >
                  Kali Anggrek, Tangerang
                </p>
              </IonText>
              <IonButton
                slot="end"
                fill="clear"
                color="dark"
                onClick={() => {
                  history.push("/profile/settings");
                }}
              >
                <IonIcon slot="icon-only" icon={settingsOutline} />
              </IonButton>
            </IonItem>
          )}

          <IonItem lines="none">
            <IonCard className="disaster-pack-card">
              <IonCardHeader>
                <IonCardTitle
                  color="light"
                  style={{
                    fontSize: "29px",
                    fontWeight: "bold",
                  }}
                >
                  Disaster Pack
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonCardSubtitle
                  color="light"
                  style={{
                    fontSize: "18px",
                  }}
                >
                  Berlangganan kebutuhan bantuan serta peralatan darurat saat
                  kamu mengalami bencana
                </IonCardSubtitle>
                <IonButton
                  expand="block"
                  size="large"
                  className="ion-margin-top"
                >
                  <IonLabel color="light" className="ion-text-capitalize">
                    Berlanggan Sekarang
                  </IonLabel>
                </IonButton>
              </IonCardContent>
            </IonCard>
          </IonItem>

          <IonItemGroup>
            <IonItemDivider style={{ border: "none" }}>
              <IonLabel
                className="ion-padding"
                color="dark"
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Mengapa Kamu Perlu Disaster Pack?
              </IonLabel>
            </IonItemDivider>
            {[
              {
                title: "Pertolongan Pertama Lengkap",
                description:
                  "Tidak lagi khawatir makan dan istirahat, paket pertolongan lengkap selalu siap",
                ilustrationUrl:
                  "https://storage.googleapis.com/boram/survival-kit%201.png",
              },
              {
                title: "Transportasi Darurat",
                description:
                  "Selamatkan diri dan barangmu dari banjir dengan transportasi dari kami.",
                ilustrationUrl:
                  "https://storage.googleapis.com/boram/boat%201.png",
              },
              {
                title: "Penyelamatan Prioritas",
                description:
                  "Kamu akan mendapatkan proritas penjemputan dan rumah perlindungan.",
                ilustrationUrl:
                  "https://storage.googleapis.com/boram/premium%201.png",
              },
            ].map((value, index) => (
              <IonItem lines="none" className="ion-margin benefit-card">
                <IonThumbnail
                  slot="start"
                  className="benefit-thumbnail benefit-card"
                >
                  <img src={value.ilustrationUrl} />
                </IonThumbnail>
                <IonText>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {value.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    {value.description}
                  </p>
                </IonText>
              </IonItem>
            ))}
          </IonItemGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
