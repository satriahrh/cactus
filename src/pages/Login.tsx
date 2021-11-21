import {
  IonContent,
  IonFooter,
  IonImg,
  IonPage,
  IonText,
  IonTitle,
} from "@ionic/react";
import { useContext } from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useHistory, useLocation } from "react-router";
import { AuthContext } from "../services/auth";
import "./Login.css";

const LoginPage: React.FC = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation<{
    from: Location;
  }>();
  const history = useHistory();
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
          onSuccess={(
            res: GoogleLoginResponse | GoogleLoginResponseOffline
          ) => {
            if ("tokenId" in res) {
              login(res.tokenId, (error: any) => {
                if (!error) {
                  console.log("mantap");
                  if (location.state?.from) {
                    history.push(location.state.from.pathname);
                  } else {
                    history.push("/");
                  }
                } else {
                  console.log(error);
                }
              });
            }
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
