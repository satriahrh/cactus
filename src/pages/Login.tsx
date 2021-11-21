import {
  IonContent,
  IonFooter,
  IonImg,
  IonPage,
  IonText,
  IonTitle,
} from "@ionic/react";
import { GoogleLogin } from "react-google-login";
import "./Login.css";

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonTitle className="tulisan title">Peduli Banjir</IonTitle>
        <IonText>
          <p className="tulisan description">
            Kami akan siaga membantu dan memantau daerahmu saat adanya bencana
            banjir, memberikan peringatan awal agar kamu dapat bersiap dan
            berlindung lebih awal.
          </p>
        </IonText>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonImg src="https://storage.googleapis.com/boram/image%208.jpeg" />
        <GoogleLogin
          className="google-login-button"
          clientId="933164749210-eerihlo632nv9r76drahbr5gioj0sfl1.apps.googleusercontent.com"
          buttonText="Login Dengan Google"
          onSuccess={(res) => {
            console.log(res);
          }}
          onFailure={(res) => {
            console.log(res);
          }}
          cookiePolicy={"single_host_origin"}
        />
      </IonFooter>
    </IonPage>
  );
};

export default LoginPage;
