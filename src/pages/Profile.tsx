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
import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonList>
          <IonItem lines="none" className="user-info">
            <IonAvatar slot="start">
              <img
                src="https://i.pinimg.com/280x280_RS/66/be/73/66be73a532c4bcb62f5dcbee1522d809.jpg"
                alt="Dhira Wigata Putra"
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
                Dhira Wigata Putra
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
            <IonButton slot="end" fill="clear" color="dark">
              <IonIcon slot="icon-only" icon={settingsOutline} />
            </IonButton>
          </IonItem>
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
